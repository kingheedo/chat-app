import { setPrivateChatRoom } from '../actions/chatRoom_action';
import { SET_CURRENT_CHAT_ROOM, SET_USER_POSTS }from '../actions/types';
import { SET_PRIVATE_CHAT_ROOM }from '../actions/types';


const initialChatRoomState ={
    currentChatRoom:null,
    isPrivateChatRoom:false

}

export default function(state = initialChatRoomState, action){
    switch(action.type) {
             case SET_CURRENT_CHAT_ROOM:
                 return {
                     ...state,
                     currentChatRoom: action.payload
                 }
                 case SET_PRIVATE_CHAT_ROOM:
                    return {
                        ...state,
                        isPrivateChatRoom: action.payload
                    }
                case SET_USER_POSTS:
                    return{
                        ...state,
                        usersPosts : action.payload
                    }
            default:
                return state;
    }
}