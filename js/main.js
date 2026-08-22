// BÀI 1: TÍNH TIỀN LƯƠNG NHÂN VIÊN
document.getElementById("btnTinhLuong").onclick = function () {
  var luongMotNgay = 100000;
  var soNgayLam = Number(document.getElementById("txtSoNgayLam").value);

  var tongLuong = soNgayLam * luongMotNgay;

  console.log("Bài 1 - Tổng lương:", tongLuong);
  document.getElementById("txtKetQuaBai1").innerHTML = "Tổng lương: " + tongLuong.toLocaleString() + " VND";
};

// BÀI 2: TÍNH GIÁ TRỊ TRUNG BÌNH
document.getElementById("btnTinhTrungBinh").onclick = function () {
  var num1 = Number(document.getElementById("txtNum1").value);
  var num2 = Number(document.getElementById("txtNum2").value);
  var num3 = Number(document.getElementById("txtNum3").value);
  var num4 = Number(document.getElementById("txtNum4").value);
  var num5 = Number(document.getElementById("txtNum5").value);

  var trungBinh = (num1 + num2 + num3 + num4 + num5) / 5;

  console.log("Bài 2 - Trung bình:", trungBinh);
  document.getElementById("txtKetQuaBai2").innerHTML = "Giá trị trung bình: " + trungBinh;
};

// BÀI 3: QUY ĐỔI TIỀN (USD -> VND)
document.getElementById("btnQuyDoi").onclick = function () {
  var giaUSD = 23500;
  var soTienUSD = Number(document.getElementById("txtSoTienUSD").value);

  var thanhTienVND = soTienUSD * giaUSD;

  console.log("Bài 3 - Thành tiền VND:", thanhTienVND);
  document.getElementById("txtKetQuaBai3").innerHTML = "Số tiền quy đổi: " + thanhTienVND.toLocaleString() + " VND";
};

// BÀI 4: TÍNH DIỆN TÍCH, CHU VI HÌNH CHỮ NHẬT
document.getElementById("btnTinhHCN").onclick = function () {
  var chieuDai = Number(document.getElementById("txtChieuDai").value);
  var chieuRong = Number(document.getElementById("txtChieuRong").value);

  var dienTich = chieuDai * chieuRong;
  var chuVi = (chieuDai + chieuRong) * 2;

  console.log("Bài 4 - Diện tích:", dienTich, "| Chu vi:", chuVi);
  document.getElementById("txtKetQuaBai4").innerHTML = "Diện tích: " + dienTich + " | Chu vi: " + chuVi;
};

// BÀI 5: TÍNH TỔNG 2 KÝ SỐ
document.getElementById("btnTinhTongKySo").onclick = function () {
  var soHaiChuSo = Number(document.getElementById("txtSoHaiChuSo").value);

  var soHangChuc = Math.floor(soHaiChuSo / 10);
  var soHangDonVi = soHaiChuSo % 10;
  var tongKySo = soHangChuc + soHangDonVi;

  console.log("Bài 5 - Tổng 2 ký số:", tongKySo);
  document.getElementById("txtKetQuaBai5").innerHTML = "Tổng 2 ký số: " + tongKySo;
};