import axios from 'axios';

export const FETCH_JOKE_LOADING = 'FETCH_JOKE_LOADING';
export const FETCH_JOKE_SUCCESS = 'FETCH_JOKE_SUCCESS';
export const FETCH_JOKE_FAIL = 'FETCH_JOKE_FAIL';

export const getJoke = () => {
    return dispatch => {
        dispatch({ type:FETCH_JOKE_LOADING });
        axios
            .get('https://official-joke-api.appspot.com/jokes/programming/random')
            .then(res => {
                dispatch({type:FETCH_JOKE_SUCCESS, payload:res.data[0]})
            })
            .catch(err => {
                dispatch({type:FETCH_JOKE_FAIL, payload:err})
            });
    }
}


export const fetchJokeLoading = () => {
    return({ type:FETCH_JOKE_LOADING });
}

export const fetchJokeSuccess = (data) => {
    return({ type:FETCH_JOKE_SUCCESS, payload:data});
}

export const fetchJokeFail = (error) => {
    return({ type:FETCH_JOKE_FAIL, payload:error });
}