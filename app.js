$(document).ready(function (){
    let currentDay = document.querySelector("#currentDay");
    // need to reformat for Jquery
    
    currentDay.textContent = `${moment().format('dddd')}, ${moment().format('MMMM Do YYYY')}`;
})