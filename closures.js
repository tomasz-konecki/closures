var plane = (function(defaultAirport) {
  var lastAirportLeft = defaultAirport;

  var car = {
    driver: {
      startAccessPlaneInfo: function() {
        setInterval(function() {
          console.log("Last airport was " + lastAirportLeft);
        }, 2000);
      }
    }
  };
  car.driver.startAccessPlaneInfo();

  return {
    leaveTheAirport: function(airPortName) {
      lastAirportLeft = airPortName;
    }
  };
})("Boryspil International Airport");

// plane.leaveTheAirport("John F. Kennedy");
