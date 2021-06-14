import { useReducer, useEffect } from 'react';
import axios from 'axios';

const actions = {
  MAKE_REQUEST: 'make request',
  GET_DATA: 'get data',
  ERROR: 'error'
}

const BASE_URL = 'https://cors-anyway.herokuapp.com/https://search.torre.co/opportunities/_search/?';

//const BASE_URL= 'https://cors-anyway.herokuapp.com/https://jobs.github.com/positions.json';

const reducer = (state, action) => {
  switch (action.type) {
    case actions.MAKE_REQUEST:
      return { loading: true, jobs: [] }
    case actions.GET_DATA:
      return { ...state, loading: false, jobs: action.payload.jobs }
    case actions.ERROR:
      return { loading: false, error: true, error: action.payload.error, jobs: [] }
    default:
      return state
  }
}

const FetchJobs = (params, page) => {
  const [state, dispatch] = useReducer(reducer, { jobs: [], loading: true });

  useEffect(()=>{
    dispatch({ type: actions.MAKE_REQUEST })
      axios.post(BASE_URL, 
    {
      'method': 'POST',
      'headers': {
        'Content-Type': 'application/json'
      },
      params: { markdown: true, page: page, ...params }
    }).then(res => {
      dispatch({ type: actions.GET_DATA, payload: { jobs: res.data.results}})
      console.log(res.data);
    }).catch(e => {
      dispatch({ type: actions.ERROR, payload: { error: 'Error fetching posts...!'}})
    })
  }, [params, page])

  return state;
}

export default FetchJobs;
