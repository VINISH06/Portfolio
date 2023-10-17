const btn = document.getElementById("Cv").addEventListener("click", () => {
  let link = document.createElement("a");
  link.href = "assets/ResumeVinish_15_10_2023.pdf";
  link.download = "ResumeVinish.pdf";
  link.click();
});
function updateTime() {
  const date = new Date();
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const seconds = date.getSeconds().toString().padStart(2, "0");
  document.getElementById(
    "Time"
  ).textContent = `${hours}:${minutes}:${seconds}`;
}
setInterval(updateTime, 1000);
updateTime();


