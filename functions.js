function strLength(myString) {
    return myString.length;
}
var s = "test 1";
console.log(strLength(s));
function strLength2(myString) {
    return myString.replace(/\s/, "").length;
}
console.log(strLength2(s));
function strLength3(withSpaces, withoutSpaces) {
    if (withoutSpaces == true)
        return withSpaces.replace(" ", "").length;
    else
        return withSpaces.length;
}
console.log(strLength3(s));
console.log(strLength3(s, true));
