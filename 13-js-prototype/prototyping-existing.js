String.prototype.duplicate = function () {
    return `${this}${this}`
}

console.log(`teste`.duplicate())
console.log(`teste`.duplicate().duplicate())