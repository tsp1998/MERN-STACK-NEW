const fun = (callback) => {
  callback();
  return () => {
    console.log("This is another Callback Function")
  }
}

fun(()=>{
  console.log("This is Callback Function")
})
