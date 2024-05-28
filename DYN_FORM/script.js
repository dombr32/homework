
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



function forms (form1) {
  let n1 = document.createElement("form")
    n1.setAttribute("action", "https://fe.it-academy.by/TestForm.php");
    dynForm.appendChild(n1)
  
  let sitenameLabel = document.createTextNode(form1[0].label)
  let sitename = document.createElement("input")
    sitename.setAttribute("name", form1[0].name);
    sitename.style.width='400px'
    n1.appendChild(sitenameLabel)
    n1.appendChild(sitename)
    n1.appendChild(document.createElement("br"))
  
  let siteUrlLabel = document.createTextNode(form1[1].label)
  let siteUrl = document.createElement("input")
    siteUrl.setAttribute("name", form1[1].name);
    siteUrl.style.width='400px'
    siteUrl.setAttribute("type", "url");
    n1.appendChild(siteUrlLabel)
    n1.appendChild(siteUrl)
    n1.appendChild(document.createElement("br"))

  let siteVisitorsLabel = document.createTextNode(form1[2].label)
  let siteVisitors = document.createElement("input")
    siteVisitors.setAttribute("name", form1[2].name);
    siteVisitors.setAttribute("type", "number");
    siteVisitors.style.width='auto'
    n1.appendChild(siteVisitorsLabel)
    n1.appendChild(siteVisitors)
    n1.appendChild(document.createElement("br"))
  
  let siteEmailLabel = document.createTextNode(form1[3].label)
  let siteEmail = document.createElement("input")
    siteEmail.setAttribute("name", form1[3].name);
    siteEmail.setAttribute("type", "email");
    n1.appendChild(siteEmailLabel)
    n1.appendChild(siteEmail)
    n1.appendChild(document.createElement("br"))  

  let divisionLabel = document.createTextNode(form1[4].label)
  let division = document.createElement("select")
    division.style.width='150px'
    division.setAttribute("name", form1[4].name);
  let divisionOption1 = document.createElement("option")
    divisionOption1.setAttribute("value",form1[4].variants[0].value);
    divisionOption1.appendChild(document.createTextNode(form1[4].variants[0].text))
    division.appendChild(divisionOption1)
  let divisionOption2 = document.createElement("option")
    divisionOption2.setAttribute("value",form1[4].variants[1].value);
    divisionOption2.appendChild(document.createTextNode(form1[4].variants[1].text))
    division.appendChild(divisionOption2)
  let divisionOption3 = document.createElement("option")
    divisionOption3.setAttribute("value",form1[4].variants[2].value);
    divisionOption3.appendChild(document.createTextNode(form1[4].variants[2].text))
    division.appendChild(divisionOption3)
    n1.appendChild(divisionLabel)
    n1.appendChild(division)
    n1.appendChild(document.createElement("br"))  

//выбор только одного элемента
  let siteDivision = document.createElement('form')
    siteDivision.setAttribute("name", form1[5].name);
    siteDivision.setAttribute("method", "post");  
  let siteDivisionLabel = document.createTextNode(form1[5].label)
    siteDivision.appendChild(siteDivisionLabel)
  let siteDivisionValue1 = document.createElement('input')
    siteDivisionValue1.setAttribute("type", "radio");
    siteDivisionValue1.setAttribute("value",form1[5].variants[0].value);  
    siteDivision.appendChild(siteDivisionValue1)
    siteDivision.appendChild(document.createTextNode(form1[5].variants[0].text))
  let siteDivisionValue2 = document.createElement('input')
    siteDivisionValue2.setAttribute("type", "radio");
    siteDivisionValue2.setAttribute("value",form1[5].variants[1].value);
    siteDivision.appendChild(siteDivisionValue2)
    siteDivision.appendChild(document.createTextNode(form1[5].variants[1].text))
  let siteDivisionValue3 = document.createElement('input') 
    siteDivisionValue3.setAttribute("type", "radio");
    siteDivisionValue3.setAttribute("value",form1[5].variants[2].value);
    siteDivision.appendChild(siteDivisionValue3)
    siteDivision.appendChild(document.createTextNode(form1[5].variants[2].text))
  n1.appendChild(siteDivision)
  n1.appendChild(document.createElement("br"))  

//возможность убирать галочку
  let votesLabel = document.createTextNode(form1[6].label)
  let votesLabelValue = document.createElement('input')
  votesLabelValue.setAttribute("name", form1[6].name);
    votesLabelValue.setAttribute("type", "radio");
    votesLabelValue.setAttribute("checked", "true");
  n1.appendChild(votesLabel)
  n1.appendChild(votesLabelValue)
  n1.appendChild(document.createElement("br")) 

  let description = document.createTextNode(form1[7].label)
  let descriptionArea = document.createElement("textarea")
    descriptionArea.setAttribute("name", form1[7].name);
    descriptionArea.style.width='450px'
  n1.appendChild(description)
  n1.appendChild(document.createElement("br")) 
  n1.appendChild(descriptionArea)
  n1.appendChild(document.createElement("br")) 

  let submit1 = document.createElement('input')
    submit1.setAttribute("value", form1[8].caption);
    submit1.setAttribute("type", "submit");
    submit1.setAttribute("onclick", "return");
  n1.appendChild(submit1)


  let submit = document.createElement('input')
    submit.setAttribute("value", form1[4].caption);
    submit.setAttribute("type", "submit");
  n1.appendChild(submit)

}

forms (formDef1);
forms (formDef2);
