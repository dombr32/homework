do {
     secondName= prompt("Введите вашу фамилию")
} while (secondName == '' || secondName == null)

do {
    Name=prompt ('Введите ваше имя')
} while (Name == null || Name == "")

do {
    surName=prompt ('Введите ваше отчество')
} while (surName == null || surName == "")

do {
    age=prompt ('Сколько вам лет?')
} while (age == null || age == '' || isNaN(parseInt(age)))


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
    ваше ФИО: ${secondName} ${Name} ${surName}
    ваш возраст в годах: ${parseInt(age)}
    ваш возраст в днях: ${parseInt(age)*365}
    через 5 лет вам будет: ${parseInt(age)+5}
    ваш пол: ${gender}
    вы на пенсии: ${pension}`
)