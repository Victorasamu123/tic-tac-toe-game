let initialValue ="X"

const test = (e) =>{
   
    if ( e.target.innerText == "" && initialValue == "X") {
        e.target.innerText = "X"
        initialValue ="O" 
    }else if ( e.target.innerText == "" && initialValue == "O") {
        e.target.innerText = "O"
        initialValue ="X" 
    }
}