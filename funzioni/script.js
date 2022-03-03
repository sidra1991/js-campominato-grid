
/*
Consegna
L'utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero (in ordine) tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
*/

    const contenitore = document.getElementById(`contenitore`)
    let campo = [];
    let bombe = [];
// richiesta del utente di attivare la funzione
function generatore(){
    let celle = document.getElementById(`difficolta`).value;
    contenitore.innerHTML='';
  
    campo = [];

    // indenta le 3 diverse scelte (tanto sono identiche varia solo il numero) . /-/ contengono il ciclo per generare le caselle che verranno inserite nel html da js.

    for (let generatore = 1; generatore  < celle ; generatore++) {
        

        const cella = document.createElement(`div`);

        cella.innerHTML = `${generatore}`;

        contenitore.append(cella)

        cella.addEventListener(`click`, function() {
            cella.style.backgroundColor=`blue`            
        } )
        
        if (parseInt(celle) === 101) {
            cella.classList.add("facile");
            cella.classList.remove("medio");
            cella.classList.remove("difficile")
        } else if (parseInt(celle) === 81) {
            cella.classList.add("medio");
            cella.classList.remove("facile");
            cella.classList.remove("difficile")
        } else if ( parseInt(celle) === 51 ){
            cella.classList.add("difficile");
            cella.classList.remove("medio");
            cella.classList.remove("facile")
        }
        campo.push(cella)

    }    

    bombe = [];
    for (let bomb = 0; bombe.length  < 16; bomb++) {
        let bomba = Math.floor(Math.random() * campo.length);
        console.log(bomba)
        
        if (bombe.includes(bomba,0) == false) {
          bombe.push(bomba)  
        }

        campo.splice( bomba,0,bomba )
    }
        
  

    console.log(`queste so le bombe ${bombe}`)
}

/*
Lasciate perdere il cambiamento del colore della cella (serve una cosa che oggi non abbiamo visto). Qundi le celle saranno tutte dello stesso colore e non succede niente quando le clicchiamo.
*/

// provaci lo stesso


/*
Consigli del giorno: :party_wizard:
Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.
Ad esempio:
Di cosa ho bisogno per generare i numeri?
Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti.
Le validazioni e i controlli possiamo farli anche in un secondo momento.
------------------------------------------------------------
non mi piacciono i consol.log -.-

*/