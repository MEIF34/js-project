function Country(name, population, areaSize) {
    this.name = name;
    this.population = population;
    this.areaSize = areaSize;

    this.calcPopulationDensity = function() {
        const populationDensity = this.population / this.areaSize;
        return Number(populationDensity.toFixed(2));
    }
}

const country1 = new Country('Ukraine', 36744636, 603628);

// function Book(name, author, year, price) {
//     this.name = name;
//     this.author = author;
//     this.year = year;
//     this.price = price;
    
//     this.getName = function() {
//         return this.name;
//     }
   
//     this.getAuthor = function() {
//         return this.author
//     } 

//     this.getYear = function() {
//         return this.year;
//     }

//     this.getPrice = function() {
//         return this.price;
//     }

//     this.setName = function(newName) {
//         this.name = newName;
//     }

//     this.setAuthor = function(newAuthor) {
//         this.author = newAuthor;
//     }

//     this.setYear = function(newYear) {
//         this.year = newYear;
//     }

//     this.setPrice = function(newPrice) {
//         this.price = newPrice;
//     }

//     this.calcSalePrice = function(salePercentation) {
//         const salePrice = this.price - (this.price * (salePercentation / 100));
//         return salePrice.toFixed(2);
//     }
// }

// const book1 = new Book('Name1', 'Author1', 0, 1000.99);
// const book2 = new Book('Lord of the Rings', 'Golum', 2000, 9.99);