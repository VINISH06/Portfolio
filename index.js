// for clock

//////////////////////////////////////////////////////////////////////////////////////////////////

function updateTime() {
  const now = new Date();
  let hours = now.getHours();
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");
  const ampm = hours >= 12 ? "PM" : "AM";
  if (hours > 12) {
    hours -= 12;
  } else if (hours === 0) {
    hours = 12;
  }
  hours = hours.toString().padStart(2, "0");
  const timeString = `${hours}:${minutes}:${seconds} ${ampm}`;
  const time = document.getElementById("clock");
  time.textContent = timeString;
}
updateTime();
setInterval(updateTime, 1000);

// for download cv button

const btn = document.getElementById("Cv").addEventListener("click", () => {
  let link = document.createElement("a");
  link.href = "assets/Vinish.pdf";
  link.download = "ResumeVinish.pdf";
  link.click();
});
////loader
setTimeout(function () {
  document.getElementById("loader").style.display = "none";
  document.getElementById("content").style.display = "block";
}, 2000);
