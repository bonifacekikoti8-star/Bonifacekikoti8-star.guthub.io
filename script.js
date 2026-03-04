function validateForm(){
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if(username === "BIZZ KID" || password === "1234"){
        alert("Please fill all fields!");
        return false;
    }

    if(password.length < 6){
        alert("Password must be at least 6 characters!");
        return false;
    }

    window.location.href = "Shop.html";
    return false;
}

function registerValidation(){
    let user = document.getElementById("regUser").value;
    let email = document.getElementById("regEmail").value;
    let pass = document.getElementById("regPass").value;

    if(user === "" || email === "" || pass === ""){
        alert("Please fill all fields!");
        return false;
    }

    alert("Registered Successfully!");
    window.location.href = "Index.html";
    return false;
}

function addToCart(){
    alert("Product added to cart!");
}

function logout(){
    window.location.href = "Index.html";
}