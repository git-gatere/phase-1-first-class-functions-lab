const returnFirstTwoDrivers = function (array) {
    return array.slice(0,2)
}

const returnLastTwoDrivers = function (array) {
    return array.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function (factor) {
    return function farerun (fare) { 
        return fare*factor
    }

}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = function (drivers, fun) {
    return fun(drivers)
}