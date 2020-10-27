export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  // remove after dev
  // token: 'BQDPt0ReYO_t58j1YbllVcxXp_cPGKrHgT3VOaxJqRTG1lEOFuxHYFutcJWYkZlqXoZgfwIBSvOo532hekWMvqvH1LKGD7DKgjR_dEhBrwQCLig3XNGPz4y7fLJntE1W9fH3RcskxC94RBG3QtVAuyZeQwfxgskH0rNKObm6vuFdZ7kCSR5q',
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
        
        case 'SET_DISCOVER_WEEKLY':
            return {
                ...state,
                discover_weekly: action.discover_weekly,
            }
    }
}

export default reducer;
