var temp = 0;
var powerSaver = false;
var thermo = null;

function Thermo(){
}

function createThermo(){
    thermo = new Thermo();
    thermo.init();
}

function getTemp(){
    return thermo.temp;
}

function getPowerSaver(){
    return thermo.powerSaver;
}

Thermo.prototype.init = function() {
    thermo.temp = 20;
    thermo.powerSaver = true;
}

Thermo.prototype.increaseTemp = function() {
    if(thermo.powerSaver) {
        if(thermo.temp == 25) {
            alert("With power saver enabled, maximum temperature is 25 degrees. To increase, please disable power saver");
        }else{
            thermo.temp += 1;
            document.getElementById('thermo').innerHTML = "Temperature: " + getTemp() + " Degrees";
        }
    }else{
        if(thermo.temp == 32) {
            alert("Maximum temperature is 32 degrees.");
        }else{ 
            thermo.temp += 1;
            document.getElementById('thermo').innerHTML = "Temperature: " + getTemp() + " Degrees";
            
        }
    }
    getEnergyUsage();
}

Thermo.prototype.decreaseTemp = function() {
    if(thermo.temp == 10){
        alert("Minimum temperature is 10 degrees.");
    }else{
        thermo.temp -= 1;
        document.getElementById('thermo').innerHTML = "Temperature: " + getTemp() + " Degrees";
        getEnergyUsage();
    }
}

Thermo.prototype.togglePowerSaver = function() {
    if(thermo.powerSaver == false){
        thermo.powerSaver = true;
        if(thermo.temp > 25){
            thermo.temp = 25;
            document.getElementById('thermo').innerHTML = "Temperature: " + getTemp() + " Degrees";
            getEnergyUsage();
        }
    }else if(thermo.powerSaver == true){
        thermo.powerSaver = false;
    }
    document.getElementById('powSav').innerHTML = "Power Saver Status: " + getPowerSaver();
}

Thermo.prototype.resetTemp = function() {
    thermo.temp = 20;
    document.getElementById('thermo').innerHTML = "Temperature: " + getTemp() + " Degrees";
    getEnergyUsage();
}

function getEnergyUsage(){
    if(thermo.temp < 18) {
        document.getElementById('usage').innerHTML = "Current Power Usage: Low";
    } else if(thermo.temp < 25) {
        document.getElementById('usage').innerHTML = "Current Power Usage: Moderate";
    } else {
        document.getElementById('usage').innerHTML = "Current Power Usage: High";
    }
}