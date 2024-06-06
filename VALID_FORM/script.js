function validForm (){
    let form = document.createElement("form")
    form.setAttribute("action", "https://fe.it-academy.by/TestForm.php")

    const description = document.createTextNode("Для внесения вашего сайта в каталог, заполните форму:");
    form.appendChild(description);
    form.appendChild(document.createElement("br"));

    
    const devs = document.createTextNode("Разработчики:");
    const devsField = document.createElement("input");
    devsField.setAttribute("name", "devsField")
    form.appendChild(devs);
    form.appendChild(devsField);
        const devsEror = document.createElement("span");
        const devsErorText= document.createTextNode("  *это поле обязательное для заполнения ")
        form.appendChild(devsEror);
    
        devsField.addEventListener('blur',validateDevsField,false);
        function validateDevsField (eo) {
            eo=eo||window.event;
            
            const devsValue=devsField.value;

            if ( devsValue =="") {
                // devsEror.appendChild(devsErorText); 
                devsEror.innerHTML='<span>*это поле обязательное для заполнения</span>'
                devsField.style.backgroundColor="pink";
                return;
            }

            if ( !devsValue =="") {
                // devsEror.removeChild(devsErorText); 
                devsEror.innerHTML='<span></span>'
                devsField.style.backgroundColor="white";
                return;
            }
        }
    form.appendChild(document.createElement("br"));

    const siteName = document.createTextNode("Название сайта:");
    const siteNameField = document.createElement("input");
    siteNameField.setAttribute("name", "siteNameField")
    form.appendChild(siteName);
    form.appendChild(siteNameField);
        const siteNameEror = document.createElement("span");
        const siteNameErorText= document.createTextNode("  *это поле обязательное для заполнения (длина поля не должна составлять больше 10 симоволов)")
            form.appendChild(siteNameEror);
        
            siteNameField.addEventListener('blur',validatesiteNameField,false);
            function validatesiteNameField (eo) {
                eo=eo||window.event;
                
                const siteNameValue=siteNameField.value;

                if (siteNameValue.length>10 || siteNameValue =="") {
                    //siteNameEror.appendChild(siteNameErorText); 
                    siteNameEror.innerHTML='<span>*это поле обязательное для заполнения (длина не больше 10)</span>'
                    siteNameField.style.backgroundColor="pink";
                    return;
                }

                if (!siteNameValue.length>10 || !siteNameValue =="") {
                    //siteNameEror.removeChild(siteNameErorText);
                    siteNameEror.innerHTML='<span></span>' 
                    siteNameField.style.backgroundColor="white";
                    return;
                }
            }

    form.appendChild(document.createElement("br"));

    const url = document.createTextNode("URL сайта:");
    const urlField = document.createElement("input");
    //urlField.setAttribute("type", "url");
    urlField.setAttribute("name", "urlField");
    form.appendChild(url);
    form.appendChild(urlField);
        const urlEror = document.createElement("span");
        const urlErorText= document.createTextNode("  *это поле обязательное для заполнения ")
        form.appendChild(urlEror);
    
        urlField.addEventListener('blur',validateurlField,false);
        function validateurlField (eo) {
            eo=eo||window.event;
            
            const urlValue=urlField.value;

            if ( urlValue =="") {
                //urlEror.appendChild(urlErorText); 
                urlEror.innerHTML='<span>*это поле обязательное для заполнения</span>'
                urlField.style.backgroundColor="pink";
                return;
            }

            if ( !urlValue =="") {
                // urlEror.removeChild(urlErorText); 
                urlEror.innerHTML='<span></span>'
                urlField.style.backgroundColor="white";
                return;
            }
        }
    form.appendChild(document.createElement("br"));

    const date = document.createTextNode("Дата запуска сайта:");
    const dateField = document.createElement("input");
    dateField.setAttribute("name", "dateField");
    dateField.setAttribute("type", "date")
    form.appendChild(date);
    form.appendChild(dateField);
    const dateEror = document.createElement("span");
    const dateErorText= document.createTextNode("  *выберите дату")
    form.appendChild(dateEror);

    dateField.addEventListener('blur',validatedateField,false);
    function validatedateField (eo) {
        eo=eo||window.event;
        
        const dateValue=dateField.value;

        if ( dateValue =="") {
            // dateEror.appendChild(dateErorText); 
            dateEror.innerHTML='<span>*укажите дату</span>'
            dateField.style.backgroundColor="pink";
            return;
        }

        if ( !dateValue =="") {
            // dateEror.removeChild(dateErorText);
            dateEror.innerHTML='<span></span>' 
            dateField.style.backgroundColor="white";
            return;
        }
    }
    form.appendChild(document.createElement("br"));

    const visitors = document.createTextNode("Посетителей в сутки:");
    const visitorsField = document.createElement("input");
    //visitorsField.setAttribute("type", "number");
    visitorsField.setAttribute("name", "visitorsField");
    form.appendChild(visitors);
    form.appendChild(visitorsField);
        const visitorsEror = document.createElement("span");
        const visitorsErorText= document.createTextNode("  *это поле обязательное для заполнения")
        const visitorsErorNanText= document.createTextNode("  *введите число")
        form.appendChild(visitorsEror);

        visitorsField.addEventListener('blur',validatevisitorsField,false);
        function validatevisitorsField (eo) {
            eo=eo||window.event;
            
            const visitorsValue=visitorsField.value;

            if ( visitorsValue =="") {
                visitorsEror.innerHTML='<span>*это поле обязательное для заполнения</span>'
                //visitorsEror.appendChild(visitorsErorText); 
                visitorsField.style.backgroundColor="pink";
                return;
            }

            if ( isNaN(visitorsValue) ) {
                visitorsField.style.backgroundColor="pink";
                visitorsEror.innerHTML='<span>*введите число</span>'
                //visitorsEror.appendChild(visitorsErorNanText); 
                //visitorsEror.removeChild(visitorsErorText);
                return;
            }

            if ( !isNaN(visitorsValue) || !visitorsValue =="") {
                visitorsField.style.backgroundColor="white";
                visitorsEror.innerHTML='<span></span>'
                //visitorsEror.removeChild(visitorsErorNanText); 
                //visitorsEror.removeChild(visitorsErorText);
                return;
            }
            
        }
    form.appendChild(document.createElement("br"));

    const email = document.createTextNode("E-mail для связи:");
    const emailField = document.createElement("input");
    //emailField.setAttribute("type", "email");
    emailField.setAttribute("name", "emailField");
    form.appendChild(email);
    form.appendChild(emailField);
        const emailEror = document.createElement("span");
        const emailErorText= document.createTextNode("  *это поле обязательное для заполнения")
        form.appendChild(emailEror);
    
        emailField.addEventListener('blur',validatemailField,false);
        function validatemailField (eo) {
            eo=eo||window.event;
            
            const emailValue=emailField.value;

            if ( emailValue =="") {
                // emailEror.appendChild(emailErorText);
                emailEror.innerHTML='<span>*укажите email</span>' 
                emailField.style.backgroundColor="pink";
                return;
            }

            if ( !emailValue =="") {
                // emailEror.removeChild(emailErorText); 
                emailEror.innerHTML='<span></span>'
                emailField.style.backgroundColor="white";
                return;
            }
        }
    form.appendChild(document.createElement("br"));

    const catalog = document.createTextNode("Рубрика каталога:");
    const catalogField = document.createElement("select");
    catalogField.setAttribute("name", "catalogField");

        const catalog1 = document.createElement("option");
        catalog1.setAttribute("value", "1");
        catalog1.appendChild(document.createTextNode("здоровье"))
        
        const catalog2 = document.createElement("option");
        catalog2.setAttribute("value", "2");
        catalog2.appendChild(document.createTextNode("домашний уют"))

        const catalog3 = document.createElement("option");
        catalog3.setAttribute("value", "3");
        catalog3.appendChild(document.createTextNode("бытовая техника"))
        
        catalogField.appendChild(catalog1)
        catalogField.appendChild(catalog2)
        catalogField.appendChild(catalog3)
    
    form.appendChild(catalog);
    form.appendChild(catalogField);
    const catalogEror = document.createElement("span");
    const catalogErorText= document.createTextNode("  *к сожалению, в данный момент эта рубрика недоступна")
    const catalogErorText2= document.createTextNode("  *это значение по умолчанию. вы уверены?");
    form.appendChild(catalogEror);

    catalogField.addEventListener('click',validatecatalogField,false);
    function validatecatalogField (eo) {
        eo=eo||window.event;
        
        const cataloglValue=catalogField.value;

        if ( cataloglValue ==2) {
            // catalogEror.appendChild(catalogErorText); 
            catalogEror.innerHTML='<span>*к сожалению, в данный момент эта рубрика недоступна</span>'
            catalogField.style.backgroundColor="pink";
            return;
        }

        if ( cataloglValue !==2) {
            // catalogEror.removeChild(catalogErorText); 
            catalogEror.innerHTML='<span></span>'
            catalogField.style.backgroundColor="white";
            return;
        }
    }
    form.appendChild(document.createElement("br"));

    
    const paymentLabel = document.createElement("label");
    const payment = document.createTextNode("Размещение:");
    paymentLabel.appendChild(payment);

        const payment1 = document.createElement("input");
        payment1.setAttribute("name", "paymentName");
        payment1.setAttribute("type", "radio");
        payment1.setAttribute("value", "1");
        paymentLabel.appendChild(payment1);
        paymentLabel.appendChild(document.createTextNode("бесплатное"));

        const payment2 = document.createElement("input");
        payment2.setAttribute("name", "paymentName");
        payment2.setAttribute("type", "radio");
        payment2.setAttribute("value", "2");
        paymentLabel.appendChild(payment2);
        paymentLabel.appendChild(document.createTextNode("платное"));

        const payment3 = document.createElement("input");
        payment3.setAttribute("name", "paymentName");
        payment3.setAttribute("type", "radio");
        payment3.setAttribute("value", "3");
        paymentLabel.appendChild(payment3);
        paymentLabel.appendChild(document.createTextNode("VIP"));
        
    form.appendChild(paymentLabel);

    const paymentEror = document.createElement("span");
    const paymentErorText= document.createTextNode("  *к сожалению, в данный момент это размещение недоступно");
    const paymentErorText2= document.createTextNode("  *вы ничего не выбрали");
    form.appendChild(paymentEror);

    paymentLabel.addEventListener('click',validatepayment,false);
    function validatepayment(eo) {
        eo=eo||window.event;
         
        const paymentlValue=document.forms[0].elements.paymentName.value;
        
        if ( paymentlValue == 3) {
            //paymentEror.appendChild(paymentErorText); 
            paymentEror.innerHTML='<span>*к сожалению, в данный момент это размещение недоступно</span>'
            return
        }

        if ( paymentlValue !== 3) {
            // paymentEror.removeChild(paymentErorText);
            paymentEror.innerHTML='<span></span>'
            return
            return
        }
        
    }

    form.appendChild(document.createElement("br"));

    const votes = document.createTextNode("Разрешить отзывы:");
    const votesField = document.createElement("input");
    votesField.setAttribute("name", "votesFild");
    votesField.setAttribute("type", "checkbox");
    form.appendChild(votes);
    form.appendChild(votesField);
    const votesEror = document.createElement("span");
    const votesErorText= document.createTextNode("  *требуется разрешить отзывы")
    form.appendChild(votesEror);

    votesField.addEventListener('click',validatevotesFild,false);
    function validatevotesFild (eo) {
        eo=eo||window.event;
        
        const voteslValue=votesField.checked;

        if ( !voteslValue ) {
            // votesEror.appendChild(votesErorText); 
            votesEror.innerHTML='<span>*требуется разрешить отзывы</span>'
            return;
        }

        if ( voteslValue ) {
            // votesEror.removeChild(votesErorText); 
            votesEror.innerHTML='<span></span>'
            return;
        }
    }
    form.appendChild(document.createElement("br"));

    const desc = document.createTextNode("Описание сайта:");
    const descField = document.createElement("textarea");
    descField.setAttribute("name", "textarea");

    form.appendChild(desc);
    form.appendChild(document.createElement("br"));
    form.appendChild(descField);
    const descEror = document.createElement("span");
    const descErorText= document.createTextNode("  *это поле не является обязательным")
        form.appendChild(descEror);
    
        descField.addEventListener('focus',validateDescFocus,false);
        function validateDescFocus (eo) {
            eo=eo||window.event;
            descEror.appendChild(descErorText); 
            descField.style.backgroundColor="green";
            return;
        }

        descField.addEventListener('blur',validateDescBlur,false);
        function validateDescBlur (eo) {
            eo=eo||window.event;
            descEror.removeChild(descErorText); 
            descField.style.backgroundColor="white";
            return;
        }
    form.appendChild(document.createElement("br"));

    const button = document.createElement("input");
    button.setAttribute("type", "submit");
    button.setAttribute("value", "Опубликовать");
    form.appendChild(button);

    document.body.appendChild(form)


        form.addEventListener('submit',validateInfoForm,false);

        function validateInfoForm (eo) {
            eo=eo||window.event;
           
            const devsValue=devsField.value;
            const siteNameValue=siteNameField.value;
            const urlValue=urlField.value;
            const visitorsValue=visitorsField.value;
            const emailValue=emailField.value;
            const cataloglValue=catalogField.value;
            const paymentlValue=document.forms[0].elements.paymentName.value;
            const voteslValue=votesField.checked;
            const dateValue=dateField.value;

            if ( emailValue =="") {
                // emailEror.appendChild(emailErorText); 
                emailEror.innerHTML='<span>*это поле обязательное для заполнения</span>';
                emailField.style.backgroundColor="pink";
                emailField.focus();
                eo.preventDefault();
            }

            if (visitorsValue =="") {
                //visitorsEror.appendChild(visitorsErorText); 
                visitorsEror.innerHTML='<span>*это поле обязательное для заполнения</span>'
                visitorsField.style.backgroundColor="pink";
                visitorsField.focus();
                eo.preventDefault(); 
            }

            if ( isNaN(visitorsValue) ) {
                visitorsEror.innerHTML='<span>*введите число</span>'
                //visitorsEror.appendChild(visitorsErorNanText)
                visitorsField.style.backgroundColor="pink";
                visitorsField.focus();
               
            }
            
            if ( dateValue =="") {
                // dateEror.appendChild(dateErorText); 
                dateEror.innerHTML='<span>*укажите дату</span>'
                dateField.style.backgroundColor="pink";
                dateField.scrollIntoView();
                eo.preventDefault();
            }

            if (urlValue =="") {
                // urlEror.appendChild(urlErorText); 
                urlEror.innerHTML='<span>*это поле обязательное для заполнения</span>'
                urlField.style.backgroundColor="pink";
                urlField.focus();
                eo.preventDefault();
            }

            if (siteNameValue.length>10 || siteNameValue =="") {
                //siteNameEror.appendChild(siteNameErorText); 
                siteNameEror.innerHTML='<span>*это поле обязательное для заполнения</span>'
                siteNameField.style.backgroundColor="pink";
                siteNameField.focus(); 
                eo.preventDefault(); 
            }

            if ( devsValue =="") {
                //devsEror.appendChild(devsErorText); 
                devsEror.innerHTML='<span>*это поле обязательное для заполнения</span>'
                devsField.style.backgroundColor="pink";
                devsField.focus(); 
                eo.preventDefault(); 
                
            }

            
            if ( cataloglValue ==1) {
                catalogEror.innerHTML='<span>*это значение по умолчанию. вы уверены?</span>'
                // catalogEror.appendChild(catalogErorText2);
                catalogField.style.backgroundColor="pink";
            }

            if (cataloglValue ==2) {
                // catalogEror.appendChild(catalogErorText); 
                // catalogEror.innerHTML='<span>*к сожалению, в данный момент эта рубрика недоступна</span>'
                // catalogField.style.backgroundColor="pink";
                // catalogField.focus();
                eo.preventDefault();
            }

            if ( !voteslValue ) {
                // votesEror.appendChild(votesErorText);
                votesEror.innerHTML='<span>*вы ничего не выбрали</span>'
                votesField.scrollIntoView();
                eo.preventDefault();
            }

            if ( paymentlValue =="") {
                // paymentEror.appendChild(paymentErorText2);
                paymentEror.innerHTML='<span>  *выберите вариант размещения</span>'
                paymentLabel.scrollIntoView();
                eo.preventDefault();   
            }
  
            if ( paymentlValue == 3) {
                paymentlValue.scrollIntoView();;
                eo.preventDefault();
            }
      
        }

        // paymentLabel.addEventListener('click',validatePaymentAfterSub,false);
        // function validatePaymentAfterSub(eo) {
        //     eo=eo||window.event;
        //     paymentEror.removeChild(paymentErorText2); 
        // }

        // catalogField.addEventListener('click',validateCatalogAfterSub,false);
        // function validateCatalogAfterSub (eo) {
        //     eo=eo||window.event;
        //     catalogEror.removeChild(catalogErorText2);
        //     catalogField.style.backgroundColor="";
        // }

        // visitorsField.addEventListener('blur',validateVisitorsAfterSub,false);
        // function validateVisitorsAfterSub (eo) {
        //     eo=eo||window.event;
        //     if ( !visitorsValue =="" ) {
        //         visitorsEror.innerHTML='<span></span>'
        //         //visitorsEror.removeChild(visitorsErorText);
        // }
        // }
}

validForm ()