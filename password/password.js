function checkPassword() {
    var password = document.getElementById("passwordInput").value;
    var wrongpass = document.getElementById("wrongpass"); 

    if (password == "123") {
        window.location.href = "https://pavan-5-5-5.github.io/HorizonStellar/main/main.html";
    } else if (password != "123") {
        wrongpass.style.visibility = "visible"; 
    }
}

document.getElementById("passwordInput").addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        checkPassword();
    }
})
;
