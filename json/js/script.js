const car = {
    name: 'bmt',
    color: 'red',
    extra: {
        isAirbags: false,
        isBalloon: 5
    }
}

const clone = JSON.parse(JSON.stringify(car))
console.log(clone)

clone.extra.isBalloon = 10

console.log(clone)
console.log(car)

// const objToJson = JSON.stringify(car);
// const jsonToObject = JSON.parse(objToJson)
// console.log(objToJson)
// console.log(jsonToObject)