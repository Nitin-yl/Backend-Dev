const user = {
  name: "Nitn Goyal", email: "nitingoyal@gmail.com", phone: "7896541235",
  social: {
    fb: "https://facebook.com",
    instagram: "https://instagram.com"
  }
}
const { name, email, phone, social } = user;
const updateUser = { ...user, address: "New Dehli" }
const user1 = user;
user1.name = "Nitin"
const { password, ...publicData } = user;
console.log("publicData", publicData);

console.log(user.name);

const numbers = [1, 2, 3, 4, 5];

const newNumbers = numbers.map((number) => number * 2)
console.log(newNumbers)


const sumOfNumbers = numbers.reduce((sum, number) => {
  console.log(number);
  return sum + number;
}, 0);