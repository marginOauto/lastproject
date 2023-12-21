/*let menu = {
  width: 300,
  height: 200,
  title: "Menu",
};
for (let key in menu) {
  // цей код буде викликаний для кожної властивості об’єкту
  // ..та виведе назву властивості та її значення
  alert( "Ключ: " + key + " значення: " + menu[key] );
}
human = new Object();
human.name   = 'В'ячеслав';
human.age    = 34;
human.gender = 'Male';
human.greet = function(personName) {
    return this.name + ': Радий Вас бачити, ' + personName + '!'
}
// давайте перевіримо наш метод «привіт» для об'єкта «людина»
alert(human.greet('Катерина'));
alert(human.greet('Олег'));
human = new Object();
human.name   = 'В'ячеслав';
human.gender = 'Male';

alert(human['gender']); //  'Male'
delete human['gender'] ;
alert(human['gender']); //  undefined
let menu = {
  width: 300,
  height: 200,
  title: "Menu",
};
let counter = 0;
for (let key in menu) {
  counter++;
}
alert( "Всього властивостей: " + counter );
let user = {
  name: "Василь",
  surname: "Петренко"
};
user.age = 25;
// порядок перебору відповідає порядку присвоєння властивості 
for (let prop in user) {
  alert( prop ); // name, surname, age
}
let codes = {
// телефонні коди в форматі "код країни": "назва "
"+38": "Україна",
"+44": "Велика Британія",
  // ..,
  "+1": "США"
};
for (let code in codes) alert( code );  // 1, 38, 44
let salaries = {
  "Василь": 10000,
  "Петро": 30000,
  "Дарина": 25000
};
let zarp = 0;
let name;
for (let key in salaries) {
  if(zarp < salaries[key]){
    name = key;
    zarp = salaries[key]
  }
}
alert("Ім'я: "+ name+ ", Заробітня плата: "+ zarp);
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1"><title></title>
  </head>
<body>
<script type="text/javascript" src="test.js">


</script>
<style type="text/css" link="text.css" >
  
</style>

</body>
</html>*/
