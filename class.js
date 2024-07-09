const products = [
    {id: 1, name: 'lenovo', price: 65000},
    {id: 2, name: 'dell', price: 45000},
    {id: 3, name: 'hp', price: 40000},
    {id: 4, name: 'mac', price: 165000},
]

//has some properties, method
class product{
    country = 'Bangladesh';
    constructor(name){
        this.name = name;
    }
    speak(talk){
        console.log(`talking about ${talk}`)
    }
}

const lenovo = new product('lenovo')
// console.log(lenovo)
// lenovo.speak('oba kita kow')

class Teacher{
    constructor(name, subject){
        this.name = name;
        this.subject = subject;
    }
    lecture(){
        console.log('Sir is teaching Math')
    }
}

const tapan = new Teacher('Tapon sir', 'Physics')
console.log(tapan)

const rashid = new Teacher('Rashid', 'English')