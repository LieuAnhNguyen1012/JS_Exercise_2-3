// Các button trong HTML có type="button" nên khi nhấn sẽ không tải lại trang.

// BÀI 1: TÍNH TIỀN LƯƠNG NHÂN VIÊN
document.getElementById("btnTinhLuong").onclick = tinhLuong;

function tinhLuong() {
  var luongMotNgay = 100000;
  var soNgayLam = Number(document.getElementById("txtSoNgayLam").value);
  var tongLuong = luongMotNgay * soNgayLam;

  document.getElementById("txtKetQuaBai1").innerHTML =
    "Tổng tiền lương: " + tongLuong.toLocaleString("vi-VN") + " VNĐ";
}

// BÀI 2: TÍNH GIÁ TRỊ TRUNG BÌNH CỦA 5 SỐ
document.getElementById("btnTinhTrungBinh").onclick = tinhTrungBinh;

function tinhTrungBinh() {
  // Number() dùng để ép kiểu dữ liệu từ chuỗi sang số.
  var soThuNhat = Number(document.getElementById("txtNum1").value);
  var soThuHai = Number(document.getElementById("txtNum2").value);
  var soThuBa = Number(document.getElementById("txtNum3").value);
  var soThuTu = Number(document.getElementById("txtNum4").value);
  var soThuNam = Number(document.getElementById("txtNum5").value);

  var trungBinh = (soThuNhat + soThuHai + soThuBa + soThuTu + soThuNam) / 5;

  document.getElementById("txtKetQuaBai2").innerHTML =
    "Giá trị trung bình: " + trungBinh;
}

// BÀI 3: QUY ĐỔI USD SANG VNĐ
document.getElementById("btnQuyDoi").onclick = quyDoiTien;

function quyDoiTien() {
  var giaUSD = 23500;
  var soTienUSD = Number(document.getElementById("txtSoTienUSD").value);
  var soTienVND = soTienUSD * giaUSD;

  // NumberFormat giúp số tiền hiển thị có dấu phân cách hàng nghìn.
  var dinhDangTien = new Intl.NumberFormat("vi-VN").format(soTienVND);

  document.getElementById("txtKetQuaBai3").innerHTML =
    "Số tiền sau khi quy đổi: " + dinhDangTien + " VNĐ";
}

// BÀI 4: TÍNH DIỆN TÍCH VÀ CHU VI HÌNH CHỮ NHẬT
document.getElementById("btnTinhHCN").onclick = tinhHinhChuNhat;

function tinhHinhChuNhat() {
  var chieuDai = Number(document.getElementById("txtChieuDai").value);
  var chieuRong = Number(document.getElementById("txtChieuRong").value);

  var dienTich = chieuDai * chieuRong;
  var chuVi = (chieuDai + chieuRong) * 2;

  document.getElementById("txtKetQuaBai4").innerHTML =
    "Diện tích: " + dienTich + " | Chu vi: " + chuVi;
}

// BÀI 5: TÍNH TỔNG HAI CHỮ SỐ
document.getElementById("btnTinhTongKySo").onclick = tinhTongHaiChuSo;

function tinhTongHaiChuSo() {
  var soHaiChuSo = Number(document.getElementById("txtSoHaiChuSo").value);

  var hangChuc = Math.floor(soHaiChuSo / 10);
  var hangDonVi = soHaiChuSo % 10;
  var tongHaiChuSo = hangChuc + hangDonVi;

  document.getElementById("txtKetQuaBai5").innerHTML =
    "Tổng hai chữ số: " + tongHaiChuSo;
}

// Nút trở về đầu trang
document.getElementById("btnBackToTop").onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
