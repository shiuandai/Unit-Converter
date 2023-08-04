/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let input_number_El=document.getElementById("input_number")
let length_convert_El=document.getElementById("length_convert")
let volume_convert_El=document.getElementById("volume_convert")
let unit_convert_El=document.getElementById("unit_convert")

function unit_converter(){
    length_convert_El.textContent=`
        ${input_number_El.value} meters = 
        ${parseFloat(3.281*input_number_El.value).toFixed(3)} feet | ${input_number_El.value} feet = ${parseFloat((1/3.281)*input_number_El.value).toFixed(3)} meters`
    volume_convert_El.textContent=`
        ${input_number_El.value} liters = 
        ${parseFloat(0.264*input_number_El.value).toFixed(3)} gallons | ${input_number_El.value} gallons = ${parseFloat((1/0.264)*input_number_El.value).toFixed(3)} liters`
    unit_convert_El.textContent=`
        ${input_number_El.value} kilos = 
        ${parseFloat(2.204*input_number_El.value).toFixed(3)} pounds | ${input_number_El.value} pounds = ${parseFloat((1/2.204)*input_number_El.value).toFixed(3)} kilos`
}