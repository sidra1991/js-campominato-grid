
/*
Consegna
L'utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero (in ordine) tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
*/
    let vittoria = 0;
    const contenitore = document.getElementById(`contenitore`)
    let campo = [];
    let bombe = [];
// richiesta del utente di attivare la funzione
function generatore(){
    let difficolta = document.getElementById(`difficolta`).value;
    contenitore.innerHTML='';
    campo = [];
    bombe = [];
    vittoria = 0;
    // indenta le 3 diverse scelte (tanto sono identiche varia solo il numero) . /-/ contengono il ciclo per generare le caselle che verranno inserite nel html da js.

    for (let generatore = 0; generatore  < difficolta ; generatore++) {
       let cella = document.createElement(`div.cella`);
        if (generatore < 16) {
            cella.addEventListener(`click`, function () {
                cella.style.backgroundColor = `red`;
                alert("hai perso")   
                window.location.reload()       
            } )
        } else {
            cella.addEventListener(`click`, function () {
                cella.style.backgroundColor = `blue` ;   
                
                vittoria = vittoria + 1;
                    if (vittoria > 3) {
                     alert("ai vinto")
                    }
            } );
        };

        if (parseInt(difficolta) === 101) {
            cella.classList.add("facile");
            cella.classList.remove("medio");
            cella.classList.remove("difficile")
        } else if (parseInt(difficolta) === 81) {
            cella.classList.add("medio");
            cella.classList.remove("facile");
            cella.classList.remove("difficile")
        } else if ( parseInt(difficolta) === 51 ){
            cella.classList.add("difficile");
            cella.classList.remove("medio");
            cella.classList.remove("facile")
        }
        campo.push(cella);
    }    

    
    let controllo = []

    for (let stampa = 1; controllo.length < campo.length ; stampa++) {
        let sparso = Math.floor(Math.random() * (campo.length));
        const casella = campo[sparso];
        console.log(sparso)
        if (controllo.includes(sparso) == false) {
            controllo.push(sparso);
            contenitore.append(casella)
            casella.innerHTML = `${stampa}`;
        }
    }



}