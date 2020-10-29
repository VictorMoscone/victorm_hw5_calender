let currentDay = document.querySelector("#currentDay");


currentDay.textContent = `${moment().format('dddd')}, ${moment().format('MMMM Do YYYY')}`;