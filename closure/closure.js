window.onload = pageLoaded;

function pageLoaded(){
    document.getElementById("btnact").onclick = function(){
    var accountInfoList = [];
        
    var nametxt = document.getElementById("name").value;
    var deposittxt = document.getElementById("deposit").value;  
    var textAreatxt = document.getElementById("txtarea");

    var acc;
    (function () {
        function createAcount (name, deposit) {
            return {
                name,
                deposit
            }
        }
        acc = createAcount(nametxt, deposittxt);
      
    })();
     
    console.log(acc);
    accountInfoList.push(acc);
    for(let i=0; i<accountInfoList.length; i++){
        textAreatxt.value += "Name : "+ accountInfoList[i].name + "\n"+"Deposit : "+accountInfoList[i].deposit +"\n";
    }
    
    }
}


function rudyTimer(){
     
    (function(){
        setInterval(function(){
           alert("Rudy");
        }, 1000);
        
    })();
    

}