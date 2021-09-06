window.onload=function(){
    document.getElementById("bigger-btn").onclick=function(){
        setInterval(function(){
            document.getElementById("text-area").style.fontSize=(parseInt(window.getComputedStyle(document.getElementById('text-area')).fontSize)+2)+"pt";
        },500);
    }
    document.getElementById("reduce-btn").onclick=function(){
        document.getElementById("text-area").style.fontSize=(parseInt(window.getComputedStyle(document.getElementById('text-area')).fontSize)-1)+"pt";
    }
    document.getElementById("bling-radio").onchange=function(){
        let textArea=document.getElementById("text-area");
        if(this.checked){
            document.getElementById("body").style.backgroundImage="url('../back.jpg')";
            textArea.style.fontWeight="bold";
            textArea.style.color="green";
            textArea.style.textDecoration="underline";
        }
        else{
            document.getElementById("body").style.backgroundImage="";
            textArea.style.fontWeight="normal";
            textArea.style.color="black";
            textArea.style.textDecoration="none";
        }
    }
}