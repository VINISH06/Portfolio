const btn = document.getElementById("Cv").addEventListener("click", () => {
  let link = document.createElement("a");
  link.href = "assets/ResumeVinish.pdf";
  link.download = "ResumeVinish.pdf";
  link.click();
});
