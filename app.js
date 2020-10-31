$(document).ready(function (){
    $("#currentDay").text(`${moment().format('dddd')}, ${moment().format('MMMM Do YYYY')}`);
    $(".hourBox").each(function () {
        // All of the text boxes for each hour will be checked on refresh.
        let theHour = this.getAttribute("id")
        if (moment().format('H') > parseInt(theHour)) {
            // If the time of the box has passed...
            $(this).addClass("past");
            // ... it will be colored (gray) as in the past.
        } else if (moment().format('H') == parseInt(theHour)) {
            // If the time of the box is equal to the current time...
            $(this).addClass("present");
            // ... it will be colored (red) as in the present.
        } else {
            $(this).addClass("future");
            // otherwise, it will be colored (green) as in the future.
        }
        
    })
    // if (moment().format('H') > 20) {
    //     $("#9").addClass("past");
    // }
// TODO: .each for each hourBox that detects the time. If it's past, present, future.
})