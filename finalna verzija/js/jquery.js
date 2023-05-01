$(".burger").click(function(){
    $(".meni").toggle();
});


$(".unos").on("focus blur",function(event){
    if(event.type=="focus"){
        $(".unos:focus").css("background-color","rgb(240,240,240)");
    }else{
        $(this).css("background-color","white");
    }
})


function osimSpace(pitanja){
    for (let i = 0; i < pitanja.length; i++) {
        if(pitanja.charAt(i)!=' '){
            return 1;
        }
        return 0;
    }
}
    
$("#prosledi").click(function(){
    
    let pitanja=$("#pitanja").val();
    

    if(pitanja==""||osimSpace(pitanja)==0){
         return;
    }else{
        let niz=document.getElementsByClassName("crveno");
        if(niz.length>0){
            return;
        }else{
            alert("Odgovor na Vaše pitanje: "+pitanja+"\nočekujte u najkraćem mogućem roku");
    
        }
    
    }
})

