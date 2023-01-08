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
if (!(localStorage.getItem("kullaniciMail") && localStorage.getItem("kullaniciSifre"))) {
    localStorage.setItem("kullaniciMail", "admin");
    localStorage.setItem("kullaniciSifre", 123);

} else {

}

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



