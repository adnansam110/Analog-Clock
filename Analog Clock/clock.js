setInterval(setClock, 1000);
var hourHand = document.querySelector('[data-hour-hand]');
var minutesHand = document.querySelector('[data-minutes-hand]');
var secondHand = document.querySelector('[data-seconds-hand]');
function setClock()
{
    var currentDate = new Date();
    var secondRatio = currentDate.getSeconds()/60;
    var minutesRatio = (secondRatio + currentDate.getMinutes())/60;
    var hourRatio = (minutesRatio + currentDate.getHours())/12;
    setRotation(secondHand, secondRatio);
    setRotation(minutesHand, minutesRatio);
    setRotation(hourHand, hourRatio);

}

function  setRotation(element, rotationRatio)
{
    element.style.setProperty('--rotation', rotationRatio * 360);
}
setClock();