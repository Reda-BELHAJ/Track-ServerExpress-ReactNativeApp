import createDataContext from "./createDataContext";
import TrackerAPI from "../api/Tracker";

const locationReducer = (state, action) => {
    switch (action.type) {
        case 'fetch_tracks':
            return action.payload
        default:
            return state
    }
}

const fetchTracks = dispatch => async () => {
    const response = await TrackerAPI.get('/tracks')
    dispatch({ type: 'fetch_tracks', payload: response.data })
};

const createTrack = dispatch => async (name, locations) => {
    await TrackerAPI.post('/tracks', { name, locations })
};

export const { Provider, Context } = createDataContext(
    locationReducer,
    { fetchTracks, createTrack },
    []
)