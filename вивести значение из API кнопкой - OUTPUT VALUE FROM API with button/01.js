
function loadAjax () {
    var request = new XMLHttpRequest();
    request.open( 'GET', 'https://api.coindesk.com/v1/bpi/currentprice.json');
    request.onreadystatechange =function() {
        if((request.status ===200) &&(request.readyState ===4)) {//проверка условий роботы
        

        var a = JSON.parse(request.responseText); // призначили переменную которая вмещает в себя распарсенное значение с ключом "responseText"
    


        
        var d = document.getElementById('placeHere');
        var d1 = d.innerHTML = a.bpi.USD.rate_float;
        }
    }
    request.send();

}


