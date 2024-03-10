const inputElement = document.getElementById('inputValue');
function button_click(input){
    inputElement.value += input;
}
function button_clear(){
    inputElement.value = "";
}
function button_calculate(){
    inputElement.value = eval(inputElement.value);   
}


