$(document).ready(function (){
    $("#currentDay").text(`${moment().format('dddd')}, ${moment().format('MMMM Do YYYY')}`);
    // TODO: Will need to use military time when trying to sense if the even has passed or not.
    if (moment().format('H') > 9) {
        $("#9am-hourBox").addClass("past");
    }
})