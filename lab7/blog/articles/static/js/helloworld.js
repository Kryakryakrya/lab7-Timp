var groupmates = [
    {
        "name": "Александр",
        "surname": "Иванов",
        "group": "БИБ2103",
        "marks": [4, 3, 5]
    },
    {
        "name": "Иван",
        "surname": "Петров",
        "group": "БИБ2103",
        "marks": [4, 4, 4]
    },
    {
        "name": "Кирилл",
        "surname": "Смирнов",
        "group": "БИБ2103",
        "marks": [5, 5, 5]
    }
];
var rpad = function(str, length) {
    // js не поддерживает добавление нужного количества символов
    // справа от строки, т.е. аналога ljust из Python здесь нет
    str = str.toString(); // преобразование в строку
    while (str.length < length)
        str = str + ' '; // добавление пробела в конец строки return str; // когда все пробелы добавлены, возвратить строку
    return str;
};

var printStudents = function(students){
    console.log(
        rpad("Имя", 15),
        rpad("Фамилия", 15),
        rpad("Группа", 8),
        rpad("Оценки", 20)
    );
    // был выведен заголовок таблицы
    for (var i = 0; i<=students.length-1; i++){
    // в цикле выводится каждый экземпляр студента
        console.log(
            rpad(students[i]['name'], 15),
            rpad(students[i]['surname'], 15),
            rpad(students[i]['group'], 8),
            rpad(students[i]['marks'], 20)
        );
    }
    console.log('\n'); // добавляется пустая строка в конце вывода
};
var printStudentsByGroup = function(students, targetGroup){
    console.log(
        rpad("Имя", 15),
        rpad("Фамилия", 15),
        rpad("Группа", 8),
        rpad("Оценки", 20)
    );
    for (var i = 0; i<=students.length-1; i++){
    // в цикле выводится каждый экземпляр студента
            if (students[i]['group'] == targetGroup){
                console.log(
                rpad(students[i]['name'], 15),
                rpad(students[i]['surname'], 15),
                rpad(students[i]['group'], 8),
                rpad(students[i]['marks'], 20)
                );
            }
    }

};
var calculate = function(marks){
    result = 0.0;
    for (var i = 0; i<=marks.length-1; i++){
        result += marks[i];
    }
    return result/marks.length;
}
var printStudentsByMarks = function(students, avarage){
    console.log(
        rpad("Имя", 15),
        rpad("Фамилия", 15),
        rpad("Группа", 8),
        rpad("Оценки", 20)
    );
    for (var i = 0; i<=students.length-1; i++){
    // в цикле выводится каждый экземпляр студента
            if (calculate(students[i]['marks']) >= avarage){
                console.log(
                rpad(students[i]['name'], 15),
                rpad(students[i]['surname'], 15),
                rpad(students[i]['group'], 8),
                rpad(students[i]['marks'], 20)
                );
            }
    }

};
printStudents(groupmates);
//var targetGroup = prompt("Группа для фильтрации");
//printStudentsByGroup(groupmates,targetGroup)
//var avarage = prompt("Средний балл");
//printStudentsByMarks(groupmates,avarage)
