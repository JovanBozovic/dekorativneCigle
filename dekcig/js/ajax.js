    var form = document.getElementById("my-form");

    async function handleSubmit(event) {
    event.preventDefault();
    var status = document.getElementById("my-form-status");
    var data = new FormData(event.target);
    fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
    'Accept': 'application/json'
}
}).then(response => {
    status.innerHTML = "Poruka je uspesno poslata!";
    form.reset()
}).catch(error => {
    status.innerHTML = "Desila se greska prilikom slanja poruke."
});
}
    form.addEventListener("submit", handleSubmit)
    //
    // $.ajax({
    //     url:"data/slike.json",
    //     method:"get",
    //     dataType:"json",
    //     success:function(data){
    //         ispisiSlikeZaGaleriju(data);
    //     },
    //     error:function(xhr){
    //         console.log(xhr)
    //     }
    // })
//Za ko zna kad
//     function ispisiSlikeZaGaleriju(niz){
//         ispis = ""
//         destinacija = $(".klasaDiva")
//         for(let slika of niz){
//             ispis +=`
//             <div class="col-lg-3 col-md-6 mb-5">
//                    <div class="post-entry-1 h-100">
//                       <a class="elem"
//                          href="${slika.src}"
//                          title="${slika.title}"
//                          data-lcl-txt="${slika.opis}"
//                          data-lcl-thumb="thumb">
//                           <span style="background-image: url('${slika.src}');">
//                           <img src="${slika.ram}" alt="${slika.alt}"
//                                class="img-fluid"/>
//                           </span>
//                       </a>
//                    </div>
//                 </div>
// `
//         }
    }
