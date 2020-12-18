const arr = [0,0,0,0,0,0,0,0,0,0,0,0]
const initialState = {
    instruments:{
        "Clap":arr,
        "Hi-hat":arr,
        "Snare":arr,
        "Alt Snare":arr,
        "Alt Snare 2":arr,
        "Kick":arr
    }
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case "ADD_TODO":
            return{
                ...state,
            }
        case "DELETE_TODO":
            return{
                ...state,
            }
        default:
            return state
    }
}

export default reducer;