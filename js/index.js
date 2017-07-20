
// var listitems = document.getElementByid("shoppinglist").getElementByTagName("li")

// for(i=0; i < listitems.length; i++) {
//   listitems.addEventlistener("click,activateItem")
// }

pbbutton.addEventlistener("click",addItemToArray);

function addItemToArray(){
var str = document.getElementByid("shoppinglist").getElementByTagName("li")
var res = str.split(",");
  console.log(res)
}