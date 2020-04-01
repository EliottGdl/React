const initialState = { avatar: require("../../Image/ic_tag_faces.png") }

function changeAvatar(state = initialState,action) {
    let nextState;

    switch(action.type) {
        case 'NEW_AVATAR':
           
            nextState = {
                ...state,
                avatar: action.value
            }
            
            return nextState || state
        default:
            return state
    }

    return nextState
}

export default changeAvatar;