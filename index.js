// return class {
//   constructor() {

//   }
function createDriver() {
  driverId = 0;
  return class  {
    constructor(name) {
      this.name = name;
      this.id = ++driverId
    }
  };
}
  const produceDrivingRange = function (range) {
    return function (a, b) {
      let drivingFrom = parseInt(a.replace("th", ''))
      let drivingTo = parseInt(b.replace("th", ''))
      let trip = Math.abs(drivingFrom - drivingTo) ;
      return (trip < range ?
         `within range by ${range - trip }`: `${trip - range } blocks out of range`
       );
    }
  }
  const produceTipCalculator = function(percent) {
    return function(total) {
      return percent * total;
    };
  }
