
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

const test = (e) =>{
    //for playing x and o
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
    console.log(a,b,c,d,e,f,g,h,i);
    //condition for if x wins and o wins
    if ((a=="X" && b=="X" && c=="X") || (d=="X" && k=="X" && f=="X") || (g=="X" && h=="X" && i=="X") || (a=="X" && d=="X" && g=="X") || (b=="X" && k=="X" && h=="X") || (c=="X" && f=="X" && i=="X") || (a=="X" && k=="X" && i=="X") || (c=="X" && k=="X" && g=="X")) {
        console.log("ose")
        win.innerText = "win win!!!"
    }else if ((a=="O" && b=="O" && c=="O") || (d=="O" && k=="O" && f=="O") || (g=="O" && h=="O" && i=="O") || (a=="O" && d=="O" && g=="O") || (b=="O" && k=="O" && h=="O") || (c=="O" && f=="O" && i=="O") || (a=="O" && k=="O" && i=="O") || (c=="O" && k=="O" && g=="O")) {
        console.log("ose")
        win.innerText = "win win!!!"
    }
    //condition to disable after winning
    if ((a=="X" && b=="X" && c=="X") || (d=="X" && k=="X" && f=="X") || (g=="X" && h=="X" && i=="X") || (a=="X" && d=="X" && g=="X") || (b=="X" && k=="X" && h=="X") || (c=="X" && f=="X" && i=="X") || (a=="X" && k=="X" && i=="X") || (c=="X" && k=="X" && g=="X")) {
        firstTd.disabled=false;
        secondTd.disabled=false;
        thirdTd.disabled=false;
        fourthTd.disabled=false;
        fifthTd.disabled=false;
        sixTd.disabled=false;
        sevenTd.disabled=false;
        eightTd.disabled=false;
        nineTd.disabled=false;
    }else if ((a=="O" && b=="O" && c=="O") || (d=="O" && k=="O" && f=="O") || (g=="O" && h=="O" && i=="O") || (a=="O" && d=="O" && g=="O") || (b=="O" && k=="O" && h=="O") || (c=="O" && f=="O" && i=="O") || (a=="O" && k=="O" && i=="O") || (c=="O" && k=="O" && g=="O")) {
        firstTd.disabled=true;
        secondTd.disabled=true;
        thirdTd.disabled=true;
        fourthTd.disabled=true;
        fifthTd.disabled=true;
        sixTd.disabled=true;
        sevenTd.disabled=true;
        eightTd.disabled=true;
        nineTd.disabled=true;
    }
    // console.log(e.target.id);

   
    // else{console.log("noono")}
}
// const start = () =>{
    
// }