function Person(firstName,lastNAme,dob){
    this.firstName = firstName;
    this.lastName = lastNAme;
    this.dob = new Date(dob);
    this.getBirthYear = function(){
        return this.dob.getFullYear();
    }


}

let person1 = new Person("krishna","varik","06-24-1999");
let person2 = new Person("akash","athnure","07-25-1997");


console.log(person1.getBirthYear());
console.log(person2.lastName);