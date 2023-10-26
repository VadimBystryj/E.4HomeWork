class Device {
    constructor(name, power_active){
        this.name = name;
        this.power_active = power_active;
    }
    getStatus(){
        if(this.power_active) {
            return (`${this.name} Уже включен!`)
        } else {
            return (`${this.name} выключен!`)
        }
    }
}
class PC extends Device {
    constructor(name, power, electric, power_active) {
        super(name, power_active);
        this.power = power;
        this.electric = electric;
    }
    showPower(){
        console.log(`Мощность ${this.name} - ${this.power}W в час.`)
    }
}
class TV extends Device {
    constructor(name, power, electric, power_active) {
        super(name, power_active);
        this.power = power;
        this.electric = electric
    }
    showPower(){
        console.log(`Мощность ${this.name} - ${this.power}W в час.`)
    }
}

let allPowerConsump = function (){
    let sum = 0;
    for(let value of ElectricDevice){
        if(value.getStatus()){
            sum += value.power;
        } else {
            sum;
        }
    }
    return sum;
}


const myPC = new PC('PC', 850, true);
const myTV = new TV('TV', 150, true);
let ElectricDevice = [myPC, myTV];
console.log(`Мощность всех электроприборов равна ${allPowerConsump(ElectricDevice)}W в час!`);
myPC.showPower();
console.log(myTV.getStatus());