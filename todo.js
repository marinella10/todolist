console.log("Bonjour bienvenue sur javascript");

//-------------ALGORITHME------------------------
/*
1. Brancher les ID
2. recuperer la valeur entrée par l'utilisateur
3. afficher dans une tache la donnée saisie
4. Selectionner la tache
5. Suprimer la tache

------------------------------------------------
*/

//1 Brancher les ID    OK
let saisieUtilisateur=document.getElementById("saisieUtilisateur");
let valider=document.getElementById("valider");
let tache1=document.getElementById("tache1");
let tache2=document.getElementById("tache2");
let tache3=document.getElementById("tache3");
let supprimer=document.getElementById('supprimer');

//2 recuperer valeur utilisateur OK
valider.addEventListener("click", ajouteUneTache);

function ajouteUneTache(){
    //3 Afficher la tache OK
    //4 selectionner la tache OK
    if (tache1.innerHTML ==""){
        tache1.innerHTML=saisieUtilisateur.value;
    }else if(tache2.innerHTML==""){
        tache2.innerHTML=saisieUtilisateur.value;   
    }else if (tache3.innerHTML==""){
        tache3.innerHTML=saisieUtilisateur.value;
    }else{
        alert("Vous ne pouvez saisir plus de 3 taches");
    }
}

supprimer.addEventListener("click", supprimerUneTache);

function supprimerUneTache(){
    if(tache3.innerHTML != ""){
        tache3.innerHTML="";
    }else if(tache2.innerHTML !=""){
        tache2.innerHTML="";
    }else if(tache1.innerHTML !=""){
        tache1.innerHTML=""
    }else{
        alert("Aucune tache à supprimer");
    }
}