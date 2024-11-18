import {isValidUsername} from '6pp'


export const usernameValidator = (username) =>{
     if(!isValidUsername(username)){
        console.log(username.errormessage);
        return {isValid:false,errorMessage:"username is invalid"}
     }
}