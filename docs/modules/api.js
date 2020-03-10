const fetch = require('node-fetch');

async function getData(){
    //const cors = 'https://cors-anywhere.herokuapp.com/';
    const api = 'https://api.darksky.net/forecast/';
    const key = '4607992d79c7de3829e5f5b67a062c8e';
    const lat = '52.379189';
    const long = '4.899431';
    const units = '?units=si';
    //const url = `${cors}${api}${key}/${lat},${long}${units}`;
    const url = `${api}${key}/${lat},${long}${units}`; 
    
    const data = await fetch(url)
        .then(function(response) {
            return response.json();
        })
        .then(function(results) {
            return results;
        })
        .then(function(results) {
            return results.hourly;
        })
        .then(function(results) { 
            return results.data;
        })
        .then(function(results) {
            return dataCleaningNames(results);
        })
        .then(function(results) {
            return filterArray(results);
        })
        .then(function(results) {
            return results;
        });
        return data;
};

function dataCleaningNames(results){
    return results.map(function(results) {
        return {
            time: convertTimestamp(results.time),
            summary: results.summary,
            weatherType: results.precipType,
            temperature: results.temperature,
            temperatureFeeling: results.apparentTemperature,
            wind: results.windSpeed,
            windGust: results.windGust,
            airpressure: results.pressure,
            visibility: results.visibility, 
            icon: results.icon,
        };
    });
};


function filterArray(results){
    const newValue =  results.filter(function(results, index) {       
        return index < 3;
    });
    return newValue;
};

function convertTimestamp(timeStamp){
    const timeString = new Date(timeStamp * 1000);
    const readableTime = timeString.toGMTString();
    const splitReadableTime = readableTime.split(' ');
    const lastWord = splitReadableTime.pop();
    const cleanTimeSting = splitReadableTime.join(' ');

    return cleanTimeSting;
};

module.exports = { getData }