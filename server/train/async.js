function hello() {
  return setTimeout(() => {
    return "hello";
  }, 5000);
}

const myFun = async () => {
  const msg1 = await hello();
  console.log(msg1);
};

myFun();
