// Code your solution in this file!
function logDriverNames(arr){
  arr.forEach(function(driver){
    console.log(driver.name)
  })
}

function logDriversByHometown(arr, loc){
  arr.filter(function(driver){
    return driver.hometown === loc
  }).forEach(function(driver){
    console.log(driver.name)
  })
}

function driversByRevenue(arr){
  newArr = arr.slice()
  newArr.sort(function(a,b){
    return a.revenue - b.revenue
  })
  return newArr
}

function driversByName(arr){
  newArr = arr.slice()
  newArr.sort(function(a,b){
    return a.name.localeCompare(b.name)
  })
  return newArr
}

function totalRevenue(arr){
  return arr.reduce(function(acc,cur){
    return acc + cur.revenue
  }, 0)
}

function averageRevenue(arr){
  return totalRevenue(arr) / arr.length
}
