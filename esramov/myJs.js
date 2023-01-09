


// acordion section starts
$(".accordionClick").click(function (e) {
    e.preventDefault();
    $('.acordionBody').slideToggle("fast");
    $("#span1").toggleClass("bi bi-x-lg")

});

$(".accordionClick1").click(function (e) {
    e.preventDefault();
    $('.acordionBody1').slideToggle("fast");
    $("#span2").toggleClass("bi bi-x-lg")

});
$(".accordionClick2").click(function (e) {
    e.preventDefault();
    $('.acordionBody2').slideToggle("fast");
    $("#span3").toggleClass("bi bi-x-lg")

});
$(".accordionClick3").click(function (e) {
    e.preventDefault();
    $('.acordionBody3').slideToggle("fast");
    $("#span4").toggleClass("bi bi-x-lg")

});

$(".accordionClick4").click(function (e) {
    e.preventDefault();
    $('.acordionBody4').slideToggle("fast");
    $("#span5").toggleClass("bi bi-x-lg")

});
$(".accordionClick5").click(function (e) {
    e.preventDefault();
    $('.acordionBody5').slideToggle("fast");
    $("#span6").toggleClass("bi bi-x-lg")

});

// acordion section ends



//kayitol başla
    localStorage.getItem("kullaniciMail") && localStorage.getItem("kullaniciSifre")
    localStorage.setItem("kullaniciMail", "esramSeniÇokSeviyorum@oguzesra.com");
    localStorage.setItem("kullaniciSifre", "esram");


$(".btnKayit").click(function (e) {
    e.preventDefault();
    console.log("tıklandı");
    let kullaniciMail = $(".kayitİnput1").val();
    let kullaniKayitSifre = $(".kayitİnput2").val();
    let kullaniKayitSifre2 = $(".kayitİnput3").val();

    if (kullaniciMail.length > 0 && kullaniKayitSifre.length > 0) {
        if (kullaniKayitSifre == kullaniKayitSifre2) {
            localStorage.setItem("kullaniciMail", kullaniciMail)
            localStorage.setItem("kullaniciSifre", kullaniKayitSifre)
            alert("1 saniye sonra  yönlendiriliyorsunuz ")
            setTimeout(() => {
                
                window.location.href = "otumAc.html"
               
            }, 1000)
        } else {
            alert("yanlış işlemler")
        }


    } else {
        alert("yanlış yaptınız")
    }


});

//kayit bitir
//giriş bölümü start localstorage


$(".btnOturum").click(function (e) {
    e.preventDefault();
    console.log("tıklandı")
    let kullaniciMail = $(".oturumİnput1").val();
    let kullaniciSifre = $(".oturumİnput2").val();
    if (localStorage.getItem("kullaniciMail") == kullaniciMail && localStorage.getItem("kullaniciSifre") == kullaniciSifre) {
        window.location.href = "profile.html";
    }else{
        alert("şifre ya da mail yanlış")
    }


});


    //giriş bölümü end localstorage





/* film geçişleri mode */

const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");


arrows.forEach((arrow, i) => {
    const widthRatio = Math.floor(window.innerWidth / 300);

    let clickCounter = 0;
    const imageItem = movieLists[i].querySelectorAll("img").length;

    arrow.addEventListener("click", function () {
        clickCounter++;
        if (imageItem - (2 + clickCounter) + (2 - widthRatio) >= 0) {
            movieLists[i].style.transform = `translateX(${movieLists[i].computedStyleMap().get("transform")[0].x.value - 300}px)`

        } else {
            movieLists[i].style.transform = "translateX(0)"
            clickCounter = 0;

        }
    });
});

/* ! film geçişleri mode end */

/* dark mode */

const ball = document.querySelector(".toggle");
const items = document.querySelectorAll(".container-fluid,.container-my,.navbar-my,.sidebar,.sidebar i,.toggle,.toggle-ball,.movie-list-filter select,.movie-list-title,.profile-text");

ball.addEventListener("click", function () {
    items.forEach((item) => item.classList.toggle("active"));
});
