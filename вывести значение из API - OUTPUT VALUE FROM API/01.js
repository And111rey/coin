/*//---------------------ПЕРВЫЙ МЕТОД XML - ЗАПРОСА ---------------------------- 
var request = new XMLHttpRequest();
request.open( 'GET', 'https://api.coindesk.com/v1/bpi/currentprice.json', false);
request.send();
if(request.status ===200){
console.log(request);
document.writeln(request.response);
}
*/

//-------------------------ВТОРОЙ МЕТОД XML-ЗАПРОСА-------------------------------------
/*var request = new XMLHttpRequest();
request.open( 'GET', 'https://api.coindesk.com/v1/bpi/currentprice.json');
request.onreadystatechange =function() {
    if((request.status ===200) &&(request.readyState ===4)) {
    console.log(request);
    document.writeln(request.responseText);
    }
}
request.send();
*/

//------------------------------------api + DOM---------------------------------------------

var request = new XMLHttpRequest();
request.open( 'GET', 'https://api.coindesk.com/v1/bpi/currentprice.json');
request.onreadystatechange =function() {
    if((request.status ===200) &&(request.readyState ===4)) {//проверка условий роботы
    

    var a = JSON.parse(request.responseText); // призначили переменную которая вмещает в себя распарсенное значение с ключом "responseText"
  
    console.log(a);
    var rr = request.responseText;
    console.log(rr);

    
    var d = document.getElementById('elem');
    var d1 = d.innerHTML = a.bpi.USD.rate_float;

    var res =  document.getElementById("comby");
    res.innerHTML = -1 * d1;
    }
}
request.send();




