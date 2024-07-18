// [Bài tập 2] Tạo một mảng chứa 5 phần tử số, sau đó tính tổng và trung bình cộng của các phần tử trong mảng.
let number = [1,2,3,4,5];

let S = 0;
for (let i = 0; i < 5; i ++) {
    S = S + number[i];
}

console.log('Tong: ', S);

let tb = S / 5; 
console.log('Trung binh cong: ', tb);