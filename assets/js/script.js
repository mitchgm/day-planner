var datEl = $("#currentDay");

datEl.textContent= moment().format('MMMM Do YYYY');

 var currentTime = moment().hour();


var timeBlock = $(".hour");



function timeColor () {
    for (var i = 0; timeBlock.length > i; i++) {
    var currentId = timeBlock[i].getAttribute("id");
    if (currentId < currentTime) {
        //console.log(timeBlock[i].nextElementSibling);
        timeBlock[i].nextElementSibling.classList.add("past");
    }
    else if (currentId == currentTime) {
        timeBlock[i].nextElementSibling.classList.add("present");
    }
    else {
        timeBlock[i].nextElementSibling.classList.add("future");
    }
    // this function color codes our text areas based on the time of day
}
};
timeColor();

var saveBtnEl = $(".saveBtn");

saveBtnEl.on("click", function(event) {
    event.preventDefault();
    var text = $(this).siblings(".textArea").val().replace(parentEl);
    var parentEl = $(this).parent().attr("id");
    localStorage.setItem(parentEl, JSON.stringify(text))
    // this saves our plans in local storage
    
})
$("#9 textarea").val(JSON.parse(localStorage.getItem("9")))
$("#10 textarea").val(JSON.parse(localStorage.getItem("10")))
$("#11 textarea").val(JSON.parse(localStorage.getItem("11")))
$("#12 textarea").val(JSON.parse(localStorage.getItem("12")))
$("#13 textarea").val(JSON.parse(localStorage.getItem("13")))
$("#14 textarea").val(JSON.parse(localStorage.getItem("14")))
$("#15 textarea").val(JSON.parse(localStorage.getItem("15")))
$("#16 textarea").val(JSON.parse(localStorage.getItem("16")))
$("#17 textarea").val(JSON.parse(localStorage.getItem("17")))
// this pulls our data from local storage so it displays even afetr the page is refreshed

console.log(saveBtnEl);


function savedPlans () {
    

};

