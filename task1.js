const n = Number(process.argv[1]);
const e = Number(process.argv[2]);

const fun = (num, power) => {
    let a = null;
    for (let i = 1; i <= num; i++) {
        a = a + i ** power;
    }
    return a;
}

console.log(fun(n, e));