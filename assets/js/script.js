var datEl = document.getElementById("currentDay");

datEl.textContent= moment().format('MMMM Do YYYY');

 var currentTime = moment().hour();


var timeBlock = document.querySelectorAll(".hour");

for (var i = 0; timeBlock.length > i; i++) {
    var currentId = timeBlock[i].getAttribute("id");
    if (currentId < currentTime) {
        console.log(timeBlock[i].nextElementSibling);
        timeBlock[i].nextElementSibling.classList.add("past");
    }
    else if (currentId == currentTime) {
        timeBlock[i].nextElementSibling.classList.add("present");
    }
    else {
        timeBlock[i].nextElementSibling.classList.add("future");
    }
    
}






