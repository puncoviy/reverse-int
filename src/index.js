module.exports = function reverse (n) {
    let newString =  Math.abs(n).toString();
    return newString.split("").reverse().join("");
}
