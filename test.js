
function Solution(arr) {
    // Initialize List
    let num = [];

    let area = arr;

    let z = 1;
    function x(arr) {
        return arr.reduce((sum, n) => sum + n, 0);
    }
    

    while (x(num) < arr) {
        if ((z + 1) ** 2 >= area) {
            num.push(z ** 2);

            area -= z ** 2
            z = 1
            // console.log(z)
        }
        else {
            z += 1
        }
    }

    return num;

}

console.log(`${Solution(12)},  == [9,1,1,1,]`)
console.log(`${Solution(24)},  == [16, 4, 1, 1, 1, 1]`)
console.log(`${Solution(15324)},  == [15129,169,25,1,]`)
