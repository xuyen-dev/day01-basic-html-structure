// Day 1 - JavaScript Algorithms
// =============================

// Bài 1: Tính tổng các số trong mảng
function sumArray(arr) {
  let sum = 0; // Khởi tạo biến sum để cộng dồn
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]; // Cộng từng phần tử vào sum
  }
  return sum;
}
console.log("Bài 1 - Tổng:", sumArray([1, 2, 3, 4])); // Kết quả: 10

// Bài 2: Tìm phần tử lớn nhất trong mảng
function findMax(arr) {
  let max = arr[0]; // Giả sử phần tử đầu tiên là lớn nhất
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i]; // Cập nhật max nếu tìm thấy phần tử lớn hơn
    }
  }
  return max;
}
console.log("Bài 2 - Lớn nhất:", findMax([5, 2, 9, 1])); // Kết quả: 9

// Bài 3: Đếm số lần xuất hiện ký tự trong chuỗi
function countChar(str, char) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      count++;
    }
  }
  return count;
}
console.log("Bài 3 - Số lần xuất hiện 'l':", countChar("hello world", "l")); // Kết quả: 3
