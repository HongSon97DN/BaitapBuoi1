/**
 * ?Khối 1: Dữ liệu đầu vào(Input)
 * - Lương 1 ngày: 100
 * - Số ngày làm
 * 
 * ?Khối 2: Các bước xử lý 
 * - Khai báo biến và gán kiểu dữ liệu
 * - Lập công thức tính
 * 
 *  luongMotNgay = 100;
 *  soNgayLam = 0;
 *  luongNV(lương nhân viên) = luongMotNgay * soNgayLam
 * 
 * ?Khối 3: Kết quả(Output)
 * - Lương của nhân viên
 */

//  B1:
var luongMotNgay = 100;
var soNgayLam = 0;

// B2:

luongNV = luongMotNgay * soNgayLam

// B3:
// console.log('lương', luongNV)
function tinhLuongNV(){
    var soNgayLam = document.getElementById('soNgay').value;

    var luongNV = (Number(soNgayLam) * luongMotNgay);
    console.log(luongNV);
    document.getElementById('showSalary').innerHTML = luongNV;
}
document.getElementById('luongNV').onclick = tinhLuongNV;