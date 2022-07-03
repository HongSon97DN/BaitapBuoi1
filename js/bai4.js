/**
 * ?Khối 1: Input
 * chieuDai
 * chieuRong
 * 
 * ?Khối 2: Processing
 * - khai báo và gán giá trị biến
 * - Lập công thức tính
 * 
 * chieuDai
 * chieuRong
 * 
 * chuVi = (chieuDai + chieuRong) * 2
 * dienTich = chieuDai * chieuRong
 * 
 * ?Khối 3: Output
 * 
 * Chu vi hình chữ nhật
 * Diện tích hình chữ nhật
 */

// B1:
var chieuDai = 0;
var chieuRong = 0;

// B2:

var chuVi = (chieuDai + chieuRong) * 2;
var dienTich = chieuDai * chieuRong;

// B3:

function tinhToan(){
    var chieuDai = document.getElementById('chieuDaiHCN').value;
    var chieuRong = document.getElementById('chieuRongHCN').value;

    var tinhChuVi = (Number(chieuDai) + Number(chieuRong)) * 2;
    var tinhDienTich = Number(chieuDai) * Number(chieuRong);

    document.getElementById('chuVi').innerHTML = tinhChuVi;
    document.getElementById('dienTich').innerHTML = tinhDienTich;
}
document.getElementById('tinh').onclick = tinhToan;