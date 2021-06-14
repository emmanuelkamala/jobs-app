import { useReducer, useEffect } from 'react';
import axios from 'axios';

const actions = {
  MAKE_REQUEST: 'make request',
  GET_DATA: 'get data',
  ERROR: 'error',
  UPDATE_HAS_NEXT_PAGE: 'update-has-next-page'
}

//const BASE_URL = '/';
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
    case actions.UPDATE_HAS_NEXT_PAGE:
      return { ...state, hasNextPage: action.payload.hasNextPage }
    default:
      return state
  }
}

const FetchJobs = (params, page) => {
  const [state, dispatch] = useReducer(reducer, { jobs: [], loading: true });

  useEffect(()=>{
    const cancelToken = axios.CancelToken.source();
    dispatch({ type: actions.MAKE_REQUEST })
      axios.post(BASE_URL, {'method': 'POST',
      'headers': {
        'Content-Type': 'application/json'
      },
      cancelToken: cancelToken.token,
      params: { markdown: true, page: page, ...params }
    }).then(res => {
      dispatch({ type: actions.GET_DATA, payload: { jobs: res.data.results}})
      console.log(res.data);
    }).catch(e => {
      if (axios.isCancel(e)) return
      dispatch({ type: actions.ERROR, payload: { error: 'Error fetching posts...!'}})
    })

    const cancelToken2 = axios.CancelToken.source();
    axios.post(BASE_URL, {'method': 'POST',
      'headers': {
        'Content-Type': 'application/json'
      },
      cancelToken: cancelToken2.token,
      params: { markdown: true, page: page + 1, ...params }
    }).then(res => {
      dispatch({ type: actions.UPDATE_HAS_NEXT_PAGE, payload: { hasNextPage: res.data.results.length !== 0}})
      console.log(res.data);
    }).catch(e => {
      if (axios.isCancel(e)) return
      dispatch({ type: actions.ERROR, payload: { error: 'Error fetching posts...!'}})
    })

    return ()=>{
      cancelToken.cancel();
      cancelToken2.cancel();
    }
  }, [params, page])

  return state;
}

export default FetchJobs;
