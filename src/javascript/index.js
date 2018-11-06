var temp = null;
var powerSaver = false;

Thermo.prototype.init = function() {
    temp = 20;
}

Thermo.prototype.increaseTemp = function() {
    if(powerSaver) {
        if(temp == 25) {
            alert("With power saver enabled, maximum temperature is 25 degrees. To increase, please disable power saver");
        }else{
            temp += 1;
        }
    }else{
        if(temp == 32) {
            alert("Maximum temperature is 32 degrees.");
        }else{ 
            temp += 1;
        }
    }
}

Thermo.prototype.decreaseTemp = function() {
    if(temp == 10){
        alert("Minimum temperature is 10 degrees.");
    }else{
        temp -= 1;
    }
}

Thermo.prototype.togglePowerSaver = function() {
    if(powerSaver = false){
        powerSaver == true;
        if(temp > 25){
            temp = 25;
        }
    }else{
        powerSaver == false;
    }
}

Thernmo.prototype.resetTemp = function() {
    temp = 20;
}

Thermo.prototype.getEnergyUsage = function(){
    if(temp < 18) {
        return 'L'
    } else if(temp < 25) {
        return 'M'
    } else {
        return 'H'
    }
}