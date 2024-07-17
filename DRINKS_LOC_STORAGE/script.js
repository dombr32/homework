
class LocStorageClass {

    constructor (type) {
    this.storage = {};
    this.type = type;

        if (localStorage){
            for (let i = 0; i < localStorage.length; i++) {
                let key = localStorage.key(i);
                let value = JSON.parse(localStorage.getItem(key));
                if (key==this.type){
                    this.storage = value;
                }
            }
        }
    }
    
    addValue (key, value){
        this.storage[key]=value;
        let storageJSON = JSON.stringify(this.storage);
        localStorage.setItem(this.type,storageJSON);
    };

    getValue (key){
        return this.storage[key];
    };

    deleteValue (key){
        if (key in this.storage){
            delete this.storage[key];
            let storageJSON = JSON.stringify(this.storage);
            localStorage.setItem(this.type,storageJSON);
            return true
        } return false
    }

    getKeys (){
        return Object.keys(this.storage);
    }
}

const drinkStorage = new LocStorageClass('drinks');
const dishStorage = new LocStorageClass('dishs');

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

let enterInfoDish = document.createElement("input");
enterInfoDish.setAttribute("type", "submit");
enterInfoDish.setAttribute("value", "ввод информации о блюде");
enterInfoDish.addEventListener('click', addDish, false);

let getInfoDish = document.createElement("input");
getInfoDish.setAttribute("type", "submit");
getInfoDish.setAttribute("value", "получение информации о блюде");
getInfoDish.addEventListener('click', getDish, false);

let delInfoDish = document.createElement("input");
delInfoDish.setAttribute("type", "submit");
delInfoDish.setAttribute("value", "удаление информации о блюде");
delInfoDish.addEventListener('click', delDish, false);

let keyDish = document.createElement('input');
keyDish.setAttribute("type", "submit");
keyDish.setAttribute("value", "перечень всех блюд");
keyDish.addEventListener('click', keysDish, false);


document.body.appendChild(enterInfo);
document.body.appendChild(getInfo);
document.body.appendChild(delInfo);
document.body.appendChild(keyDrink);

document.body.appendChild(document.createElement("br"));
document.body.appendChild(document.createElement("br"));

document.body.appendChild(enterInfoDish);
document.body.appendChild(getInfoDish);
document.body.appendChild(delInfoDish);
document.body.appendChild(keyDish);


function addDrink (){
    const name = prompt("Введите название напитка");
    const alco = confirm("Это алкогольный напиток?");
    const recipe = prompt("Введите рецепт напитка");

    const info ={
        alco : alco, 
        recipe : recipe
    };
    drinkStorage.addValue(name, info);
};

function getDrink (){
    const name = prompt("Введите название напитка");
    const info = drinkStorage.getValue(name);
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

function addDish (){
    const name = prompt("Введите название блюда");
    const meat = confirm("Это блюдо содержит мясо?");
    const recipe = prompt("Введите рецепт блюда");
    const info ={
        meat : meat, 
        recipe : recipe
    };
    dishStorage.addValue(name, info);
};

function getDish (){
    const name = prompt("Введите название блюда");
    const info = dishStorage.getValue(name);
    if (info){
        alert (`
        блюдо ${name}
        содержание мяса: ${info.meat?'да':'нет'}
        рецепт приготовления: ${info.recipe}
        `)
    } else alert('Такого блюда нет')
}

function delDish (){
    const name = prompt("Введите название блюда");
    const del = dishStorage.deleteValue(name);
    if (del){
        alert('блюдо удалено');
    } else alert('Такого блюда нет');
}

function keysDish (){
    const name = dishStorage.getKeys();
    alert (name);
}

// console.log(dishStorage)
// console.group(drinkStorage)