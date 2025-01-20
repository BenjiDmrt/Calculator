
const display = document.getElementById("result");

function calculate(){
    if(display.value == "" ){
        return display.value = "";
    }
    if( display.value === "Error"){
        return;
    }
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error";
    }
}
function clearDisplay(){
    display.value = "";
    console.log("cool")
}

function appendNumber(input){
    if (display.value === "Error") {
        display.value = ""; 
    }

    display.value += input;

}