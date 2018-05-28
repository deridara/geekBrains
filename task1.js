const n = Number(process.argv[2]);
const e = Number(process.argv[3]);

const fun = (num, power) => {
    let a = null;
    for (let i = 1; i <= num; i++) {
        a = a + i ** power;
    }
    return a;
}

console.log(fun(n, e));