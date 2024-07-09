class Vehicle{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }
    move(){
        console.log('gari chole na chole na re')
    }
}

class Bus extends Vehicle{
    constructor(name, price, seat, ticketPrice){
        super(name, price);
        this.seat = seat;
        this.ticketPrice = ticketPrice;
    }
}

class Truck extends Vehicle{
    constructor(name, price, load){
        super(name, price);
        this.load = load;
    }
}

// const gari = new Vehicle('BMW', 'Physics')
// console.log(gari)

// const tapan = new Teacher('Tapon sir', 'Physics')
// console.log(tapan)

// const tapan = new Teacher('Tapon sir', 'Physics')
// console.log(tapan)
