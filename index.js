// Code your solution here
// const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

// Define function 
function findMatching(drivers, name) {
    
    let newDrivers= drivers.filter(driverName => driverName.toUpperCase() === name.toUpperCase());


    return newDrivers; 
}

// Define function to find the drivers with specific names
function fuzzyMatch(drivers, letter) {
    
    // let driverNew = []
    let driver = (drivers.filter(driverName => driverName.substring(0,1) === letter
    ));
    // if (driver) {
    //     driverNew = Object.assign({},driver)
    // }
    return driver;
    // if (driver) {
    //     newDrivers.push(driver);
    //     return driverName;
    // }
     
}

function matchName (arr, str) {
    let op = arr.filter (driver => driver.name === str)
    for (let dr of op) {
        return dr
    }
}