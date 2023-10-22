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
function sendMail() {
  let Details = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.querySelector("#message").value,
  };
  const serviceId = "service_opsyz0e";
  const templateId = "template_68wu46m";

  emailjs
    .send(serviceId, templateId, Details)
    .then((res) => {
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.querySelector("#message").value = "";
      console.log(res);
      alert("message sent sucess fully");
    })
    .catch((err) => console.log(err));
}
