// Code your solution in this file!
function distanceFromHqInBlocks(address) {
    return Math.abs(42-address)
}

function distanceFromHqInFeet(address) {
    return distanceFromHqInBlocks(address) * 264
}

function distanceTravelledInFeet (start, destination) {
    return Math.abs(start-destination)*264
}

function calculatesFarePrice (start, destination) {
    if (distanceTravelledInFeet(start, destination) <= 400) {
        return 0
    }
    else if (distanceTravelledInFeet(start, destination) <= 2000) {
        return (distanceTravelledInFeet(start, destination) - 400) * .02
    }
    else if (distanceTravelledInFeet(start, destination) <= 2500) {
        return 25
    }
    else {
        return "cannot travel that far"
    }
}