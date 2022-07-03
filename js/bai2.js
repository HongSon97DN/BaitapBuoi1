/**
 * ?Khối 1: Input
 * soThu1
 * soThu2
 * soThu3
 * soThu4
 * soThu5
 * 
 * ?Khối 2: Processing
 * - Khai báo và gán giá trị biến
 * - Lập công thức tính
 * 
 * soThu1(biến số thứ 1)
 * soThu2(biến số thứ 2)
 * soThu3(biến số thứ 3)
 * soThu4(biến số thứ 4)
 * soThu5(biến số thứ 5)
 * giatriTB(giá trị trung bình) = (soThu1 + soThu2 + soThu3 + soThu4 + soThu5) / 5;
 * 
 * ?Khối 3: Output
 * - Giá trị trung bình 5 chữ số
 */

// B1:
var soThu1 = 0;
var soThu2 = 0;
var soThu3 = 0;
var soThu4 = 0;
var soThu5 = 0;

// B2:

var giaTriTB = (soThu1 + soThu2 + soThu3 + soThu4 + soThu5) / 5;

// B3

function giaTriTrungBinh(){
    var soThu1 = document.getElementById('soThu1').value;
    var soThu2 = document.getElementById('soThu2').value;
    var soThu3 = document.getElementById('soThu3').value;
    var soThu4 = document.getElementById('soThu4').value;
    var soThu5 = document.getElementById('soThu5').value;

    var giaTriTB = (Number(soThu1) + Number(soThu2) + Number(soThu3) + Number(soThu4) + Number(soThu5)) / 5;
    document.getElementById('giaTriTB').innerHTML = giaTriTB;
}
document.getElementById('tinhTB').onclick = giaTriTrungBinh;
