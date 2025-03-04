app.factory('FlightsSrv', function () {
     return {
         getFlights : function() {
           var flights = [
    {
        "flightNumber": { "type": "International","unique": "Ae345" },
        "aircraft": "AirBus",
        "capacity": 707,
        "date": "2015-06-26",
        "duration": "2:00",
        "originIata": "CAI",
        "originCity": "Cairo",
        "destinationIata": "JFK",
        "destinationCity":"NewYork",
        "seatMap": [{"reserved": true,"seatWindow":true,"aisle":true,"cost":"230.4","cabin": "1","reservationID":"321efr434"}],
        "url":"",
        "size": "medium"
    },
    {
        "flightNumber": { "type": "International","unique": "4LugW" },
        "aircraft": "AirBus",
        "capacity": 707,
        "date": "2016-07-03",
        "duration": "2:00",
        "originIata": "CAI",
        "originCity": "Cairo",
        "destinationIata": "JFK",
        "destinationCity":"NewYork",
        "seatMap": [{"reserved": true,"seatWindow":true,"aisle":true,"cost":"230.4","cabin": "1","reservationID":"321efr434"}],
        "url":"",
        "size": "medium"
    },
    {
        "flightNumber": { "type": "International","unique": "rT67I" },
        "aircraft": "AirBus",
        "capacity": 707,
        "date": "2016-08-03",
        "duration": "2:00",
        "originIata": "CAI",
        "originCity": "Cairo",
        "destinationIata": "JFK",
        "destinationCity":"NewYork",
        "seatMap": [{"reserved": true,"seatWindow":true,"aisle":true,"cost":"230.4","cabin": "1","reservationID":"321efr434"}],
        "url":"",
        "size": "medium"
    },
    {
        "flightNumber": { "type": "International","unique": "Egji8" },
        "aircraft": "AirBus",
        "capacity": 707,
        "date": "2016-09-03",
        "duration": "2:00",
        "originIata": "CAI",
        "originCity": "Cairo",
        "destinationIata": "JFK",
        "destinationCity":"NewYork",
        "seatMap": [{"reserved": true,"seatWindow":true,"aisle":true,"cost":"230.4","cabin": "1","reservationID":"321efr434"}],
        "url":"",
        "size": "medium"
    },
    {
        "flightNumber": { "type": "International","unique": "E3E3r" },
        "aircraft": "AirBus",
        "capacity": 707,
        "date": "2016-10-03",
        "duration": "2:00",
        "originIata": "CAI",
        "originCity": "Cairo",
        "destinationIata": "JFK",
        "destinationCity":"NewYork",
        "seatMap": [{"reserved": true,"seatWindow":true,"aisle":true,"cost":"230.4","cabin": "1","reservationID":"321efr434"}],
        "url":"",
        "size": "medium"
    },
    {
        "flightNumber": { "type": "International","unique": "t4512" },
        "aircraft": "AirBus",
        "capacity": 707,
        "date": "2016-10-04",
        "duration": "2:00",
        "originIata": "CAI",
        "originCity": "Cairo",
        "destinationIata": "JFK",
        "destinationCity":"NewYork",
        "seatMap": [{"reserved": true,"seatWindow":true,"aisle":true,"cost":"230.4","cabin": "1","reservationID":"321efr434"}],
        "url":"",
        "size": "medium"
    },
    {
        "flightNumber": { "type": "International","unique": "Ae346" },
        "aircraft": "AirBus",
        "capacity": 707,
        "date": "2016-10-05",
        "duration": "2:00",
        "originIata": "CAI",
        "originCity": "Cairo",
        "destinationIata": "JFK",
        "destinationCity":"NewYork",
        "seatMap": [{"reserved": true,"seatWindow":true,"aisle":true,"cost":"230.4","cabin": "1","reservationID":"321efr434"}],
        "url":"",
        "size": "medium"
    },
    {
        "flightNumber": { "type": "International","unique": "gTol1" },
        "aircraft": "AirBus",
        "capacity": 707,
        "date": "2016-10-06",
        "duration": "2:00",
        "originIata": "CAI",
        "originCity": "Cairo",
        "destinationIata": "JFK",
        "destinationCity":"NewYork",
        "seatMap": [{"reserved": true,"seatWindow":true,"aisle":true,"cost":"230.4","cabin": "1","reservationID":"321efr434"}],
        "url":"",
        "size": "medium"
    },
    {
        "flightNumber": { "type": "International","unique": "f3rtT" },
        "aircraft": "AirBus",
        "capacity": 707,
        "date": "2016-10-07",
        "duration": "2:00",
        "originIata": "CAI",
        "originCity": "Cairo",
        "destinationIata": "JFK",
        "destinationCity":"NewYork",
        "seatMap": [{"reserved": true,"seatWindow":true,"aisle":true,"cost":"230.4","cabin": "1","reservationID":"321efr434"}],
        "url":"",
        "size": "medium"
    },
    {
        "flightNumber": { "type": "International","unique": "ZXC34" },
        "aircraft": "AirBus",
        "capacity": 707,
        "date": "2016-10-08",
        "duration": "2:00",
        "originIata": "CAI",
        "originCity": "Cairo",
        "destinationIata": "JFK",
        "destinationCity":"NewYork",
        "seatMap": [{"reserved": true,"seatWindow":true,"aisle":true,"cost":"230.4","cabin": "1","reservationID":"321efr434"}],
        "url":"",
        "size": "medium"
    },
    {
        "flightNumber": { "type": "International","unique": "DE321" },
        "aircraft": "AirBus",
        "capacity": 707,
        "date": "2016-10-09",
        "duration": "2:00",
        "originIata": "CAI",
        "originCity": "Cairo",
        "destinationIata": "JFK",
        "destinationCity":"NewYork",
        "seatMap": [{"reserved": true,"seatWindow":true,"aisle":true,"cost":"230.4","cabin": "1","reservationID":"321efr434"}],
        "url":"",
        "size": "medium"
    },
    {
        "flightNumber": { "type": "International","unique": "freaq" },
        "aircraft": "AirBus",
        "capacity": 707,
        "date": "2016-06-26",
        "duration": "2:00",
        "originIata": "CAI",
        "originCity": "Cairo",

        "destinationIata": "BEU",

        "destinationIata": "BEY",

        "destinationCity":"Beirut",
        "seatMap": [{"reserved": true,"seatWindow":true,"aisle":true,"cost":"230.4","cabin": "1","reservationID":"321efr434"}],
        "url":"",
        "size": "medium"
    },
    {
        "flightNumber": { "type": "International","unique": "FLuv2" },
        "aircraft": "AirBus",
        "capacity": 707,
        "date": "2016-06-26",
        "duration": "2:00",
        "originIata": "CAI",
        "originCity": "Cairo",

        "destinationIata": "YKS",

        "destinationIata": "HND",

        "destinationCity":"Tokyo",
        "seatMap": [{"reserved": true,"seatWindow":true,"aisle":true,"cost":"230.4","cabin": "1","reservationID":"321efr434"}],
        "url":"",
        "size": "medium"
    },
    {
        "flightNumber": { "type": "International","unique": "Cer32" },
        "aircraft": "AirBus",
        "capacity": 707,
        "date": "2017-06-26",
        "duration": "2:00",
        "originIata": "CAI",
        "originCity": "Cairo",

        "destinationIata": "CHR",

        "destinationIata": "CDG",

        "destinationCity":"Paris",
        "seatMap": [{"reserved": true,"seatWindow":true,"aisle":true,"cost":"230.4","cabin": "1","reservationID":"321efr434"}],
        "url":"",
        "size": "medium"
    },
    {
        "flightNumber": { "type": "National","unique": true },
        "aircraft": "AirBus",
        "capacity": 707,
        "date": "2017-06-26",
        "duration": "2:00",
        "originIata": "CAI",
        "originCity": "Cairo",

        "destinationIata": "SHK",

        "destinationIata": "SSH",

        "destinationCity":"SharmELSheikh",
        "seatMap": [{"reserved": true,"seatWindow":true,"aisle":true,"cost":"230.4","cabin": "1","reservationID":"321efr434"}],
        "url":"",
        "size": "medium"
    },
    {
        "flightNumber": { "type": "International","unique": "Xze12" },
        "aircraft": "AirBus",
        "capacity": 707,
        "date": "2016-06-27",
        "duration": "2:00",
        "originIata": "CAI",
        "originCity": "Cairo",

        "destinationIata": "LDN",

        "destinationIata": "LHR",

        "destinationCity":"London",
        "seatMap": [{"reserved": true,"seatWindow":true,"aisle":true,"cost":"230.4","cabin": "1","reservationID":"321efr434"}],
        "url":"",
        "size": "medium"

    
    

    },
    {
        "flightNumber": { "type": "National","unique": true },
        "aircraft": "AirBus",
        "capacity": 707,
        "date": "2017-06-26",
        "duration": "2:00",
        "originIata": "CAI",
        "originCity": "Cairo",
        "destinationIata": "SSH",
        "destinationCity":"SharmELSheikh",
        "seatMap": [{"reserved": true,"seatWindow":true,"aisle":true,"cost":"230.4","cabin": "1","reservationID":"321efr434"}],
        "url":"",
        "size": "medium"
    },
    {
        "flightNumber": { "type": "International","unique": true },
        "aircraft": "AirBus",
        "capacity": 707,
        "date": "2017-10-02",
        "duration": "2:00",
        "originIata": "CAI",
        "originCity": "Cairo",
        "destinationIata": "LYN",
        "destinationCity":"Lyon",
        "seatMap": [{"reserved": true,"seatWindow":true,"aisle":true,"cost":"230.4","cabin": "1","reservationID":"321efr434"}],
        "url":"",
        "size": "medium"
    },
    {
        "flightNumber": { "type": "National","unique": true },
        "aircraft": "AirBus",
        "capacity": 707,
        "date": "2016-06-27",
        "duration": "2:00",
        "originIata": "CAI",
        "originCity": "Cairo",
        "destinationIata": "SSH",
        "destinationCity":"SharmELSheikh",
        "seatMap": [{"reserved": true,"seatWindow":true,"aisle":true,"cost":"230.4","cabin": "1","reservationID":"321efr434"}],
        "url":"",
        "size": "medium"
    },
    
    {
        "flightNumber": { "type": "National","unique": true },
        "aircraft": "AirBus",
        "capacity": 707,
        "date": "2016-06-30",
        "duration": "2:00",
        "originIata": "CAI",
        "originCity": "Cairo",
        "destinationIata": "SSH",
        "destinationCity":"SharmELSheikh",
        "seatMap": [{"reserved": true,"seatWindow":true,"aisle":true,"cost":"230.4","cabin": "1","reservationID":"321efr434"}],
        "url":"",
        "size": "medium"
    },
    {
        "flightNumber": { "type": "International","unique": true },
        "aircraft": "AirBus",
        "capacity": 707,
        "date": "2017-03-26",
        "duration": "2:00",
        "originIata": "CAI",
        "originCity": "Cairo",
        "destinationIata": "THF",
        "destinationCity":"Berlin",
        "seatMap": [{"reserved": true,"seatWindow":true,"aisle":true,"cost":"230.4","cabin": "1","reservationID":"321efr434"}],
        "url":"",
        "size": "medium"
    },
    
    {
        "flightNumber": { "type": "International","unique": true },
        "aircraft": "AirBus",
        "capacity": 707,
        "date": "2016-05-05",
        "duration": "2:00",
        "originIata": "CAI",
        "originCity": "Cairo",
        "destinationIata": "BCN",
        "destinationCity":"Barcelona",
        "seatMap": [{"reserved": true,"seatWindow":true,"aisle":true,"cost":"230.4","cabin": "1","reservationID":"321efr434"}],
        "url":"",
        "size": "Large"
    },
    
    {
        "flightNumber": { "type": "Internaional","unique": true },
        "aircraft": "AirBus",
        "capacity": 707,
        "date": "2016-04-09",
        "duration": "2:00",
        "originIata": "CAI",
        "originCity": "Cairo",
        "destinationIata": "HND",
        "destinationCity":"Tokyo",
        "seatMap": [{"reserved": true,"seatWindow":true,"aisle":true,"cost":"230.4","cabin": "1","reservationID":"321efr434"}],
        "url":"",
        "size": "medium"
    },
    
    {
        "flightNumber": { "type": "Internaional","unique": true },
        "aircraft": "AirBus",
        "capacity": 707,
        "date": "2016-04-30",
        "duration": "2:00",
        "originIata": "CAI",
        "originCity": "Cairo",
        "destinationIata": "VIE",
        "destinationCity":"Vienna",
        "seatMap": [{"reserved": true,"seatWindow":true,"aisle":true,"cost":"230.4","cabin": "1","reservationID":"321efr434"}],
        "url":"",
        "size": "medium"
    },
    
    {
        "flightNumber": { "type": "Internaional","unique": true },
        "aircraft": "AirBus",
        "capacity": 707,
        "date": "2016-06-18",
        "duration": "2:00",
        "originIata": "CAI",
        "originCity": "Cairo",
        "destinationIata": "PEK",
        "destinationCity":"Beijing",
        "seatMap": [{"reserved": true,"seatWindow":true,"aisle":true,"cost":"230.4","cabin": "1","reservationID":"321efr434"}],
        "url":"",
        "size": "medium"
    },
    {
        "flightNumber": { "type": "Internaional","unique": true },
        "aircraft": "AirBus",
        "capacity": 707,
        "date": "2016-06-21",
        "duration": "2:00",
        "originIata": "CAI",
        "originCity": "Cairo",
        "destinationIata": "TIP",
        "destinationCity":"Tripoli",
        "seatMap": [{"reserved": true,"seatWindow":true,"aisle":true,"cost":"230.4","cabin": "1","reservationID":"321efr434"}],
        "url":"",
        "size": "medium"
    },
    {
        "flightNumber": { "type": "Internaional","unique": true },
        "aircraft": "AirBus",
        "capacity": 707,
        "date": "2017-06-26",
        "duration": "2:00",
        "originIata": "CAI",
        "originCity": "Cairo",
        "destinationIata": "AHN",
        "destinationCity":"Athens",
        "seatMap": [{"reserved": true,"seatWindow":true,"aisle":true,"cost":"230.4","cabin": "1","reservationID":"321efr434"}],
        "url":"",
        "size": "medium"
    },
    {
        "flightNumber": { "type": "Internaional","unique": true },
        "aircraft": "AirBus",
        "capacity": 707,
        "date": "2017-06-26",
        "duration": "2:00",
        "originIata": "CAI",
        "originCity": "Cairo",
        "destinationIata": "JTR",
        "destinationCity":"Santorini",
        "seatMap": [{"reserved": true,"seatWindow":true,"aisle":true,"cost":"230.4","cabin": "1","reservationID":"321efr434"}],
        "url":"",
        "size": "medium"
    },
    {
        "flightNumber": { "type": "Internaional","unique": true },
        "aircraft": "AirBus",
        "capacity": 707,
        "date": "2017-06-26",
        "duration": "2:00",
        "originIata": "CAI",
        "originCity": "Cairo",
        "destinationIata": "PRG",
        "destinationCity":"Prague",
        "seatMap": [{"reserved": true,"seatWindow":true,"aisle":true,"cost":"230.4","cabin": "1","reservationID":"321efr434"}],
        "url":"",
        "size": "medium"
    },
    {
        "flightNumber": { "type": "Internaional","unique": true },
        "aircraft": "AirBus",
        "capacity": 707,
        "date": "2017-06-26",
        "duration": "2:00",
        "originIata": "CAI",
        "originCity": "Cairo",
        "destinationIata": "YQY",
        "destinationCity":"Sydney",
        "seatMap": [{"reserved": true,"seatWindow":true,"aisle":true,"cost":"230.4","cabin": "1","reservationID":"321efr434"}],
        "url":"",
        "size": "medium"
    },
    {
        "flightNumber": { "type": "Internaional","unique": true },
        "aircraft": "AirBus",
        "capacity": 707,
        "date": "2016-07-13",
        "duration": "2:00",
        "originIata": "CAI",
        "originCity": "Cairo",
        "destinationIata": "YQY",
        "destinationCity":"Sydney",
        "seatMap": [{"reserved": true,"seatWindow":true,"aisle":true,"cost":"230.4","cabin": "1","reservationID":"321efr434"}],
        "url":"",
        "size": "medium"
    },
    {
        "flightNumber": { "type": "Internaional","unique": true },
        "aircraft": "AirBus",
        "capacity": 707,
        "date": "2017-06-25",
        "duration": "2:00",
        "originIata": "CAI",
        "originCity": "Cairo",
        "destinationIata": "YQY",
        "destinationCity":"Sydney",
        "seatMap": [{"reserved": true,"seatWindow":true,"aisle":true,"cost":"230.4","cabin": "1","reservationID":"321efr434"}],
        "url":"",
        "size": "medium"
    },
    {
        "flightNumber": { "type": "Internaional","unique": true },
        "aircraft": "AirBus",
        "capacity": 707,
        "date": "2017-06-24",
        "duration": "2:00",
        "originIata": "CAI",
        "originCity": "Cairo",
        "destinationIata": "YQY",
        "destinationCity":"Sydney",
        "seatMap": [{"reserved": true,"seatWindow":true,"aisle":true,"cost":"230.4","cabin": "1","reservationID":"321efr434"}],
        "url":"",
        "size": "medium"
    },
    
    {
        "flightNumber": { "type": "Internaional","unique": true },
        "aircraft": "AirBus",
        "capacity": 707,
        "date": "2017-06-12",
        "duration": "2:00",
        "originIata": "CAI",
        "originCity": "Cairo",
        "destinationIata": "DEL",
        "destinationCity":"New Delhi",
        "seatMap": [{"reserved": true,"seatWindow":true,"aisle":true,"cost":"230.4","cabin": "1","reservationID":"321efr434"}],
        "url":"",
        "size": "medium"
    },
    {
        "flightNumber": { "type": "Internaional","unique": true },
        "aircraft": "AirBus",
        "capacity": 707,
        "date": "2016-06-27",
        "duration": "2:00",
        "originIata": "PUW",
        "originCity": "Moscow",
        "destinationIata": "CAI",
        "destinationCity":"Cairo",
        "seatMap": [{"reserved": true,"seatWindow":true,"aisle":true,"cost":"230.4","cabin": "1","reservationID":"321efr434"}],
        "url":"",
        "size": "medium"
    },
    {
        "flightNumber": { "type": "Internaional","unique": true },
        "aircraft": "AirBus",
        "capacity": 707,
        "date": "2016-06-21",
        "duration": "2:00",
        "originIata": "CAI",
        "originCity": "Cairo",
        "destinationIata": "PUW",
        "destinationCity":"Moscow",
        "seatMap": [{"reserved": true,"seatWindow":true,"aisle":true,"cost":"230.4","cabin": "1","reservationID":"321efr434"}],
        "url":"",
        "size": "medium"
    },
    {
        "flightNumber": { "type": "Internaional","unique": true },
        "aircraft": "AirBus",
        "capacity": 707,
        "date": "2016-06-21",
        "duration": "2:00",
        "originIata": "CAI",
        "originCity": "Cairo",
        "destinationIata": "SOF",
        "destinationCity":"Sofia",
        "seatMap": [{"reserved": true,"seatWindow":true,"aisle":true,"cost":"230.4","cabin": "1","reservationID":"321efr434"}],
        "url":"",
        "size": "medium"
    },
    {
        "flightNumber": { "type": "Internaional","unique": true },
        "aircraft": "AirBus",
        "capacity": 707,
        "date": "2017-07-26",
        "duration": "2:00",
        "originIata": "CAI",
        "originCity": "Cairo",
        "destinationIata": "BRU",
        "destinationCity":"Brussels",
        "seatMap": [{"reserved": true,"seatWindow":true,"aisle":true,"cost":"230.4","cabin": "1","reservationID":"321efr434"}],
        "url":"",
        "size": "medium"
    }

    
];
   return flights;
         }
     };
 });
