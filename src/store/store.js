import { createStore, combineReducers  } from 'redux'



const UserReducer = (state='',action)=> {
    
    switch(action.type){
        case 'USER':
            // console.log(action.user)
            return {
                user:action.user
            }
        default : 
            return{
                user:'not Called'
            }
    }
}


const store = createStore(
    combineReducers({
        user:UserReducer
    })
)
export default store