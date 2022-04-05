// Coding Meetup #11 - Higher-Order Functions Series - Find the average age : "https://www.codewars.com/kata/582ba36cc1901399a70005fc/train/javascript"

const getAverageAge = list => Math.round(list.map(person => person.age).reduce((a,b) => a + b)/list.length)

//Tests

var list1 = [
    { firstName: 'Maria', lastName: 'Y.', country: 'Cyprus', continent: 'Europe', age: 30, language: 'Java' },
    { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 70, language: 'Python' },
  ];
  
  Test.assertEquals(getAverageAge(list1), 50);
  
  
  var list2 = [
    { firstName: 'Noa', lastName: 'A.', country: 'Israel', continent: 'Asia', age: 20, language: 'Ruby' },
    { firstName: 'Andrei', lastName: 'E.', country: 'Romania', continent: 'Europe', age: 21, language: 'C' },
  ];