const myPromise = new Promise((resolve, reject) => {
  const success = true;

  const user = {
    id: 1,
    name: "Nitin Goyal",
    role: "Developer", //PROMIS1
    isActive: true,
  };

  if (success) {
    resolve(user);
  } else {
    reject("Failed to load user ");
  }
});

myPromise
  .then((user) => {
    console.log("User loaded:", user);
    console.log(user.name);
  })
  .catch((error) => {
    console.error(error);
  });

const myPromise1 = new Promise((resolve, reject) => {
  const success1 = true;

  const user1 = {
    id: "10",
    name: "Nitin",
    rollno: "2315001507",
  }; //PROMIS2

  if (success1) {
    resolve(user1);
  } else {
    reject("user not found");
  }
});

myPromise1
  .then((user1) => {
    console.log(user1.name);
    console.log(user1.rollno);
  })
  .catch((e) => {
    console.log(e);
  });

const fetchuser = new Promise((resolve, reject) => {
  const success = true;

  const userDAta = {
    id: 101,
    name: "Nitin Goyal",
    username: "NG",
    email: "nitingpyal@projectui.dev",
    role: "FullStack Developer",
    isVerified: true,
    isActive: true,
    createdAt: "2026-01-08T10:30:00Z", //PROMIS3 with the setTimeOut
  };
  setTimeout(() => {
    if (success) {
      resolve(userDAta);
    } else {
      reject("Invalid user or user not found");
    }
  }, 2000);
});

fetchuser
  .then((userDAta) => {
    console.log(userDAta);
  })
  .catch((e) => {
    console.log(e);
  });
