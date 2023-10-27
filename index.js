


function findMatching(drivers, name) {
    
    let newDrivers= drivers.filter(driverName => driverName.toUpperCase() === name.toUpperCase());


    return newDrivers; 
}


function fuzzyMatch(drivers, letters) {
    
   
    let driver = (drivers.filter(driverName => driverName.substring(0,letters.length) === letters
    ));
    
    return driver;
   
}

function matchName (drivers, name) {
    let matchingDrivers = drivers.filter (driver => driver.name === name)
    return matchingDrivers
}