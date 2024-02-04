class vehicle {
    constructor(name, price){
        this.name = name;
        this.price = price;

    }
    move (){
        console.log('gari chole nah')
    }
}
//extend is an attribute and its call the upper class  items 
//super is a attribute that contain previous class parameter
//class is a template  for making object .sometimes its called by blue print
class Bus extends vehicle{
    constructor(name,price,seat,ticketPrice){
        super(name, price);
        this.seat = seat;
        this.ticketPrice = ticketPrice;
    }

}