setInterval(setClock, 1000);
const hourHand = document.querySelector('.hour')
const minHand = document.querySelector('.min')
const secHand = document.querySelector('.sec')
function setClock(){
    const time = new Date()
    const secondsRatio = time.getSeconds()/60
    const minsRatio = (secondsRatio + time.getMinutes())/60
    const hoursRatio = (minsRatio + time.getHours())/12
    setRotation(secHand, secondsRatio)
    setRotation(minHand, minsRatio)
    setRotation(hourHand, hoursRatio)
}
function setRotation(element, rotationRatio){
    element.style.setProperty('--rotation', rotationRatio * 360);
}