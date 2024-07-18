// [Bài tập 3] Viết hàm kiểm tra xem một chuỗi có phải là palindrome hay không
function checkPalindrome(chuoi) {
    const len = chuoi.length;
    for (let i = 0; i < len / 2; i++) {
      if (chuoi[i] !== chuoi[len - 1 - i]) {
        return false;
      }
    }
    return true;
}

console.log(checkPalindrome('Hello'));
console.log(checkPalindrome('aya'));
