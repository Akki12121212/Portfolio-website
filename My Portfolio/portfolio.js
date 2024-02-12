let ul = document.querySelector("ul");
let bar = document.querySelector("#bar");

bar.addEventListener("click", ()=>{
    ul.classList.toggle("showData");
});

function sendMail(){
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    };

const serviceID = "service_q4bn9ba";
const templateID = "template_z5avnc8";

emailjs.send(serviceID,templateID,params)
.then(
    res=>{
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        alert("your message sent successfully");
    })
    .catch(err=> console.log(err));
}
