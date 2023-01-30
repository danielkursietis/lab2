//boolean 
let flag: boolean = true;
console.log("Value assigned to flag is: "+flag);

//number
let num: number = 10;
console.log("Value assigned to num is: "+num);

//string
let colour: string = "blue";
console.log("Value assigned to colour is: "+colour);

//array
let list: number[] = [1, 2, 3];
for (let i: number = 0; i < list.length; i++){
    console.log(list[i]);
}

//enum
enum Colour{
    Red,
    Green,
    Blue,
}
let c: Colour = Colour.Red;
console.log("Value assigned to c is: "+c);
