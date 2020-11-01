$(document).ready(function (){
    $("#currentDay").text(`${moment().format('dddd')}, ${moment().format('MMMM Do YYYY')}`);
    $("#resetStorage").on("click", function() {
        localStorage.clear();
    })
    $(".hourBox").each(function () {
        // All of the text boxes for each hour will be checked on refresh.
        let theHour = $(this).attr("id")
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
        $(`#${theHour}`).val(localStorage.getItem(`${theHour}-input`))
        // On page load, this will display any previously saved inputs.
    })
    $(".saveBtn").each(function () {
        let buttonHour = $(this).attr("id");
        // Find's the button's unique ID.
        let boxHour = parseInt(buttonHour);
        // Convert's the button's ID to a number type.
        $(this).on("click", function(){
            // on button click...
            let textEntered = $(`#${boxHour}`).val();
            // This finds input for the box of the same number that the button was (9am box, 9am button).
            localStorage.setItem(`${boxHour}-input`, textEntered); 
            // saves the input value into local storage under a Key like (HR-input).
        })
    })
})

// TODO: On page load, get the local storage saved inputs and display them.