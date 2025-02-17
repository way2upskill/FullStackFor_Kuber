// const add = require('./math');
// const mul=require('./math');
const{add,mul,div,sub}=require('./math');
// module.exports is a single object or value 
// When you reassign module.exports(e.g. module.exports=add), it completely replaces // was previously assigned
// If you reassing it again (module.exports=mul;), the previous value(add)is replaced with mult.
console.log(add(20,3));
console.log(sub(20,3));
console.log(div(20,3));
console.log(mul(2,3));