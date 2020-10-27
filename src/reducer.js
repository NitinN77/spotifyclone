export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  // remove after dev
  
};

const reducer = (state, action) => {

    console.log(action);

    switch(action.type) {
        case 'SET_USER':
            return{
                ...state,
                user: action.user,
            };
        default:
            return state;
        
        case 'SET_TOKEN':
            return{
                ...state,
                token: action.token,
            }

        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists,
            }
    }
}

export default reducer;
