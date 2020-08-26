// js-lista-cognomi

// Ciao ragazzi,
// Esercizio di oggi:
// cartella/repo js-lista-cognomi
// Lista Cognomi
// Chiedere all"utente il cognome
// inserirlo in un array con altri cognomi: "Bianchi", "Rossi", "Duzioni", "Balsano", "Verdi"
// stampa la lista ordinata alfabeticamente
// scrivi anche la posizione "umana" della lista in cui il nuovo utente si trova
// Consigli del giorno:
// 1. consultiamo la documentazione W3Schools o MDN per trovare i metodi javascript che possono esserci utili.
// Vi ricordo che oggi pomeriggio alle 16:30 avete il recap sui cicli e condizioni! :slightly_smiling_face:

/*

DEFINIZIONE DI POSIZIONE UMANA

credo che intendano dire che se il cognome è il 3° valore dell"array, il programma deve restituire 3 e non 2 (quindi devi considerare il primo cognome come posizione 1 e non 0)

*/

// contestual variable
// var surname = ["Bianchi", "Rossi", "Duzioni", "Balsano", "Verdi"];
// var mysurname;
// var humanPosition = 0;

// console.log(parseInt("ciao"));

// //event listener to implmente the sorting and position after the sorting
// document.getElementById("submit").addEventListener('click',
//     function sortSurname() {
//         mysurname = document.getElementById("surname-label").value;
//         //add filter for numeric charapter
//         if(!isNaN(parseInt(mysurname))){
//             alert("only alphabetic charapter accepted");
//         }else {
//             surname.push(mysurname);
//             console.log(surname);
//             surname.sort();
//             console.log(surname);

//             for(var i = 0; i < surname.length; i++){
//                 if(surname[i] == mysurname){
//                     humanPosition = i+1;
//                 }
//             }

//             console.log(humanPosition);
//         }
//     }
// )

var surname = ["Bianchi", "Rossi", "Duzioni", "Balsano", "Verdi"];
var mySurname = prompt("give me your surname");
var humanPosition = 0;

if(!isNaN(parseInt(mySurname))){
    alert("only alphabetic character accepted!");
} else{
    surname.push(mySurname);
    console.log(surname);
    surname.sort();
    humanPosition = surname.indexOf(mySurname)+1;
    
    console.log(surname);
    console.log(humanPosition);
}