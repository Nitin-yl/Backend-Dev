function checkstatus(orderId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof orderId === "number") {
        resolve("Order Shiped");
      } else {
        reject("wrong OrderId");
      }
    }, 1000);
  });
}

// using promises
checkstatus(123)
  .then((Response) => console.log(Response))
  .catch((err) => console.log(err));

checkstatus("456")
  .then((Response) => console.log(Response))
  .catch((err) => console.log(err));


// using async await  
async function runtest() {
  try {
    const message = await checkstatus(101);
    console.log(message);
  } catch (err) {
    console.log(err);
  }

  try {
    const message = await checkstatus("593");
    console.log(message);
  } catch (err) {
    console.log(err);
  }
}
runtest();
