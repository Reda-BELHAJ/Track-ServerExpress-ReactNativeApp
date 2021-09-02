import createDataContext from "./createDataContext";
import trackerApi from "../api/Tracker";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { navigate } from '../navigationRef'

const authReducer = (state, action) => {
    switch (action.type) {
        case 'add_error':
            return {...state, errorMessage: action.payload}
        
        case 'signin':
            return { errorMessage: "", token: action.payload };
        
        case 'clear_error_message':
            return { ...state, errorMessage: ""};
        
        case 'signout':
            return { token: null, errorMessage: '' };
        default:
            return state
    }
}

const tryLocalSignIn = dispatch => async () => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
        dispatch({ type: 'signin', payload: token })
        navigate('TrackList')
    } else {
        navigate('SignUp')
    }
}

const clearErrorMessage = dispatch => () => dispatch({ type: 'clear_error_message' })

const signup = dispatch => async ({ email, password }) => {
    try {
        const response = await trackerApi.post('/signup', { email, password })
        
        await AsyncStorage.setItem('token', response.data.token)
        dispatch({ type: 'signin', payload: response.data.token })

        navigate('TrackList')
    } catch (error) {
        dispatch({ type: 'add_error', payload: 'Something Went Wrong With Sign Up' })
    }
}

const signin = dispatch => async ({ email, password }) => {
    try {
        const response = await trackerApi.post('/signin', { email, password })
        
        await AsyncStorage.setItem('token', response.data.token)
        dispatch({ type: 'signin', payload: response.data.token })

        navigate('TrackList')
    } catch (error) {
        console.log(error.message)
        dispatch({ type: 'add_error', payload: 'Something Went Wrong With Sign In' })
    }
}

const signout = dispatch => async () => {
    await AsyncStorage.removeItem('token')

    dispatch({ type: 'signout'})
    navigate('SignUp')
}

export const { Provider, Context } = createDataContext(
    authReducer, 
    { signup, signin, signout, clearErrorMessage, tryLocalSignIn },
    { token: null, errorMessage: '' }
);