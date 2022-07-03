/**
 * ?Khối 1: Input
 * 
 * 1USD = 23500VNĐ
 * Người dùng nhập số USD
 * 
 * ?Khối 2:  Processing
 * - Khai báo và gán giá trị biến
 * - Lập công thức tính
 * 
 * USD = 235000;
 * soUSD = 0;
 * 
 * soTienViet =  1USD * soUSD;
 * 
 * ?Khối 3: Output
 * - Số tiền việt nhận được khi đổi từ USD sang VNĐ
 * 
 */

// B1:
var USD = 23500;
var soUSD = 0;

// B2:
soTienViet = USD * soUSD;

// B3:

function doiTien(){
    var USD = 23500;
    var soUSD = document.getElementById('soUSD').value;
    var soTienViet = USD * Number(soUSD);

    document.getElementById('showMoney').innerHTML = soTienViet + ' VNĐ';
}
document.getElementById('changeMoney').onclick = doiTien;