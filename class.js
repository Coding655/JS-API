const products = [

    {No: 1, name: "lenovo",  price: 165000},
    {No: 2, name: "macBook", price: 150000},
    {No: 3, name: "dell",    price: 135000},
    {No: 4, name: "samsung", price: 185000},
    {No: 5, name: "hp",      price: 285000},
    

];

// /* Has Some properties method */

class product {
    country = 'Bangladesh';
    //this is a special function - given below:
    constructor(name, age, occupation ){
        // 'this'=> its a keyword to make some noise
        // name is a parameter of constructor function and its set with after this.name like     ( = name; );
        
        this.name = name; 
        this.age = age;
        this.occupation = occupation; 

    }

    speak(talk){
        console.log(`talking about: ${talk}`); //This line is directly connect with: 22 line [lenovo.speak()]

    };
};
const lenovo = new product('One Man Army', '22', 'Student'); //This line is connected with constructor function.what ever you write here it will take.

console.log(lenovo);
lenovo.speak('ECMA SCRIPT 6');

/* Example 0.1 */

class teacher {
    UniversityName = "Science imperial of  University ";
    constructor(name, age){
        this.name = name;
        this.age = age; 
    }
    
    lecture (science){
        console.log(`This lecture is covered by: ${science}`);

    }
}
const scienceClass = new teacher('Hacker', "1 day");
const commerceClass = new teacher('Rashid Khan', "36");
console.log(scienceClass,commerceClass);
scienceClass.lecture('A Bangladeshi');