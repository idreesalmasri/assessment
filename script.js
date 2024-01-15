document.addEventListener("DOMContentLoaded", function () {
    var nameElement = document.getElementById("name");
    if (nameElement) {
        nameElement.textContent = "Idrees Al-Masri";
    }

    var dateElement = document.getElementById("date");
    if (dateElement) {
        var currentDate = new Date();
        var options = {
            year: "numeric",
            month: "long",
            day: "numeric",
            timeZone: "Asia/Amman",
        };
        dateElement.textContent = currentDate.toLocaleDateString(
            options
        );
    }
});

let popup=document.getElementById('popup');

const openPopup=()=>{
    popup.classList.add('open-popup');
}
const closePopup=()=>{
    popup.classList.remove("open-popup");
}