function User(id, name, surname, age, isMale, email, isSubscribed) {
    this.id = id;
    this.firstName = name;
    this.lastName = surname;
    this.age = age;
    this.isMale = isMale;
    this.email = email;
    this.isSubscribed = isSubscribed;
  }
  
User.prototype = {
    getFullName(){
        return this.firstName + ' ' + this.lastName
    }
}
  const users = [];
  
  for (let i = 0; i < 10; i++) {
    const user = new User(
      i + 1,
      `Username${i}`,
      `Usersurname${i}`,
      14 + Math.floor(Math.random() * 80),
      Math.random() < 0.5,
      `useremail${i}@gmail.com`,
      Math.random() < 0.5
    );
    users.push(user);
  }

console.table(users);

// Отримати масив користувачів, які не підписані (not subscribed).
let notSubcribedUsers = users.filter(item => item.isSubscribed === false )
// console.table(notSubcribedUsers)

// Вивести список повних імен користувачів.
users.forEach(user => console.log(`${user.firstName} ${user.lastName}`))

// Отримати масив повних імен осіб жіночої статі шкільного віку (6 – 18 років).
femaleTeens = users.filter(user => user.isMale === false && 6 < user.age && user.age < 18)
// console.table(femaleTeens);

// Видалити з масиву користувача з email useremail5@gmail.com.
users.splice(users.findIndex(user => user.email === 'useremail5@gmail.com' ), 1)
// console.table(users);

// Змінити email користувачу з id 2 (можна спробувати використати find).
const userToUpdate = users.find(user => user.id === 2);
if (userToUpdate) {
    userToUpdate.email = 'hello.me@gmail.com';
}
console.table(users);
// *Визначити, який відсоток користувачів підписані (subscribed).
let SubcribedUsers = users.filter(item => item.isSubscribed === true )
percOfSubUsers = (SubcribedUsers.length*100/users.length).toFixed(2)
console.log(`Відсоток підписаних користувачів: ${percOfSubUsers}`)

// або
// console.log(`Відсоток підписаних користувачів: ${(SubcribedUsers.length*100/users.length).toFixed(2)}`)

// *Знайти середній вік користувачів (спробувати використати reduce).
let avgAge = users.reduce((acc, user) => acc + user.age, 0)/users.length
console.log(`Середній вік корситувачів: ${Math.round(avgAge)}`)

// *Впорядкувати користувачів за віком (sort).
users.sort((user, user2) => user.age - user2.age )
console.table(users);

// *Перевірити, чи є серед користувачів користувач з email`ом useremail7@gmail.com.
let findUser = users.some(user => user.email === 'useremail7@gmail.com' )
console.log(findUser)

// *Перевірити, чи всі користувачі підписані (subscribed).
let isAllSubcribed = users.every(user => user.isSubscribed === true )
console.log(isAllSubcribed)

