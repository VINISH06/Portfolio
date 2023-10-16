const btn = document.getElementById("Cv").addEventListener("click", () => {
  let link = document.createElement("a");
  link.href = "assets/ResumeVinish_15_10_2023.pdf";
  link.download = "ResumeVinish.pdf";
  link.click();
});
