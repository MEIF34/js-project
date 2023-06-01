function Cat(name, color, breed, age) {
    this.name = name;
    this.color = color;
    this.breed = breed;
    this.age = age;
    this.run = function() {
        return this.name + ' is running';
    }
}

const cat1 = new Cat('Meif', 'black', 'Mei-Kun', 3);
const cat2 = new Cat('Roxy', 'pink', 'sexy', 3);
const cat3 = new Cat('Debik', 'blue', 'gay');