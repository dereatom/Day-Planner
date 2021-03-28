var hour9 = $("#9");
var hour10 = $("#10");
var hour11 = $("#11");
var hour12 = $("#12");
var hour1 = $("#13");
var hour2 = $("#14");
var hour3 = $("#15");
var hour4 = $("#16");
var hour5 = $("#17");
var time = moment();

function setPlanner() {
//----displaying current date at top---//
    $("#currentDay").text(moment().format("dddd, MMMM Do"));
    
    $(".time-block").each(function () {
        var id = $(this).attr("id");
        var schedule = localStorage.getItem(id);

        if (schedule !== null) {
            $(this).children(".schedule").val(schedule);
        }
    });
}
//---set the planner and save user input to localstorage---//
setPlanner();
var saveBtn = $(".saveBtn");

saveBtn.on("click", function () {
    var time = $(this).parent().attr("id");
    var schedule = $(this).siblings(".schedule").val().trim();

    localStorage.setItem(time, schedule);
});
//-------Getting individual childern and setting to parent-----//
$("#9am").children("input").val(localStorage.getItem("9"));

$("#10am").children("input").val(localStorage.getItem("10"));

$("#11am").children("input").val(localStorage.getItem("11"));

$("#12pm").children("input").val(localStorage.getItem("12"));

$("#1pm").children("input").val(localStorage.getItem("13"));

$("#2pm").children("input").val(localStorage.getItem("14"));

$("#3pm").children("input").val(localStorage.getItem("15"));

$("#4pm").children("input").val(localStorage.getItem("16"));

$("#5pm").children("input").val(localStorage.getItem("17"));

// ----assigning class for past, present and future by background color----//
function pastPresentFuture() {
    hour = time.hours();
    $(".time-block").each(function () {
        var thisHour = parseInt($(this).attr("id"));

        if (thisHour > hour) {
            $(this).addClass("future")
        }
        else if (thisHour === hour) {
            $(this).addClass("present");
        }
        else {
            $(this).addClass("past");
        }
    })
}
pastPresentFuture();