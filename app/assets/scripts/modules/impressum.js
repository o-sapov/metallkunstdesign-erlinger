// function displayImpressum() {
//     var impressum = document.querySelector('.impressum');
//     if (impressum.style.display === "none") {
//         impressum.style.display = "block";
//     } else {
//         x.style.display = "none";
//     }
// }

var impressumLinks = document.querySelectorAll(".impressum-link");

for (let i = 0; i < impressumLinks.length; i++) {

    impressumLinks[i].addEventListener("click", function () {
        document.querySelector(".main").style.display = "none";
        document.querySelector("#impressum").style.display = "block";
        document.querySelector(".impressum--footer").style.display = "none";
        document.querySelector(".home").style.display = "block";

    });
}