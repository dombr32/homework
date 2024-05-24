function ObjStorageFunc (){

    this.storage = {}
    this.addValue = function(key, value){
        this.storage[key]=value
    };

    this.getValue = function (key){
        return this.storage[key]
    };

    this.deleteValue = function (key){
        if (key in this.storage){
            delete key in this.storage
            return true
        } else return false
    }

    this.getKeys = function(){
        return Object.keys(this.storage)
    }
}

const drinkStorage = new ObjStorageFunc;

function addDrink (){
    const name = prompt("Введите название напитка");
    const alco = confirm("Это алкогольный напиток?");
    const recipe = prompt("Введите рецепт напитка");
    const info ={alco, recipe};
    drinkStorage.addValue(name, info)
}