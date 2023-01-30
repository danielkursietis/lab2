function strLength(myString: string): number {
     return myString.length;
}

let s: string = "test 1";

console.log(strLength(s));

function strLength2(myString: string): number {
    return myString.replace(/\s/, "").length;
}

console.log(strLength2(s));

function strLength3(withSpaces: string, withoutSpaces?: boolean): number {
    if (withoutSpaces == true) return withSpaces.replace(" ", "").length;
    else return withSpaces.length;
}

console.log(strLength3(s));
console.log(strLength3(s, true));