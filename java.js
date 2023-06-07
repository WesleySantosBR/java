document.addEventListener("DOMContentLoaded",
    function () {

        let select = document.querySelector("#select");

select.addEventListener("change", cliqueinobotao);
     } );

let button = document.querySelector("#button1");
// let input1 = document.querySelector("#input1").value;


function cliqueinobotao() {

    let select = document.querySelector("#select")
    if(select.value == "Dollar" ){
    // digiteinoinput().value
    digiteinoinput()
    real()
    coverterrealdolar()
}
    if(select.value == "Euro"){
        digiteinoinput()    
        real()
        coverterrealeuro()
    }
}

function digiteinoinput() {
    let input1 = document.querySelector("#input1").value;
    console.log(input1)
}


function real() {
    let real = document.querySelector("#real")
    let input1 = document.querySelector("#input1").value;
    real.innerHTML = new Intl.NumberFormat('pt-BR', { style: "currency", currency: "BRL"}).format(input1);

    console.log(real)
}

function coverterrealdolar() {

    let imagemdollar = document.querySelector("#imagem3")
    imagemdollar.setAttribute('src', 'usa.png');

    let dollarc = 5.15
    let input1 = document.querySelector("#input1").value;
    let converc = input1 / dollarc

    let dollar = document.querySelector("#dollar")
    dollar.innerHTML = new Intl.NumberFormat('en-US', { style: "currency", currency: "USD"}).format(converc);

}


function coverterrealeuro() {
    let imagemeuro = document.querySelector("#imagem3")
    imagemeuro.setAttribute('src', 'euro.png');

    let eurohtml = document.querySelector("#dollarp")
    eurohtml.innerHTML = `Euro`
    let euroc = 7.15
    let input1 = document.querySelector("#input1").value;
    let converc = input1 / euroc

    let dollar = document.querySelector("#dollar")
    dollar.innerHTML = new Intl.NumberFormat('de-DE', { style: "currency", currency: "EUR"}).format(converc);

}







// function valorinput1(){
//     console.log(input1.value)
// }