function booyah1(){
    alert("BOOYAH")
}
function booyah2(){
    return booyah1;
}
setTimeout(booyah1, 2000);
setTimeout(booyah2(), 2000);
