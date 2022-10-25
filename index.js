/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const input = document.getElementById("user-input")
const convertBtn = document.getElementById("input-btn")
const meterFeet = document.getElementById("meter-feet")
const literGallon = document.getElementById("liter-gallon")
const kiloPound = document.getElementById("kilo-pound")



convertBtn.addEventListener("click", function(){
    const meterToFeet = input.value * 3.281
    const FeetToMeters = input.value * 0.304
    
    const literToGallons = input.value * 0.264
    const gallonToLiter = input.value * 3.785
    
    const kilosToPounds = input.value * 2.204
    const poundsToKilos = input.value / 2.2 
    
    meterFeet.innerHTML = `${input.value} meters =  ${meterToFeet.toFixed(3)} feet | 
    ${input.value} feet =  ${FeetToMeters.toFixed(3)} meters`
    
    literGallon.innerHTML = `${input.value} liters = ${literToGallons.toFixed(3)} gallons |
    ${input.value} gallons = ${gallonToLiter.toFixed(3)} liters`
    
    kiloPound.innerHTML = `${input.value} kilos = ${kilosToPounds.toFixed(3)} pounds |
    ${input.value} pounds = ${poundsToKilos.toFixed(3)} kilos`

})

