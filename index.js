const convertButton = document.getElementById("convert-btn")
const input = document.getElementById("input")
let lengthCalc = document.getElementById("length-calc")
let volumeCalc = document.getElementById("volume-calc")
let massCalc = document.getElementById("mass-calc")


convertButton.addEventListener("click", function () {
    let numInput = input.value
    input.value = ""

    let meterToFeet = (numInput * 3.281).toFixed(3)
    let feetToMeter = (numInput / 3.281).toFixed(3)
    lengthCalc.textContent = `${numInput} meters = ${meterToFeet} feet | ${numInput} feet = ${feetToMeter} meters`

    let literToGallon = (numInput * 0.264).toFixed(3)
    let gallonToLiter = (numInput / 0.264).toFixed(3)
    volumeCalc.textContent = `${numInput} liters = ${literToGallon} gallons | ${numInput} gallons = ${gallonToLiter} liters`

    let kiloToPound = (numInput * 2.204).toFixed(3)
    let poundToKilo = (numInput / 2.204).toFixed(3)
    massCalc.textContent = `${numInput} kilos = ${kiloToPound} pounds | ${numInput} pounds = ${poundToKilo} kilos`
})