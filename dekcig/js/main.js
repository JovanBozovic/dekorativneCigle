/* paste this line in verbatim */
$(document).ready(function(){
    AOS.init();
    el_autohide = document.querySelector('.autohide');

    if(el_autohide){
        var last_scroll_top = 0;
        window.addEventListener('scroll', function() {
            let scroll_top = window.scrollY;
            if(scroll_top < last_scroll_top) {
                el_autohide.classList.remove('scrolled-down');
                el_autohide.classList.add('scrolled-up');
                $(".navbar-toggler").addClass("collapsed")
                $(".navbar-toggler").attr('aria-expanded',false);
                $("#show-menu").removeClass("show")
            }
            else {
                el_autohide.classList.remove('scrolled-up');
                el_autohide.classList.add('scrolled-down');
            }
            last_scroll_top = scroll_top;
        });
    }


})
window.formbutton=window.formbutton||function(){(formbutton.q=formbutton.q||[]).push(arguments)};


// Paralaksa
let element = document.getElementById("nasPosao");

window.addEventListener('scroll',function(){
    var value = window.scrollY;
    console.log(value)
    element.style.left = value * 0.07 + 'px';
    var dole=0;
    var desno=0;
    var blur=30;
    dole+=value*0.12;
    desno+=value*0.12;
    blur-=value*0.05;
    element.style.boxShadow=dole+"px "+desno+"px "+blur+"px 0 #4fcaff"
})


/* customize formbutton below*/
formbutton("create", {
    action: "https://formspree.io/f/xknkoajq",
    title: "How can we help?",
    fields: [
        {
            type: "email",
            label: "Email:",
            name: "email",
            required: true,
            placeholder: "your@email.com"
        },
        {
            type: "textarea",
            label: "Message:",
            name: "message",
            placeholder: "What's on your mind?",
        },
        { type: "submit" }
    ],
    styles: {
        title: {
            backgroundColor: "gray"
        },
        button: {
            backgroundColor: "gray"
        }
    }
});
