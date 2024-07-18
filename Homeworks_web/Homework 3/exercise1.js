// [Bài tập 1] Viết hàm tính tổng các số từ 1 đến 100.

function Tong() {
    let S = 0;
    for (let i = 1; i <= 100; i ++){
        S = S + i;
    }
    return S;
}

console.log(Tong());