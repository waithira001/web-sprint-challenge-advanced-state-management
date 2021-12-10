import axios from 'axios';

export const FETCH_START="FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAIL = "FETCH_FAIL";
export const ADD_SMURF = "ADD_SMURF";

export const fetchSmurfs = () =>
{
    return (dispatch =>
    {
        axios.get("http://localhost:3333/smurfs")
            .then(resp =>
            {
                dispatch(fetchSmurfs(resp.data));
            })
            .catch(error =>
            {
                dispatch(fetchFail(error));
            });
    });
};

export const fetchStart = () =>
{
    return ({ type: FETCH_START });
};

export const fetchSuccesss = (smurfs) =>
{
    return ({ type: FETCH_SUCCESS, payload: smurfs });
};

export const fetchFail = (error) =>
{
    return ({ type: FETCH_FAIL, payload: error });
};

export const addSmurf = (smurf) => 
{
    return ({ type: ADD_SMURF, payload: smurf });
};
//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.