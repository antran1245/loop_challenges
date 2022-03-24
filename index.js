// Part 1
for(let i = 1; i < 20; i++) {
    if(i%2 != 0) { //check if odd
        console.log(i)
    }
}

//Part 2
let num = 100;
while (num != 0) {
    if(num%3 == 0) { //check if multiples of 3
        console.log(num);
    }
    num--;
}

//Part 3
let num = 4;
while(num > -4) {
    console.log(num);
    num-=1.5; //subtract 1.5 from num
}

//Part 4
let sum = 0;
for(let i = 1; i < 101; i++) {
    sum += i; //add to sum
}
console.log(sum);

//Part 5
let product = 1;
for(let i = 1; i < 13; i++) {
    product *= i; //multiple product
}
console.log(product);