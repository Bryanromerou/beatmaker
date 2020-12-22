const arr = [0,0,0,0,0,0,0,0,0,0,0,0]

const legend = {
    "Clap":"Clap",
    "Hi-Hat":"Hi-Hat",
    "Snare":"Snare",
    "Alt Snare":"Alt_Snare",
    "Alt Snare 2":"Alt_Snare_2",
    "Kick":"Kick",
}

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
        case "TOGGLE_SQUARE":
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