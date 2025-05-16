//no URL iegūst vārdu
let adrese = window.location.hash.substring(1);
adrese = decodeURI(adrese.split(','[0]));
adrese = adrese.replace('#','');
adrese = adrese.split(',');
vards = adrese[0];

//mainīgie spēles darbībai
let laiks = 0
let klikski = 0
//masīvi spēles darbībai
const laukumi = ['L01','L02','L03','L04','L05','L06','L07','L08','L09','L10','L11','L12']
const laukumiSaturs = ['👽','🤖','😇','👽','🤕','🤠','🤕','🥶','🤠','🤖','🥶','😇']
let atvertieLaukumi = []
let pedejieDivi = []

//Sajauc smailikus nejaušā secībā (Fisher-Yates algoritms)
let laukimiSajaukti = laukumiSaturs.sort(() => Math.random() - 0.5)

//Ģenerē spēles laukumu dinamiski
document.addEventListener("DOMcontentLoaded", function() {
    let spelesLauks = document.querySelector('.speles_lauk');
    spelesLauks.innerHTML = '';
laukumiSajaukti.forEarch((emoji, index) => {
    let bloks = document.createElement("div")
    blok .classList.add("bloks");
    bloks.setAttribute("data-index", index);
    bloks.addEventListener("click", function() {
        veiktGajienu(bloks,)



})

function veiktGajienu(laukums)
    console.log('Klikšķis uz laukuma '+ laukums)
    
    let atvertsJaunsLaukums = false;
    klikski++ //klikski = klikski + 1
    if (atvertieLaukumi.indexOf(laukums) == -1)
    { atvertsJaunsLaukums = true;
        console.log('atverts jauns laukums')
    }
}