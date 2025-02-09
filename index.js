//setTimeout lancer la fonction en premier argument 
// au bout des ms spécifiées en second argument
/*setTimeout(function () {
    //Exemple modal Bootstrap
    const modal = new bootstrap.Modal('#popup');
    modal.show();

}, 20000);*/

//Lancer une fonction en premier argument toutes les x ms spécifiées en second argument
var compteur = 10;
const chrono = document.getElementById('chrono');
const gif = document.getElementById('gif');
setInterval(function () {
    compteur = compteur - 1;
    if (compteur >= 1) {
        chrono.innerText = compteur;
    } else {
        chrono.classList.add('d-none');
        gif.classList.remove('d-none');
    }
}, 1000);