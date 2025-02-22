import React, { useReducer } from 'react';
import axios from 'axios';
import GithubContext from './githubContext';
import GithubReducer from './githubReducer';
import {
    SEARCH_USERS,
    SET_LOADING,
    CLEAR_USERS,
    GET_USER,
    GET_REPOS
} from '../types';

let githubClientId;
let githubClientSecret;

if(process.env.NODE_ENV !== 'production') {
  githubClientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
  githubClientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
} else {
  githubClientId = process.env.GITHUB_CLIENT_ID;
  githubClientSecret = process.env.GITHUB_CLIENT_SECRET;
}

const GithubState = props => {
    const initialState = {
        users: [],
        user: {},
        repos: [],
        loading: false
    }
    const [state, dispatch] = useReducer(GithubReducer, initialState);
    //search user
    const searchUsers = async text => {
        setLoading();
        //this.setState({loading: true});
        const res = await(axios.get(`https://api.github.com/search/users?q=${text}&client_id=${githubClientId}&client_secret=${githubClientSecret}`))
    
        //this.setState({users: res.data.items , loading: false});
       dispatch({
           type: SEARCH_USERS,
           payload: res.data.items
       });
      
      }
    //get user
    
  
 const getUser = async(username) => {
    setLoading();
    //this.setState({loading: true});
    const res = await axios.get(
      `https://api.github.com/users/${username}?client_id=${
        githubClientId
      }&client_secret=${githubClientSecret}`
      );
     console.log(res);
     dispatch({
         type: GET_USER,
         payload: res.data
     });
    //this.setState({user: res.data , loading: false});
    //setUser(res.data);
    //setLoading(false);

    
  };
    //get Repos
    const getUserRepos = async(username) => {
        setLoading();
        //this.setState({loading: true});
        const res = await axios.get(
          `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${
            githubClientId
          }&client_secret=${githubClientSecret}`
          );
         console.log(res);
      //  this.setState({repos: res.data , loading: false});
    //   setRepos(res.data);
    //   setLoading(false);
    dispatch({
        type: GET_REPOS,
        payload: res.data
    });
        
      };
    //clear Users
      
 const clearUsers = () => dispatch({ type: CLEAR_USERS })

    //set Loading
    const setLoading = () => dispatch({ type: SET_LOADING});

    return <GithubContext.Provider
    value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        searchUsers,
        clearUsers,
        getUser,
        getUserRepos

    }}
    >
        {props.children}

    </GithubContext.Provider>
        
}
export default GithubState;