do {
     secondName= prompt("Введите вашу фамилию")
} while (secondName == '')

do {
    name=prompt ('Введите ваше имя')
} while (name == false)

do {
    surName=prompt ('Введите ваше отчество')
} while (surName == false)

do {
    age=prompt ('Сколько вам лет?')
} while (age == false)


if (confirm('Ваш пол мужской?')){
    gender='мужской'
    if (age>62)
        pension='да'
    else pension='нет'
} else {
    gender='женский'
    if (age>58)
        pension='да'
    else pension='нет'
}


alert(`
    ваше ФИО: ${secondName} ${name} ${surName}
    ваш возраст в годах: ${parseInt(age)}
    ваш возраст в днях: ${parseInt(age)*365}
    через 5 лет вам будет: ${parseInt(age)+5}
    ваш пол: ${gender}
    вы на пенсии: ${pension}`
)