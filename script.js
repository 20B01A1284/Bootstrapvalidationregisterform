let btn = document.getElementById('btn');
btn.addEventListener("click",function(e)
{
    e.preventDefault();
    let name = document.getElementById("name");
    if(name.value==="")
    {
        document.getElementById('nameid').innerHTML = "please enter your name";
    }
    else
    {
        document.getElementById('nameid').innerHTML = "";
    }
    let pass = document.getElementById("name");
    if(pass.value==="")
    {
        document.getElementById('passid').innerHTML = "please enter your password";
    }
    else
    {
        document.getElementById('passid').innerHTML = "";
    }
    let branch = document.getElementById('select');
    if(select.value === "Branch")
    {
        document.getElementById('selectid').innerHTML = "please select your branch";
    }
    else
    {
        document.getElementById('selectid').innerHTML = "";
    }
    let radio1 = document.getElementById('gender1');
    let radio2 = document.getElementById('gender2');
    let radio3 = document.getElementById('gender3');
    if(radio1.checked == false && radio2.checked == false && radio2.checked == false )
    {
        document.getElementById('radioid').innerHTML = "please select gender";
    }
    else
    {
        document.getElementById('radioid').innerHTML = "";
    }
    let music = document.getElementById('music');
    let sports = document.getElementById('sports');
    let entrepenuer = document.getElementById(' entreprenuer');
    if(music.checked === true || sports.checked === true || entrepenuer.checked === true) 
    {
        document.getElementById('checkboxid').innerHTML = "";
    }
    else
    {
        document.getElementById('checkboxid').innerHTML = "please select your interest";
    }


})