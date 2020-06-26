const throwErr = (errorMessage, statusCode) => {
  const error = new Error(errorMessage);
  error.statusCode = statusCode;
  throw new Error(error);
};
try {
  //throwErr("erro1");
  throw new Error("erro1").statusCode(400);
} catch (error) {
  console.error(error);
}

console.log("hi");
