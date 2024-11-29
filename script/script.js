document.addEventListener("DOMContentLoaded", function() {
    var email = document.getElementById("email");
    var error = document.getElementById("error");
    var btn = document.getElementById("btn");
    var form = document.querySelector("input");
    var success = document.getElementById("success");
    var container = document.getElementById("container");
    

    btn.onclick = function() {

        var emailValue = "ash@loremcompany.com";

        if (email.value.trim() === "" ) {
            error.style.display = "inline-block";
            form.style.border= "#ff2851 solid 2px";
            success.style.display = "none";
    
            
        } else if(email.value !== emailValue) {
            error.style.display = "inline-block";
            form.style.border= "#ff2851 solid 2px";
            success.style.display = "none";

        } else if(email.value === emailValue) {
            success.style.display = "block";
            container.style.display = "none";
            error.style.display ="none";


        }

    }

 
});