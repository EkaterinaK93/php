const personGenerator = {
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,
    firstNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Екатерина",
            "id_2": "Марина",
            "id_3": "Раиса",
            "id_4": "Агрипина",
            "id_5": "Агапия",
            "id_6": "Нина",
            "id_7": "Наташа",
            "id_8": "Алёна",
            "id_9": "Дарья",
            "id_10": "Арина"
        }  
    }`,
    patronymicJson: `{
        "count": 10,
        "list": {     
            "id_1": "Дмитриев",
            "id_2": "Александров",
            "id_3": "Алексеев",
            "id_4": "Глебов",
            "id_5": "Евгеньев",
            "id_6": "Олегов",
            "id_7": "Михайлов",
            "id_8": "Максимов",
            "id_9": "Владиславов",
            "id_10": "Иванов"
        }  
    }`,
    professionMaleJson: `{
        "count": 10,
        "list": {
            "id_1": "Водитель",
            "id_2": "Слесарь",
            "id_3": "Электрик",
            "id_4": "Пожарный",
            "id_5": "Полицейский"
            "id_6": "Врач"
            "id_7": "Психолог"
            "id_8": "Уролог"
            "id_9": "Военный"
            "id_10": "Дворник"
        }
    }`,
    professionFemaleJson: `{
        "count": 10,
        "list": {
            "id_1": "Медсестра",
            "id_2": "Учительница",
            "id_3": "Стюардесса",
            "id_4": "Парикмахер",
            "id_5": "Актриса",
            "id_6": "Певица",
            "id_7": "Врач",
            "id_8": "Психолог",
            "id_9": "Гениколог",
            "id_10": "Воспитатель",
        }
    }`,

    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

    randomGender: function() {
        return Math.floor(Math.random()*2) == 1 ? this.GENDER_MALE : this.GENDER_FEMALE;
    },

    randomIntNumber: (min = 0, max = 1) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
        return obj.list[prop];
    },

    randomFirstName: function() {
        if (this.person.gender == 'Мужчина'){
            return this.randomValue(this.firstNameMaleJson);
        }
        else {
            return this.randomValue(this.firstNameFemaleJson);
        }
    },

    randomSurname: function() {
        if (this.person.gender == 'Мужчина') {
            return this.randomValue(this.surnameJson);
        } 
        else {
            return this.randomValue(this.surnameJson) + "а";
        }
    },

    randomPatronymic: function() {
        if (this.person.gender == 'Мужчина') {
            return this.randomValue(this.patronymicJson) + "ич";
        } 
        else {
            return this.randomValue(this.patronymicJson) + "на";
        }
    },

    randomРrofession: function() {
        return "Водитель";
        // return this.randomValue(this.professionMaleJson) ;
        if (this.person.gender == 'Мужчина') {
            return this.randomValue(this.professionMaleJson);
        } 
        else {
            return this.randomValue(this.professionFemaleJson);
        }
    },

    randomBirthYear: function() {
            return this.randomIntNumber(1920, 2023) + "г.р.";
    },

    getPerson: function () {
        this.person = {};
        this.person.gender = this.randomGender();
        this.person.surname = this.randomSurname();
        this.person.firstName = this.randomFirstName();
        this.person.patronymic = this.randomPatronymic();
        this.person.birthYear = this.randomBirthYear(1920, 2023);
        this.person.profession = this.randomРrofession();
        return this.person;
    }
};
