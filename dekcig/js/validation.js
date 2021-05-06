
$(document).ready(function(){
    $("#ime").keyup(function(){
        let ime = $(this).val();
        let regexIme = /^[A-Z][a-z]{2,29}$/;
        let incorIme = $('#imeError');
        naKljucGore(ime,regexIme,incorIme);
    })
    $("#telefon").keyup(function(){
        let telefon = $(this).val();
        let regexTelefon = /^\d{7,20}$/;
        let incorTelefon = $('#telefonError');
        naKljucGore(telefon,regexTelefon,incorTelefon);
    })
    $("#email").keyup(function(){
        let email = $(this).val();
        let regexMail = /^\w+[\d\w\.\-\_]+\@[a-z]{2,10}(\.[a-z]{2,3})+$/;
        let incorMail = $('#emailError');
        naKljucGore(email,regexMail,incorMail);
    })
    $("#tip").keyup(function(){
        let tip = $(this).val();
        let regexTip = /^.{4,50}$/;
        let incorTip = $('#tipError');
        naKljucGore(tip,regexTip,incorTip);
    })
    $("#poruka").keyup(function(){
        let poruka = $(this).val();
        let regexPoruka = /^.{4,100}$/;
        let incorPoruka = $('#porukaError');
        naKljucGore(poruka,regexPoruka,incorPoruka);
    })
})


//~~~~~~~~~~ Funkcije

function naKljucGore(vrednost, regex, greska){
    if(regex.test(vrednost)){
        if(!greska.hasClass('d-none')){
            greska.addClass('d-none')
        }
    }
    else
    {
        if(greska.hasClass('d-none')){
            greska.removeClass('d-none')
        }
    }
}
function proverePolja(vrednost,regex, greska){
    if(regex.test(vrednost)){
        if(!greska.hasClass('d-none')){
            greska.addClass('d-none')
        }
        return true;
    }
    else
    {
        if(greska.hasClass('d-none')){
            greska.removeClass('d-none')
            return false;
        }
    }
}

function provera(){
    // vrednosti
    let ime = $("#ime").val();
    let telefon = $("#telefon").val();
    let email = $("#email").val();
    let tip = $("#tip").val();
    let poruka = $("#poruka").val();
    // vrednosti
    // regularni izrazi
    let regexIme = /^[A-Z][a-z]{2,29}$/;
    let regexTelefon = /^\d{7,20}$/;
    let regexMail = /^\w+[\d\w\.\-\_]+\@[a-z]{2,10}(\.[a-z]{2,3})+$/;
    let regexTip = /^.{4,50}$/;
    let regexPoruka = /^.{4,50}$/;
    // regularni izrazi
    // greske za prikaz
    let incorIme = $('#imeError');
    let incorTelefon = $('#telefonError');
    let incorMail = $('#emailError');
    let incorTip = $('#tipError')
    let incorPoruka = $('#porukaError')
    // greske za prikaz
    // provere
    if(!proverePolja(ime,regexIme,incorIme))
        return false
    if(!proverePolja(telefon,regexTelefon,incorTelefon))
        return false
    if(!proverePolja(email,regexMail,incorMail))
        return false
    if(!proverePolja(tip,regexTip,incorTip))
        return false
    if(!proverePolja(poruka,regexPoruka,incorPoruka))
        return false
    showAffirmationMessageAndClearTextValues();
    return false; // RETURNING FALSE IF NO PHP IS IMPLEMENTED!!!
    // provere
}
function showAffirmationMessageAndClearTextValues(){
    if($('#reservationSuccessful').hasClass('d-none')){
        $('#reservationSuccessful').removeClass("d-none")
        $('#reservationSuccessful').fadeIn("slow")
        $("#ime").val("");
        $("#telefon").val("");
        $("#email").val("");
        $("#tip").val("");
        $("#poruka").val("");
    }
}