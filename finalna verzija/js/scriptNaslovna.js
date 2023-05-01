let dugmePreuzmi1 = document.getElementById("dugme1");
let dugmePreuzmi2 = document.getElementById("dugme2");
dugmePreuzmi1.addEventListener("click", handleDugmePreuzmi);
dugmePreuzmi2.addEventListener("click", handleDugmePreuzmi);

function handleDugmePreuzmi(){
    console.log('pritisnuo');
    alert("Uspešno ste preuzeli aplikaciju!");
}

$(".slika-telefon").hide();
$(".sredina-levo").hide();
$(".strana").hide();
$(".ikonice").hide();
 
$(".slika-telefon").fadeIn("slow");
$(".sredina-levo").fadeIn(1000);
$(".strana").slideDown(1000);
$(".ikonice").fadeIn(1000);