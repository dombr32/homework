"use strict";
let storage = {}; //создаем общий хэш для двух классов

class AJAXStorage {
    // storage = {};

    // метод для добавления на сервер
    addAJAX () {
        storeInfo ()
    };

    // метод для чтения с сервера
    getAJAX () {
        restoreInfo()
    };
}

const ajaxHandlerScript="https://fe.it-academy.by/AjaxStringStorage2.php";
const stringName='DAMBROUSKI_DRINKS';
let updatePassword;

// добавляем данные на сервер
function storeInfo() {
    updatePassword=Math.random();
    $.ajax( {
            url : ajaxHandlerScript, 
            type : 'POST', 
            cache : false, 
            dataType:'json',
            data : { f : 'LOCKGET', n : stringName, p : updatePassword },
            success : lockGetReady, error : errorHandler
        }
    );
}

function lockGetReady(callresult) {
    if ( callresult.error!=undefined )
        alert(callresult.error);
    else {
        let infoAJAX={
            storage //drinkStorageAJAX.storage
        };
        $.ajax( {
                url : ajaxHandlerScript, type : 'POST', cache : false, dataType:'json',
                data : { f : 'UPDATE', n : stringName,
                    v : JSON.stringify(infoAJAX), p : updatePassword },
                success : updateReady, error : errorHandler
            }
        );
    }
}

function updateReady(callresult) {
    if ( callresult.error!=undefined )
        alert(callresult.error);
}

// читаем данные с сервера, и выводим в консоль
function restoreInfo() {
    $.ajax(
        {
            url : ajaxHandlerScript, type : 'POST', cache : false, dataType:'json',
            data : { f : 'READ', n : stringName },
            success : readReady, error : errorHandler
        }
    );
}

function readReady(callresult) {
    if ( callresult.error!=undefined )
        alert(callresult.error);
    else if ( callresult.result!="" ) {
        let infoAJAX = JSON.parse(callresult.result);
        console.log(infoAJAX);
    }
}


function errorHandler(jqXHR,statusStr,errorStr) {
    alert(statusStr+' '+errorStr);
}


class ObjStorageClass {

    // storage = {}

    addValue (key, value){
        storage[key]=value; //this.storage[key]=value;
        // drinkStorageAJAX.storage[key]=value;
    };

    getValue (key){
        return storage[key]; //this.storage[key];
    };

    deleteValue (key){
        if (key in storage){ //(key in this.storage)
            delete storage['key']; //this.storage[key];
            return true
        } return false
    }

    getKeys (){
        return Object.keys(storage); //(this.storage)
    }
}

const drinkStorage = new ObjStorageClass;
const drinkStorageAJAX = new AJAXStorage;

let enterInfo = document.createElement("input");
enterInfo.setAttribute("type", "submit");
enterInfo.setAttribute("value", "ввод информации о напитке");
enterInfo.addEventListener('click', addDrink, false);

let getInfo = document.createElement("input");
getInfo.setAttribute("type", "submit");
getInfo.setAttribute("value", "получение информации о напитке");
getInfo.addEventListener('click', getDrink, false);

let delInfo = document.createElement("input");
delInfo.setAttribute("type", "submit");
delInfo.setAttribute("value", "удаление информации о напитке");
delInfo.addEventListener('click', delDrink, false);

let keyDrink = document.createElement('input');
keyDrink.setAttribute("type", "submit");
keyDrink.setAttribute("value", "перечень всех напитков");
keyDrink.addEventListener('click', keys, false);

document.body.appendChild(enterInfo);
document.body.appendChild(getInfo);
document.body.appendChild(delInfo);
document.body.appendChild(keyDrink);


function addDrink (){
    const name = prompt("Введите название напитка");
    const alco = confirm("Это алкогольный напиток?");
    const recipe = prompt("Введите рецепт напитка");
    const info ={
        alco : alco, 
        recipe : recipe
    };
    drinkStorage.addValue(name, info);
    drinkStorageAJAX.addAJAX();
};

function getDrink (){
    const name = prompt("Введите название напитка");
    const info = drinkStorage.getValue(name);
    drinkStorageAJAX.getAJAX();
    if (info){
        alert (`
        напиток ${name}
        алкогольный: ${info.alco?'да':'нет'}
        рецепт приготовления: ${info.recipe}
        `)
    } else alert('Такого напитка нет')
}

function delDrink (){
    const name = prompt("Введите название напитка");
    const del = drinkStorage.deleteValue(name);
    if (del){
        alert('напиток удален');
    } else alert('Такого напитка нет');
}

function keys (){
    const nameDrink = drinkStorage.getKeys();
    alert (nameDrink)
}


