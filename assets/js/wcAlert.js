window.addEventListener("load", function() {
    setTimeout(function() {
        document.querySelector(".wcAlertoverlay").style.display = "block"; // Show overlay
        document.querySelector(".wcAlertpopup").style.display = "block"; // Show popup
    }, 1000);
});

document.querySelector("#understood").addEventListener("click", function() {
    document.querySelector(".wcAlertoverlay").style.display = "none"; // Hide overlay
    document.querySelector(".wcAlertpopup").style.display = "none"; // Hide popup
});