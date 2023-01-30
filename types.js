//boolean 
var flag = true;
console.log("Value assigned to flag is: " + flag);
//number
var num = 10;
console.log("Value assigned to num is: " + num);
//string
var colour = "blue";
console.log("Value assigned to colour is: " + colour);
//array
var list = [1, 2, 3];
for (var i = 0; i < list.length; i++) {
    console.log(list[i]);
}
//enum
var Colour;
(function (Colour) {
    Colour[Colour["Red"] = 0] = "Red";
    Colour[Colour["Green"] = 1] = "Green";
    Colour[Colour["Blue"] = 2] = "Blue";
})(Colour || (Colour = {}));
var c = Colour.Red;
console.log("Value assigned to c is: " + c);
