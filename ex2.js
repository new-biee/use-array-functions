let num = +prompt("Enter numbers: "); //tao nhat tu ban phim
let str = num.toString(); //doi num sang chuoi
let result = [str[0]]; //khai bao bien result gan gia tri

for (let i = 1; i < str.length; i++) { //vong lap for chay tu index dau tien den index cuoi cung cua mang moi lan tang them 1 don vi
    if ((str[i] % 2 === 0) && (str[i + 1] % 2 === 0)) {     //neu gap phan tu chia het cho 2 ma phan tu ke tiep chia het cho 2
        result.push('-', str[i]);   //thi them '-' sau phan tu do
    } else {
        result.push(str[i])     //khong thi cong them phan tu do
    }
}
console.log(result.join("")); //in ra noi cac phan tu bang khoang trong

// let str1 = '123445566788';
//
// function convertNumber() {
//     let numbers = str1.split('');
//     console.log(numbers);
//
//     for (let i = 1; i < numbers.length; i++) {
//         if (numbers[i] % 2 === 0 && numbers[i + 1] % 2 === 0) {
//             numbers.splice(i + 1, 0, "-");
//             i++;
//         }
//     }
//     let result = numbers.join("");
//     console.log(result);
// }
//
// convertNumber();