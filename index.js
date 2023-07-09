function MyArray() {
    this.length = 0;
}

function MyProtoArray() {
    this.push = function() {     
        for(let i = 0; i < arguments.length; i++) {
            this[this.length] = arguments[i];
            this.length++;
        }

        return this.length;
    },
    this.pop = function() {
        if(this.length > 0) {
            let lastItem = this[this.length - 1];

            delete this[this.length - 1];

            this.length--;

            return lastItem;
        }
    }, 
    this.forEach = function(callback) {
        for(let i = 0; i < this.length; i++) {
            callback(this[i], i, this);
        }
    }
}

MyArray.prototype = new MyProtoArray;

// __proto__ - літеральнея

/*

const cat = {

}

*/

const arr = new MyArray();

// arr.push(3, 5, 9, 10, 11, 2);

// arr.forEach((item) => {
//     console.log(item)
// })

// praktika

function Stairs() {
    this.currentStair = 0;
}

function ProtoStairs() {
    this.up = function() {
        this.currentStair++;
    }

    this.down = function() {
        if (this.currentStair > 0) {
            this.currentStair--;
        }
    }

    this.showStair = function() {
        return this.currentStair;
    }
}

Stairs.prototype = new ProtoStairs;

const st = new Stairs();