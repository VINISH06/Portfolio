const btn = document.getElementById("Cv").addEventListener("click", () => {
  let link = document.createElement("a");
  link.href = "assets/Resume_Vinish (2).docx";
  link.download = "ResumeVinish.pdf";
  link.click();
});
