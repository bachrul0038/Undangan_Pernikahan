const search = document.querySelector(".search-box input"),
  images = document.querySelectorAll(".image-box");

search.addEventListener("keyup", (e) => {
  if (e.key == "Enter") {
    let searcValue = search.value,
      value = searcValue.toLowerCase();
    images.forEach((image) => {
      if (value === image.dataset.name) {
        //matching value with getting attribute of images
        return (image.style.display = "block");
      }
      image.style.display = "none";
    });
  }
});

search.addEventListener("keyup", () => {
  if (search.value != "") return;

  images.forEach((image) => {
    image.style.display = "block";
  });
});

//countdown javascript part
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

const CountdownAcara = "22 Aug 2023";

function countdown() {
  const CountdownAcaraDate = new Date(CountdownAcara);
  const currentDate = new Date();

  const totalSeconds = (CountdownAcaraDate - currentDate) / 1000;

  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const minutes = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds) % 60;

  daysEl.innerHTML = days;
  hoursEl.innerHTML = doformatTime(hours);
  minutesEl.innerHTML = doformatTime(minutes);
  secondsEl.innerHTML = doformatTime(seconds);

  // console.log(rakshaBandhanDate - currentDate);
  console.log(days, hours, minutes, seconds);
}

//format the time to zero when seconds remaining using function
function doformatTime(time) {
  // return time < 10 ? `0${time}` : time;
  if (time < 10) {
    `0${time}`;
  } else {
    time;
  }
  return time;
}

//call/invoke the function here
countdown();
setInterval(countdown, 1000);
