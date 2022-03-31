// Coding Meetup #10 - Higher-Order Functions Series - Create usernames : https://www.codewars.com/kata/582a53ed261c2af9d200018c/train/javascript

function addUsername(list) {
    let users = list.map(user => {
    let firstname = user.firstName.toLowerCase();
    let lastname = user.lastName.toLowerCase().split('').splice(0,1).join('');
    let year = new Date().getFullYear()
    let age = year - user.age;
    let str = firstname + lastname + age
    user.username = str;
    })
    return list
    }

    