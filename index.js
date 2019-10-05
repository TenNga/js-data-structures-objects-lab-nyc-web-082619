const driver = {}
function updateDriverWithKeyAndValue(driver,key,value) {
  const newDriver = Object.assign({},driver,{[key]:value});
  return newDriver;
}