
let initialValue ="X"
let firstTd = document.getElementById("one");
let secondTd = document.getElementById("two");
let thirdTd = document.getElementById("three");
let fourthTd = document.getElementById("four");
let fifthTd = document.getElementById("five");
let sixTd = document.getElementById("six");
let sevenTd = document.getElementById("seven");
let eightTd = document.getElementById("eight");
let nineTd = document.getElementById("nine");
let win = document.getElementById("winning");
let firstPlayer = document.getElementById("playerno");
let firstScore = document.getElementById("scoreno");
let secondPlayer = document.getElementById("playertwo");
let secondScore = document.getElementById("scoretwo");
let info = document.getElementById("information");
// let noInput = document.getElementById("inputno").value;
// let firstInput = document.getElementById("inputno").value;
// let secondInput = document.getElementById("inputtwo").value;
const start = ()=>{
    let firstInput = document.getElementById("inputno").value;
    let secondInput = document.getElementById("inputtwo").value;
    if(firstInput != ""&& secondInput !=""){
    firstPlayer.innerHTML =  ` ${firstInput}`
    secondPlayer.innerHTML= `${secondInput}`
    win.innerText="Welcome"
    info.innerHTML = "good luck to players"
    }else{
        info.innerHTML = "please input a correct name "
        win.innerText = "input name to play"
    }
  }
const test = (e) =>{
    let firstInput = document.getElementById("inputno").value;
    let secondInput = document.getElementById("inputtwo").value;
    //for playing x and o
    if(firstInput != ""&& secondInput !=""){
        if ( e.target.innerText == "" && initialValue == "X") {
            e.target.innerText = "X";
            initialValue ="O" ;
            win.innerText = "your turn (O)"
        }else if ( e.target.innerText == "" && initialValue == "O") {
            e.target.innerText = "O";
            initialValue ="X" ;
            win.innerText = "your turn (X)"
        }
        // else if(firstTd === secondTd){
        //     alert("alert!!!")
        // }
        let a = firstTd.innerHTML;
        let b = secondTd.innerHTML;
        let c = thirdTd.innerHTML;
        let d = fourthTd.innerHTML;
        let k = fifthTd.innerHTML;
        let f = sixTd.innerHTML;
        let g = sevenTd.innerHTML;
        let h = eightTd.innerHTML;
        let i = nineTd.innerHTML;
        
        // console.log(a,b,c,d,e,f,g,h,i);
        //condition for if x wins and o wins
        if ((a=="X" && b=="X" && c=="X") || (d=="X" && k=="X" && f=="X") || (g=="X" && h=="X" && i=="X") || (a=="X" && d=="X" && g=="X") || (b=="X" && k=="X" && h=="X") || (c=="X" && f=="X" && i=="X") || (a=="X" && k=="X" && i=="X") || (c=="X" && k=="X" && g=="X")) {
            console.log("ose")
            info.innerHTML = "there is a winner pls press the continue button"
            win.innerText = `${firstInput} is the winner`
            ++firstScore.innerHTML
        }else if ((a=="O" && b=="O" && c=="O") || (d=="O" && k=="O" && f=="O") || (g=="O" && h=="O" && i=="O") || (a=="O" && d=="O" && g=="O") || (b=="O" && k=="O" && h=="O") || (c=="O" && f=="O" && i=="O") || (a=="O" && k=="O" && i=="O") || (c=="O" && k=="O" && g=="O")) {
            console.log("ose")
            info.innerHTML = "there is a winner pls press the continue button"
            win.innerText = `${secondInput} is the winner`
            ++secondScore.innerHTML
        }
        // if (info.innerHTML == "there is a winner pls press the continue button") {
        //     info.innerHTML = "there is a winner already pls proceed"
        //     e.target.innerText = "X";
        // }
        //condition to disable after winning
        // if((a=="X" && b=="X" && c=="X") || (d=="X" && k=="X" && f=="X") || (g=="X" && h=="X" && i=="X") || (a=="X" && d=="X" && g=="X") || (b=="X" && k=="X" && h=="X") || (c=="X" && f=="X" && i=="X") || (a=="X" && k=="X" && i=="X") || (c=="X" && k=="X" && g=="X")){
        //     disable()
           
        // }
        // if ((a=="X" && b=="X" && c=="X") || (d=="X" && k=="X" && f=="X") || (g=="X" && h=="X" && i=="X") || (a=="X" && d=="X" && g=="X") || (b=="X" && k=="X" && h=="X") || (c=="X" && f=="X" && i=="X") || (a=="X" && k=="X" && i=="X") || (c=="X" && k=="X" && g=="X") && (a=="O" && b=="O" && c=="O") || (d=="O" && k=="O" && f=="O") || (g=="O" && h=="O" && i=="O") || (a=="O" && d=="O" && g=="O") || (b=="O" && k=="O" && h=="O") || (c=="O" && f=="O" && i=="O") || (a=="O" && k=="O" && i=="O") || (c=="O" && k=="O" && g=="O")) {
        //     info.innerHTML = "oops draw pls press the continue button"
        //     win.innerText = " play"
        // }
        // console.log(e.target.id);
    
       
        // else{console.log("noono")}
    }else{
        win.innerText="CLick on start button for game to start";
    info.innerHTML = "!!!!!!!!!!!!!!!!"
    }
}
let audi = document.getElementById("playMe");
let pla = ()=>{
    audi.play();
}
const restart = ()=>{
    let firstInput = document.getElementById("inputno").value;
    let secondInput = document.getElementById("inputtwo").value;
    if(firstInput != ""&& secondInput !=""){
    firstTd.innerHTML = "";
    secondTd.innerHTML = "";
    thirdTd.innerHTML = "";
    fourthTd.innerHTML = "";
    fifthTd.innerHTML = "";
    sixTd.innerHTML = "";
    sevenTd.innerHTML = "";
    eightTd.innerHTML = "";
    nineTd.innerHTML = "";
    win.innerText="next player turn";
    info.innerHTML = "This is another game goodluck"
    }else{
        info.innerHTML = "please input a correct name "
        win.innerText = "input name to play"
    }

}

// const start = () =>{
    
// }