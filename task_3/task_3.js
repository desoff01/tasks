class Product {
    constructor(name, price, quantity, description) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.description = description;
    }
}

String.prototype.contains = String.prototype.includes;
String.prototype.starts = String.prototype.startsWith;
String.prototype.ends = String.prototype.endsWith;

Number.prototype['>'] = function(value) {return this > value;}
Number.prototype['<'] = function(value) {return this < value;}
Number.prototype['='] = function(value) {return this == value;}
Number.prototype['>='] = function(value) {return this >= value;}
Number.prototype['<='] = function(value) {return this <= value;}

function filter(str, arr) {
    let strArr = str.split('&');
    let properties = strArr.map(item => ({
        props: item.split(/([-\<\>\=\<=\>=])/).filter((val) => val && /[^-]/.test(val))
    }));

    let tmpArr = arr.filter(value => {
        for (let p of properties) {
            if (!value[p.props[0]][p.props[1]](p.props[2]))
                return false;
        }
        return true;
    })
    return tmpArr;
}

let str = "name-starts-fd&quantity-=5";
let arr = [new Product("fdTomatoes", 50, 5, "Pomadoro"),
    new Product("Cucumbers", 70, 16, "Ogurec"),
    new Product("Bananfdas", 2, 10, "Bananabc"),
    new Product("Apples", 40, 52, "Yabloki")];

let arr2 = filter(str, arr);
console.log(arr2);
