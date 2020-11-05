var variant = 6 % 6 + 1;
document.getElementById("variant").innerHTML = variant;

console.log(variant);

var rez = document.getElementById('var_b');
function calc_click_katet(){
    var a = document.getElementById('var_a').value;
    var c = document.getElementById('var_c').value;
    if (a <= 0 || c <=0){
        alert("Сторона не може мати від'ємні значення або нуль!");
        rez.innerHTML = 0;  
    }
    else if (a >= c){
        alert('Катет більший за гіпотенузу, або рівний їй!');
        rez.innerHTML = 0;
    }
    else{
        var b = Math.sqrt((c*c)-(a*a));
        rez.innerHTML = b;
    }
}
