// import axios from 'axios';

export const FETCH_USERS = 'FETCH_USERS';
export const fetchUsers = () async (dispatch, getState, api) => {
  // const res = await axios.get('http://react-ssr-api.herokuapp.com/users');
  const res = await api.get('/users');


  dispatch({
    type: FETCH_USERS,
    payload: res
  });
}
