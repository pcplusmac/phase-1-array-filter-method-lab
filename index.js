// Code your solution here
// const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

// Define function 
function findMatching(drivers, name) {
    
    let newDrivers= drivers.filter(driverName => driverName.toUpperCase() === name.toUpperCase());


    return newDrivers; 
}

