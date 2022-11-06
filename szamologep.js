function osszead(){
    var elso = document.getElementById('elso').value;
    var masodik = document.getElementById('masodik').value;
   document.getElementById('eredmeny').innerHTML = eval(elso + "+" + masodik);
}

function kivon(){
    var elso = document.getElementById('elso').value;
    var masodik = document.getElementById('masodik').value;
    document.getElementById('eredmeny').innerHTML = eval(elso + "-" + masodik);
}

function szoroz(){
    var elso = document.getElementById('elso').value;
    var masodik = document.getElementById('masodik').value;
    document.getElementById('eredmeny').innerHTML = eval(elso + "*" + masodik);
}

function oszt(){
    var elso = document.getElementById('elso').value;
    var masodik = document.getElementById('masodik').value;
    document.getElementById('eredmeny').innerHTML = eval(elso + "/" + masodik); 
}