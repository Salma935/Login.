/*----Local Storage----*/
function login(){
    var uid = document.getElementById("username").value;
    alert(uid);
    var pw = document.getElementById("password").value;
    var email = document.getElementById("email").value;
    //alert(uid + pw + email);
    /*storing Data */
    var user = localStorage.setItem("uid" , uid);
    var pass = localStorage.setItem("pw", pw);
    var em = localStorage.setItem("email", email);
    
    //Retreiving stored data and using it for calculation
    var user = localStorage.setItem("uid" , uid);
    var pass = localStorage.setItem("pw", pw);
    var em = localStorage.setItem("email", email);
    
    var a,b,c;
    a="Flag{HOWAREYOU}";
    b=12345
    c="Flag@gmail.com";
    
     if(a==user && b==pass && c==em) {
        alert("Login Successful !");
     }
     else{
        alert("nvalid details!");
     }
    }
    /*cookies*/
     
    function GetCookies(){
        if (document.cookie !=0) {
            alert(document.cookies)
        }
        else{
            alert("No Cookies for you")
        }
    
    }
    
    function SetNameAndEmailAndPass()
    {
        const name = document.getElementById("username").value;
        const emai = document.getElementById("email").value;
        const pasw = document.getElementById("password").value;
        document.cookie = "Name" + name + ";" +"exprise-fri 16 sep 01:00:00";
        document.cookie = "Email" + emai + ";" +"exprise-fri 16 sep 01:00:00";
    }
    
    window.onload = function () {
        if (document.cookie.length !=0) {
            console.log("Hello")
        }
    }