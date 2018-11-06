var temp = 0;
var powerSaver = false;
var thermo = null;

function Thermo(){
}

function getTemp(){
    return thermo.temp;
}

function createThermo(){
    thermo = new Thermo();
    thermo.init();
}
Thermo.prototype.init = function() {
    thermo.temp = 20;
}

Thermo.prototype.increaseTemp = function() {
    if(powerSaver) {
        if(thermo.temp == 25) {
            alert("With power saver enabled, maximum temperature is 25 degrees. To increase, please disable power saver");
        }else{
            thermo.temp += 1;
        }
    }else{
        if(thermo.temp == 32) {
            alert("Maximum temperature is 32 degrees.");
        }else{ 
            thermo.temp += 1;
        }
    }
}

Thermo.prototype.decreaseTemp = function() {
    if(thermo.temp == 10){
        alert("Minimum temperature is 10 degrees.");
    }else{
        thermo.temp -= 1;
    }
}

Thermo.prototype.togglePowerSaver = function() {
    if(powerSaver = false){
        powerSaver == true;
        if(thermo.temp > 25){
            thermo.temp = 25;
        }
    }else{
        powerSaver == false;
    }
}

Thermo.prototype.resetTemp = function() {
    thermo.temp = 20;
}

Thermo.prototype.getEnergyUsage = function(){
    if(thermo.temp < 18) {
        return 'L'
    } else if(thermo.temp < 25) {
        return 'M'
    } else {
        return 'H'
    }
}