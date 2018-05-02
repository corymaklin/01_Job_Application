function Subscribe(email) {
    var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var errorMessage = document.getElementById("error");
    if(regex.test(String(email).toLowerCase())) {
        errorMessage.style.display = "none";
        console.log(email);
        var e = document.getElementById("inlineFormCustomSelect");
        var strUser = e.options[e.selectedIndex].text;
        console.log(strUser);
        document.getElementById("submitbutton").innerText = "Submitting...";
        Request();
        return;
    }
    errorMessage.style.display = "block";
}

function Request() {
    setTimeout(function () {
        var content = document.getElementById("content");
        content.style.display = "none";
        var successMessage = document.getElementById("success");
        successMessage.style.display = "block";
    }, 2000);
}