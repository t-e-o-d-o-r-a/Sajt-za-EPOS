let dugmeProsledi=document.getElementById("prosledi");
dugmeProsledi.addEventListener("click",prosledi);


function dodajCrveno(id){
    
    document.getElementById(id).classList.add("crveno");
}

function brojElemenata(string,karakter){
    let i=0;
    for (const element of string) {
        if(element==karakter){
            i++;
        }
    }
    return i;
}



function prosledi(){
    event.preventDefault();

    let ime=document.getElementById("ime").value;
    if(ime.length<7||ime.length>30){
        document.getElementById("ime").classList.add("crveno");
    }else{
        document.getElementById("ime").classList.remove("crveno");
    }

    let email=document.getElementById("email").value;
    if(brojElemenata(email,'@')!=1||brojElemenata(email,'.')!=1){
        document.getElementById("email").classList.add("crveno");

    }else{
        document.getElementById("email").classList.remove("crveno");

    }

    let password=document.getElementById("password").value;
    if(password.length<7){
        document.getElementById("password").classList.add("crveno");

    }else{
        document.getElementById("password").classList.remove("crveno");

    }

    
    let koriscenje=document.getElementById("obavezno");
    if(koriscenje.checked==false){
        document.getElementById("usloviKoriscenja").classList.add("crveno");
    }else{
        document.getElementById("usloviKoriscenja").classList.remove("crveno");
    }


    let niz=document.getElementsByClassName("crveno");
    
    if(niz.length>0){
        alert("Pogrešno uneti podaci. Pokušajte ponovo.");
        return;
    }
    
    let zvezdice="";
    for (let i = 0; i < password.length; i++) {
        zvezdice=zvezdice.concat("*");
        
    }
    let kategorija=document.getElementById("tipKorisnika").value;



    let newsletter=document.getElementById("newsletterDa");


    let nizObavestenja=[];

    let oglas=document.getElementById("oglas");
    if(oglas.checked==true){
        nizObavestenja.push("Oglas");
    }
    let blog=document.getElementById("blog");
    if(blog.checked==true){
        nizObavestenja.push("Blog");

    }
    let ostalo=document.getElementById("ostalo");
    if(ostalo.checked==true){
        nizObavestenja.push("Ostalo");
        
    }
    let vreme=new Date();
    
    if(newsletter.checked==false){
        alert("Uspešno ste uneli podatke.\nKorisničko ime: "+ime+"\nE-mail: "+email+"\nPassword: "+zvezdice+"\nKategorija: "+kategorija+"\nNe šalju Vam se promocije (newsletter isključen)."+"\nOznačili ste sledeća obaveštenja: "+nizObavestenja+"\nTačno vreme: "+vreme);
        
    }else{
        alert("Uspešno ste uneli podatke.\nKorisničko ime: "+ime+"\nE-mail: "+email+"\nPassword: "+zvezdice+"\nKategorija: "+kategorija+""+"\nŠalju Vam se promocije (newsletter uključen)."+"\nOznačili ste sledeća obaveštenja: "+nizObavestenja+"\nTačno vreme: "+vreme);
    }
    window.location.reload();
    
}



let dugmeRestart=document.getElementById("restartuj");
dugmeRestart.addEventListener("click",restartuj);

function restartuj(){
    alert("Restartovali ste podatke");
    window.location.reload();
}



let prikaz=document.getElementById("prikaz");
prikaz.addEventListener("click",prikaziSifru);

function prikaziSifru(){
    let sifra=document.getElementById("password")
    if(sifra.type=="password"){
        sifra.type="text";
    }else{
        sifra.type="password";
    }

}
