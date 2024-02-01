// data access

const data = [
    {
    id: 5001,
    name: 'abul khayer',
    address: 'bahubali road '
    },

    {
        phone: "01751083562",
        email: 'abulkhair@gmail.com',
        religion: 'muslim',
        serial: 741,
    },
];

// console.log(data[1].phone, data[1].email)


/* Another 0*/
// Question No-1: find the second object name / price 
const products = {
   
    count: 5000,
    data: [
        {id: 1, name: "lenovo laptop", price: 65000,},    //No.1
        {id: 2, name: "macBook", price: 165000,},         //No.2
        {id: 3, name: "samsung", price: 125000,}          //No.3
       
    ]
}

// Answer: 
        // console.log(products.data[1].name);



// Another 1:
//Questions: find the address/ street/ fourth.
const user = {
    id: 20001,
    name: "korim molla",
    address: {
        city: "Dhaka",
        street:{
            first: "kashim pur",
            second: "lal bag",
            third: "hakim pur",
            fourth: "molla para",
        },

        
    },
};
//Answer:
// console.log(user.address.street.fourth);


//Another 2:
//Questions: find the user2,id,address.
const user2 = [
    {
        id: 50002,
        name: "pori didir mazar",
        address: {
            city: "dinajpur",
            country: "bangladesh",
            
        },
        
        
    },
    
];
//Answer:
// console.log(user2[0].address.city)