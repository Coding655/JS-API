const products = {
    count: 5000,
    data: [
        {id: 1, name:'lenovo laptop', price: 65000},
        {id:2, name:'MacBook', price:165000},
    ]
}
// console.log(products.data[1].name);
//another
const user = {
    id: 5014,
    name:'Shoriful raj',
    address:{
        street:{

            first: '54/A bonani',
            second:'phulbari dinajpur',
            third: 'No dorai'
        },
        city: 'Dhaka',
    }
}

const a = 56;
const text = 'My name is';
const text2 = 'and i also';
const numbers = [45,8,78];
const person = {
    name: 'Imran Sirajee'
};
const massage = `Hi, ${text} ${person.name} ${text2}  has a: ${a} access to ${numbers[2]}`
console.log(massage);