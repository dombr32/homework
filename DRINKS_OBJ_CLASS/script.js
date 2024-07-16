class ObjStorageClass {

    storage = {}

    addValue (key, value){
        this.storage[key]=value;
    };

    getValue (key){
        return this.storage[key];
    };

    deleteValue (key){
        if (key in this.storage){
            delete this.storage[key];
            return true
        } return false
    }

    getKeys (){
        return Object.keys(this.storage);
    }
}

const drinkStorage = new ObjStorageClass;

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
    drinkStorage.addValue(name, info)
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