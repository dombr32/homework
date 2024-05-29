
const formDef1=
[
  {label:'Название сайта:',kind:'longtext',name:'sitename'},
  {label:'URL сайта:',kind:'longtext',name:'siteurl'},
  {label:'Посетителей в сутки:',kind:'number',name:'visitors'},
  {label:'E-mail для связи:',kind:'shorttext',name:'email'},
  {label:'Рубрика каталога:',kind:'dropdown',name:'division',
    variants:[{text:'здоровье',value:1},{text:'домашний уют',value:2},{text:'бытовая техника',value:3}]},
  {label:'Размещение:',kind:'radio',name:'payment',
    variants:[{text:'бесплатное',value:1},{text:'платное',value:2},{text:'VIP',value:3}]},
  {label:'Разрешить отзывы:',kind:'check',name:'votes'},
  {label:'Описание сайта:',kind:'memo',name:'description'},
  {caption:'Опубликовать',kind:'submit'},
];

const formDef2=
[
  {label:'Фамилия:',kind:'longtext',name:'lastname'},
  {label:'Имя:',kind:'longtext',name:'firstname'},
  {label:'Отчество:',kind:'longtext',name:'secondname'},
  {label:'Возраст:',kind:'number',name:'age'},
  {caption:'Зарегистрироваться',kind:'submit'},
];


function forms (form) {

    let n1 = document.createElement("form")
    n1.setAttribute("action", "https://fe.it-academy.by/TestForm.php");
    dynForm.appendChild(n1)

    
    
    for (let i of form){
        if (i.kind == "longtext"){
            let nameElement = document.createTextNode(i.label)
            let typeOfElement = document.createElement("input")
            typeOfElement.style.width='400px';
            typeOfElement.setAttribute("name", i.name)

            n1.appendChild(nameElement)
            n1.appendChild(typeOfElement)
            n1.appendChild(document.createElement("br"))

        } else if (i.kind == "shorttext"){
            let nameElement = document.createTextNode(i.label)
            let typeOfElement = document.createElement("input")
            typeOfElement.style.width='200px';
            typeOfElement.setAttribute("name", i.name)

            n1.appendChild(nameElement)
            n1.appendChild(typeOfElement)
            n1.appendChild(document.createElement("br"))

        } else if (i.kind == "dropdown") { 
            let nameElement = document.createTextNode(i.label)
            let typeOfElement = document.createElement("select")
            typeOfElement.style.width='auto';
            typeOfElement.setAttribute("name", i.name)

                for (let v of i.variants){
                let variantsOfElement = document.createElement("option")   
                variantsOfElement.appendChild (document.createTextNode(v.text))
                variantsOfElement.setAttribute("value", v.value)
                typeOfElement.appendChild(variantsOfElement)}

            n1.appendChild(nameElement)
            n1.appendChild(typeOfElement)
            n1.appendChild(document.createElement("br"))

        }  else if (i.kind == "radio") { 
            let nameElement = document.createTextNode(i.label)
            n1.appendChild(nameElement)

                for (let v of i.variants){
                let variantsOfElement = document.createElement("input")
                variantsText = document.createTextNode(v.text)   
                variantsOfElement.setAttribute("value", v.value)
                variantsOfElement.setAttribute("type", "radio")
                variantsOfElement.setAttribute("name", i.name)
                n1.appendChild(variantsOfElement)
                n1.appendChild(variantsText)}

            n1.appendChild(document.createElement("br"))

        } else if (i.kind == "check") { 
            let nameElement = document.createTextNode(i.label)
            let typeOfElement = document.createElement("input")
            typeOfElement.style.width='auto';
            typeOfElement.setAttribute("name", i.name)
            typeOfElement.setAttribute("type", "checkbox");

            n1.appendChild(nameElement)
            n1.appendChild(typeOfElement)
            n1.appendChild(document.createElement("br"))

        } else if (i.kind == "memo"){
            let nameElement = document.createTextNode(i.label)
            let typeOfElement = document.createElement("textarea")
            typeOfElement.style.width='400px';
            typeOfElement.setAttribute("name", i.name)

            n1.appendChild(nameElement)
            n1.appendChild(document.createElement("br"))
            n1.appendChild(typeOfElement)
            n1.appendChild(document.createElement("br"))

        } else if (i.kind == "number") {
            let nameElement = document.createTextNode(i.label)
            let typeOfElement = document.createElement("input")
            typeOfElement.style.width='auto';
            typeOfElement.setAttribute("type", "number")
            typeOfElement.setAttribute("name", i.name)

            n1.appendChild(nameElement)
            n1.appendChild(typeOfElement)
            n1.appendChild(document.createElement("br"))
        
        } else if (i.kind == "submit") {
            let typeOfElement = document.createElement("input")
            
            typeOfElement.setAttribute("type", "submit")
            typeOfElement.setAttribute("value", i.caption)
            
            
            n1.appendChild(typeOfElement)
            n1.appendChild(document.createElement("br"))}
    }
   

}

forms (formDef1);
forms (formDef2);
