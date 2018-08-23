import {ADD_COMMENT} from './actionTypes';
import {REMOVE_COMMENT} from './actionTypes';
import {EDIT_COMMENT} from './actionTypes';
import {THUMB_UP_COMMENT} from './actionTypes';
import {THUMB_DOWN_COMMENT} from './actionTypes';


function comments(state = [], action) {
    switch(action.type) {
            
        case ADD_COMMENT:
            return  [{
                id: action.id,
                text: action.text,
                votes: 0
            }, 
            ...state.comments];
            
        case REMOVE_COMMENT:
            return [{
                comments: state.comments.filter(comment => comment.id !== action.id)
            }];
            
        case EDIT_COMMENT:
            return [{
                id: state.comments.id,
                text: action.text
            }];
            
        case THUMB_UP_COMMENT:
            return [{
                id: state.comments.id,
                votes: state.comments.votes + 1
            }]
            
        case THUMB_DOWN_COMMENT:
            return [{
                id: state.comments.id,
                votes: state.comments.votes - 1
            }]
            
        default:
            return state;
    }
    return state;
}