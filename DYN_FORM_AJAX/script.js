'use strict';    

let n1 = document.createElement("form")
n1.setAttribute("action", "https://fe.it-academy.by/TestForm.php");
document.body.appendChild(n1)


const ajaxHandlerScript= "https://fe.it-academy.by/Examples/dyn_form_ajax/formDef1.json";
const ajaxHandlerScript2= "https://fe.it-academy.by/Examples/dyn_form_ajax/formDef2.json";

let get1 = undefined;
let get2 = undefined;

// функция для последовательной загрузки данных 
function getForm (){
    //когда получаем данные с первого сервера (get1), кладем их в переменную, и затем получаем данные со второго сервера
    if (get1 == undefined){
        $.ajax(ajaxHandlerScript,
            { type:'GET', dataType:'json',
                success: (data) => {
                    get1 = data;
                    formsListReady(data);
                    getForm();
                  }, error: errorHandler }
        );
        return;
    }

    if (get2 == undefined){
        $.ajax(ajaxHandlerScript2,
            { type:'GET', dataType:'json',
                success: (data) => {
                    get2 = data;
                    formsListReady(data);
                    getForm();
                }, error: errorHandler }
        );
        return;
    }
}

getForm ()

function formsListReady(data) {
    // console.log( 'От сервера получен ответ:' );
    // console.log( data );

    const formAJAX=data;

    // идем циклом по хэшу полученному от сервера
    for ( let c=0; c<formAJAX.length; c++ ) {   
        const formAJAXn=formAJAX[c]; // получаем каждый хэш по отдельности, и задаем необходимые параметры отображения
        
            if (formAJAXn.kind == "longtext"){
                let nameElement = document.createTextNode(formAJAXn.label)
                let typeOfElement = document.createElement("input")
                typeOfElement.style.width='400px';
                typeOfElement.setAttribute("name", formAJAXn.name)
    
                n1.appendChild(nameElement)
                n1.appendChild(typeOfElement)
                n1.appendChild(document.createElement("br"))
    
            } else if (formAJAXn.kind == "shorttext"){
                let nameElement = document.createTextNode(formAJAXn.label)
                let typeOfElement = document.createElement("input")
                typeOfElement.style.width='200px';
                typeOfElement.setAttribute("name", formAJAXn.name)
    
                n1.appendChild(nameElement)
                n1.appendChild(typeOfElement)
                n1.appendChild(document.createElement("br"))
    
            } else if (formAJAXn.kind == "dropdown") { 
                let nameElement = document.createTextNode(formAJAXn.label)
                let typeOfElement = document.createElement("select")
                typeOfElement.style.width='auto';
                typeOfElement.setAttribute("name", formAJAXn.name)
    
                    for (let v of formAJAXn.variants){
                    let variantsOfElement = document.createElement("option")   
                    variantsOfElement.appendChild (document.createTextNode(v.text))
                    variantsOfElement.setAttribute("value", v.value)
                    typeOfElement.appendChild(variantsOfElement)}
    
                n1.appendChild(nameElement)
                n1.appendChild(typeOfElement)
                n1.appendChild(document.createElement("br"))
    
            }  else if (formAJAXn.kind == "radio") { 
                let nameElement = document.createTextNode(formAJAXn.label)
                n1.appendChild(nameElement)
    
                    for (let v of formAJAXn.variants){
                    let variantsOfElement = document.createElement("input")
                    let variantsText = document.createTextNode(v.text)   
                    variantsOfElement.setAttribute("value", v.value)
                    variantsOfElement.setAttribute("type", "radio")
                    variantsOfElement.setAttribute("name", formAJAXn.name)
                    n1.appendChild(variantsOfElement)
                    n1.appendChild(variantsText)}
    
                n1.appendChild(document.createElement("br"))
    
            } else if (formAJAXn.kind == "check") { 
                let nameElement = document.createTextNode(formAJAXn.label)
                let typeOfElement = document.createElement("input")
                typeOfElement.style.width='auto';
                typeOfElement.setAttribute("name", formAJAXn.name)
                typeOfElement.setAttribute("type", "checkbox");
    
                n1.appendChild(nameElement)
                n1.appendChild(typeOfElement)
                n1.appendChild(document.createElement("br"))
    
            } else if (formAJAXn.kind == "memo"){
                let nameElement = document.createTextNode(formAJAXn.label)
                let typeOfElement = document.createElement("textarea")
                typeOfElement.style.width='400px';
                typeOfElement.setAttribute("name", formAJAXn.name)
    
                n1.appendChild(nameElement)
                n1.appendChild(document.createElement("br"))
                n1.appendChild(typeOfElement)
                n1.appendChild(document.createElement("br"))
    
            } else if (formAJAXn.kind == "number") {
                let nameElement = document.createTextNode(formAJAXn.label)
                let typeOfElement = document.createElement("input")
                typeOfElement.style.width='auto';
                typeOfElement.setAttribute("type", "number")
                typeOfElement.setAttribute("name", formAJAXn.name)
    
                n1.appendChild(nameElement)
                n1.appendChild(typeOfElement)
                n1.appendChild(document.createElement("br"))
            
            } else if (formAJAXn.kind == "submit") {
                let typeOfElement = document.createElement("input")
                
                typeOfElement.setAttribute("type", "submit")
                typeOfElement.setAttribute("value", formAJAXn.caption)
                
                
                n1.appendChild(typeOfElement)
                n1.appendChild(document.createElement("br"))}
    }


}


function errorHandler(jqXHR,statusStr,errorStr) {
    alert(statusStr+' '+errorStr);
}

