import { useReducer } from 'react';

const actions = {
  MAKE_REQUEST: 'make request',
  GET_DATA: 'get data',
  ERROR: 'error'
}

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

const fetchJobs = (params, page) =>{
  const [state, dispatch] = useReducer(reducer, { jobs: [], loading: true })
  return (
    {
      jobs: [],
      loading: false,
      error: false,
    }

  )
}

export default fetchJobs;
