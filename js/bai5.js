/**
 * ?Khối 1: Input
 * số tự nhiên gồm 2 chữ số người dùng nhập vào
 * 
 * ?Khối 2: Processing
 * - Khai báo biến và gán giá trị
 * - Lập công thức tính
 * 
 * number(số có 2 chữ số)
 * soHangChuc
 * soHangDonvi
 * tongHaiSo
 * 
 * number = 75;
 * soHangChuc = Math.floor(number / 10) => 7;
 * soHangDonVi = Math.floor(number % 10) => 5
 * tongHaiSo = soHangChuc + soHangDonVi;
 * 
 * ?Khối 3: Output
 * Tổng 2 ký số tự nhiên người dùng nhập vào
 */

// B1:
var number = 0;
var soHangChuc = 0;
var soHangDonVi = 0;
var tongHaiSo = 0;

// B2:

var soHangChuc = Math.floor(number / 10);
var soHangDonVi = Math.floor(number % 10);
var tongHaiSo = soHangChuc + soHangDonVi;

// B3:

function tongSTN(){
    var number = document.getElementById('soTuNhien').value;
    var soHangChuc = Math.floor(number / 10);
    var soHangDonVi = Math.floor(number % 10);

    var tongHaiSo = soHangChuc + soHangDonVi;
    document.getElementById('soTuNhien2KySo').innerHTML = tongHaiSo;
}
document.getElementById('tinhSo').onclick = tongSTN;
