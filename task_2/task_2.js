function add(a, b) {
    return (a + b).toPrecision(100).replace(/\.?0+$/, '');
}

function sub(a, b) {
    return (a - b).toPrecision(100).replace(/\.?0+$/, '');
}

function mul(a, b) {
    return (a * b).toPrecision(100).replace(/\.?0+$/, '');
}

function div(a, b) {
    return (a / b).toPrecision(100).replace(/\.?0+$/, '');
}

alert(add(9007199254740995, 1e10));
alert(sub(9007199294740995, 13e14));
alert(mul(11007199294740995, 1000000052006));
alert(div(1111111111111111111113341345135313, 1354266362));
