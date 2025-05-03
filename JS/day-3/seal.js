let obj = {name:"ranjith",no:43,gender:"male"};
Object.seal(obj);
// obj.reg=4444; (we can not able to add)
// obj.no=444444; (we can able to modify)
console.log(obj);

