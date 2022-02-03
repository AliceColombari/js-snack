// crea un array di 10 oggetti che rappresentano una zucchina
// indica per ognuna la varietà, peso e lunghezza
// calcola il peso delle zucchine 

var zucchine = [
    {
      nome: 'Zucchino nero di Milano',
      peso: 100,
      lunghezza: 7
    },

    {
        nome: 'Zucchino Romanesco',
        peso: 100,
        lunghezza: 10
    },

    {
        nome: 'Zucchino ortolano di Faenza',
        peso: 5,
        lunghezza: 14
    },

    {
        nome: 'Zucchina lunga fiorentina',
        peso: 10,
        lunghezza: 15
    },

    {
        nome: 'Zucchino Siciliano',
        peso: 50,
        lunghezza: 8
    },

    {
        nome: 'Zucchina striata di Napoli',
        peso: 100,
        lunghezza: 4
    },

    {
        nome: 'Zucchina bianca triestina',
        peso: 100,
        lunghezza: 20
    },

    {
        nome: 'Zucchina rigata pugliese',
        peso: 50,
        lunghezza: 5
    },

    {
        nome: 'Zucchino tondo di Piacenza',
        peso: 50,
        lunghezza: 10
    },

    {
        nome: 'Zucchino tondo di Nizza',
        peso: 50,
        lunghezza: 20
    },
   
];

// stampo array di 10 oggetti
console.log(zucchine)


// funzione per fare la somma del peso di tutto l'array
function sommaPeso (ortaggi){

    somma = 0;

    for (let i = 0; i < ortaggi.length; i++) {
        // per ognuno degli oggetti ciclo ogni sua proprietà peso
        console.log(ortaggi[i]);
        somma += ortaggi[i].peso;
    }

    return somma;

}

// variabile che richiama la funzione sommaPeso dell'array zucchine
let sum = sommaPeso(zucchine);
console.log('Il totale del peso di tutte le 10 zucchine equivale ha: ' + sum + ' grammi')

// oppure 
console.log(sommaPeso(zucchine));