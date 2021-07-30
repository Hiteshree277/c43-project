class System {
    constructor(){

    }

    authenticate(correctanswer,enteredanswer){
        if(correctanswer === enteredanswer.toUpperCase()){
            return true

        }

        else{
            return false
        }

    }
}