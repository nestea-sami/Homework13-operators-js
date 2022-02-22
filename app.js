/* 1.	Перевірити чи число знаходиться в діапазоні від 25 до 99 включно (25 і 99 входять в діапазон). Число ввести за допомогою prompt. Якщо відвідувач ввів число не з діапазону - попросити ввести ще раз, і так далі. Цикл повинен питати число поки відвідувач не введе число з діапазону, або не натисне кнопку Cancel (ESC). */

while (true) {
  let number = prompt();
  if (number >= 25 && number <= 99) {
    console.log(number);
    break;
  } else if (number === null) {
    break;
  }
}

/* 2.	Змініти if / else, на  switch

function chainToSwitch(val) {
  var answer = "";
  if (val === "bob") {
    answer = "Marley";
  } else if (val === 42) {
    answer = "The Answer";
  } else if (val === 1) {
    answer = "There is no #1";
  } else if (val === 99) {
    answer = "Missed me by this much!";
  } else if (val === 7) {
    answer = "Ate Nine";
  }

 return answer;
}

chainToSwitch(7); */

function chainToSwitch(val) {
  let answer = '';
  switch(val) {
    case 'bob':
      answer = "Marley";
      break;
    case 42:
      answer = "The Answer";
      break;
    case 1:
      answer = "There is no #1";
      break;
    case 99:
      answer = "Missed me by this much!";
      break;
    case 7:
      answer = "Ate Nine";
      break;
  }	
  return answer;
}

chainToSwitch(7);


/* 3.	Переписати умовний оператор через тернарний
  let result = “”;
  if(5 > 3) {
    result = "a is greater";
  }
  else {
    result = "b is greater";
  } */

let result = (5 > 3) ? "a is greater" : "b is greater";
console.log(result);

/* 4.	Вивести в консоль через цикл цифри від  10 до 0 */

for (let i = 10; i >= 0; i--) {
  console.log(i);
}

/* 5.	Написати функцію яка приймає два параметри range(a, b) і виводить непарні числа від a до b. Зробити перевірку щоб b було більше a */

function range(a, b) {
  if(b > a) {
    for (let i = a; i <= b; i++) {
      if(i % 2 === 1) {
        console.log(i);
      }
    }
  } else {
    console.log('a больше b, b должно быть больше, чем a')
  }
  
}

range(2, 16);