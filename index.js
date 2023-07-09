function MyArray() {
    this.length = 0;

    //push
    this.push = function(value) {
        //v1
        /*
        this[this.length] = value; //this[key] = value
        this.length++;

        return this.length;
        */

        //v2
        for(let i = 0; i < arguments.length; i++) {
            this[this.length] = arguments[i];
            this.length++;
        }

        return this.length;
    }

    //pop
    this.pop = function() {
        if(this.length > 0) {
            let lastItem = this[this.length - 1];

            delete this[this.length - 1];

            this.length--;

            return lastItem;
        }
    }

    // forEach
    this.forEach = function(callback) {
        for(let i = 0; i < this.length; i++) {
            callback(this[i], i, this);
        }
    }
}

const arr = new MyArray();

arr.push(3, 5, 9, 10, 11, 2);

arr.forEach((item) => {
    console.log(item)
})

// __proto__

const cat = {
    name: 'Barsik',
    color: 'red',
    age: 1,
}

const cat2 = {
    name: 'Murzik',
    color: 'black',
    age: 5,
}

const catMethods = {
    run: function() {
        console.log(`${this.name} is running`);
    },
    meow: function() {
        console.log(`${this.name} Meow!`);
    }
}

cat.__proto__ = catMethods;
cat2.__proto__ = catMethods;
