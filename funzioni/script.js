
/*
Consegna
L'utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero (in ordine) tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
*/

// richiesta del utente di attivare la funzione
function generatore(){
    

    // raccogli scelta utente di difficoltà /-/ i valori sono già indicati nel input html quindi questo dato sarà sfruttato nel if.
    const scelta = document.getElementById(`difficolta`).value;
    
        alert(scelta)

    // indenta le 3 diverse scelte (tanto sono identiche varia solo il numero) . /-/ contengono il ciclo per generare le caselle che verranno inserite nel html da js.

    if ( parseInt(scelta) === 1 ) {
        let contenitore =document.querySelector(`.contenitore`);

        contenitore.classList.add("cento")

        for (let generatorePrimo = 1; generatorePrimo < 101; generatorePrimo++) {

            contenitore.innerHTML += `<div class="cella"> ${generatorePrimo}</div>`;
            
        }



    } else if ( parseInt(scelta) === 2 ){
        
        let contenitore =document.querySelector(`.contenitore`);

        contenitore.classList.add("ottanta")

        for (let generatorePrimo = 1; generatorePrimo < 82; generatorePrimo++) {

            contenitore.innerHTML += `<div class="cella"> ${generatorePrimo}</div>`;
            
        }

    } else if ( parseInt(scelta) === 3 ){

        let contenitore =document.querySelector(`.contenitore`);

        contenitore.classList.add("quaranta")

        for (let generatorePrimo = 1; generatorePrimo < 49; generatorePrimo++) {

            contenitore.innerHTML += `<div class="cella"> ${generatorePrimo}</div>`;
            
        }

    }

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