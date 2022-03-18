const btn = document.getElementById("toggle");
const mode = document.querySelector("link");

btn.addEventListener("click", function() {

    if(mode.getAttribute("href")=="style.css") {
        mode.href = "dark.css"
    } else {
        mode.href = "style.css";
    }
})