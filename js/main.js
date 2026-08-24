// Các button trong HTML có type="button" nên khi nhấn sẽ không tải lại trang.

// BÀI 1: TÍNH TIỀN LƯƠNG NHÂN VIÊN
document.getElementById("calculate-salary-button").onclick = tinhLuong;

function tinhLuong() {
  var luongMotNgay = 100000;
  var soNgayLam = Number(document.getElementById("work-days-input").value);
  var tongLuong = luongMotNgay * soNgayLam;

  document.getElementById("salary-result").innerHTML =
    "Tổng tiền lương: " + tongLuong.toLocaleString("vi-VN") + " VNĐ";
}

// BÀI 2: TÍNH GIÁ TRỊ TRUNG BÌNH CỦA 5 SỐ
document.getElementById("calculate-average-button").onclick = tinhTrungBinh;

function tinhTrungBinh() {
  // Number() dùng để ép kiểu dữ liệu từ chuỗi sang số.
  var soThuNhat = Number(document.getElementById("number-1-input").value);
  var soThuHai = Number(document.getElementById("number-2-input").value);
  var soThuBa = Number(document.getElementById("number-3-input").value);
  var soThuTu = Number(document.getElementById("number-4-input").value);
  var soThuNam = Number(document.getElementById("number-5-input").value);

  var trungBinh = (soThuNhat + soThuHai + soThuBa + soThuTu + soThuNam) / 5;

  document.getElementById("average-result").innerHTML =
    "Giá trị trung bình: " + trungBinh;
}

// BÀI 3: QUY ĐỔI USD SANG VNĐ
document.getElementById("convert-currency-button").onclick = quyDoiTien;

function quyDoiTien() {
  var giaUSD = 23500;
  var soTienUSD = Number(document.getElementById("usd-amount-input").value);
  var soTienVND = soTienUSD * giaUSD;

  // NumberFormat giúp số tiền hiển thị có dấu phân cách hàng nghìn.
  var dinhDangTien = new Intl.NumberFormat("vi-VN").format(soTienVND);

  document.getElementById("conversion-result").innerHTML =
    "Số tiền sau khi quy đổi: " + dinhDangTien + " VNĐ";
}

// BÀI 4: TÍNH DIỆN TÍCH VÀ CHU VI HÌNH CHỮ NHẬT
document.getElementById("calculate-rectangle-button").onclick = tinhHinhChuNhat;

function tinhHinhChuNhat() {
  var chieuDai = Number(document.getElementById("length-input").value);
  var chieuRong = Number(document.getElementById("width-input").value);

  var dienTich = chieuDai * chieuRong;
  var chuVi = (chieuDai + chieuRong) * 2;

  document.getElementById("rectangle-result").innerHTML =
    "Diện tích: " + dienTich + " | Chu vi: " + chuVi;
}

// BÀI 5: TÍNH TỔNG HAI CHỮ SỐ
document.getElementById("calculate-digit-sum-button").onclick = tinhTongHaiChuSo;

function tinhTongHaiChuSo() {
  var soHaiChuSo = Number(document.getElementById("two-digit-number-input").value);

  var hangChuc = Math.floor(soHaiChuSo / 10);
  var hangDonVi = soHaiChuSo % 10;
  var tongHaiChuSo = hangChuc + hangDonVi;

  document.getElementById("digit-sum-result").innerHTML = "Tổng hai chữ số: " + tongHaiChuSo;
}

// Nút trở về đầu trang
var backToTopButton = document.getElementById("back-to-top-button");

document.getElementById("back-to-top-button").onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

window.onscroll = function () {
  if (document.documentElement.scrollTop > 200) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
};
