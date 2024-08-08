// BÀI 1
function tongdiem() {
  var diemchuanEL = document.getElementById("diemchuan").value * 1;
  var diemMon1 = document.getElementById("mon1").value * 1;
  var diemMon2 = document.getElementById("mon2").value * 1;
  var diemMon3 = document.getElementById("mon3").value * 1;
  var khuvucEL = document.getElementById("khuvuc").value * 1;
  var doituongEL = document.getElementById("doituong").value * 1;
  var ketquaEL = document.getElementById("ketqua");

  if (khuvucEL === 2) {
    switch (doituongEL) {
      case 2.5: {
        var tong = diemMon1 + diemMon2 + diemMon3 + 2 + 2.5;
        break;
      }
      case 1.5: {
        var tong = diemMon1 + diemMon2 + diemMon3 + 2 + 1.5;
        break;
      }
      case 1: {
        var tong = diemMon1 + diemMon2 + diemMon3 + 2 + 1;
        break;
      }
      case 10: {
        var tong = diemMon1 + diemMon2 + diemMon3 + 2;
        break;
      }
    }
  } else if (khuvucEL === 1) {
    switch (doituongEL) {
      case 2.5: {
        var tong = diemMon1 + diemMon2 + diemMon3 + 1 + 2.5;
        break;
      }
      case 1.5: {
        var tong = diemMon1 + diemMon2 + diemMon3 + 1 + 1.5;
        break;
      }
      case 1: {
        var tong = diemMon1 + diemMon2 + diemMon3 + 1 + 1;
        break;
      }
      case 10: {
        var tong = diemMon1 + diemMon2 + diemMon3 + 1;
        break;
      }
    }
  } else if (khuvucEL === 0.5) {
    switch (doituongEL) {
      case 2.5: {
        var tong = diemMon1 + diemMon2 + diemMon3 + 0.5 + 2.5;
        break;
      }
      case 1.5: {
        var tong = diemMon1 + diemMon2 + diemMon3 + 0.5 + 1.5;
        break;
      }
      case 1: {
        var tong = diemMon1 + diemMon2 + diemMon3 + 0.5 + 1;
        break;
      }
      case 10: {
        var tong = diemMon1 + diemMon2 + diemMon3 + 0.5;
        break;
      }
    }
  } else if (khuvucEL === 10) {
    switch (doituongEL) {
      case 2.5: {
        var tong = diemMon1 + diemMon2 + diemMon3 + 2.5;
        break;
      }
      case 1.5: {
        var tong = diemMon1 + diemMon2 + diemMon3 + 1.5;
        break;
      }
      case 1: {
        var tong = diemMon1 + diemMon2 + diemMon3 + 1;
        break;
      }
      case 10: {
        var tong = diemMon1 + diemMon2 + diemMon3;
        break;
      }
    }
  }

  if (tong > diemchuanEL) {
    ketquaEL.innerHTML = `Thí sinh đậu`;
    console.log("yes");
  } else if (tong < diemchuanEL) {
    ketquaEL.innerHTML = `Thí sinh rớt`;
    console.log("no");
  }
}

// Baì 2

function tinh() {
  tenEl = document.getElementById("ten").value;
  dienEL = document.getElementById("dien").value * 1;
  giadienEL = document.getElementById("giadien");

  if (dienEL <= 50) {
    var giaEL = dienEL * 500;
  } else if (dienEL > 50 && dienEL <= 100) {
    var giaEL = 50 * 500 + (dienEL - 50) * 650;
  } else if (dienEL > 100 && dienEL <= 200) {
    var giaEL = 50 * 500 + 50 * 650 + (dienEL - 100) * 850;
  } else if (dienEL > 200 && dienEL <= 350) {
    var giaEL = 50 * 500 + 50 * 650 + 100 * 850 + (dienEL - 200) * 1100;
  } else if (dienEL > 350) {
    var giaEL =
      50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (dienEL - 350) * 1300;
  }

  giadienEL.innerHTML = ` giá điện của ${tenEl} là : ${giaEL} VND `;
}

// bai 3
function tinhthue() {
  var tenEL = document.getElementById("ten").value;
  var thueEL = document.getElementById("thue");
  var thuEL = document.getElementById("thu").value * 1;
  var phuEL = document.getElementById("phu").value * 1;
  var chiuthue = thuEL * 1000000 - 4000000 - phuEL * 1600000;

  if (chiuthue <= 60000000) {
    var thuetra = chiuthue * 0.05;
  } else if (chiuthue > 60000000 && chiuthue <= 120000000) {
    var thuetra = chiuthue * 0.1;
  } else if (chiuthue > 120000000 && chiuthue <= 210000000) {
    var thuetra = chiuthue * 0.15;
  } else if (chiuthue > 210000000 && chiuthue <= 384000000) {
    var thuetra = chiuthue * 0.2;
  } else if (chiuthue > 384000000 && chiuthue <= 624000000) {
    var thuetra = chiuthue * 0.25;
  } else if (chiuthue > 624000000 && chiuthue <= 960000000) {
    var thuetra = chiuthue * 0.3;
  } else if (chiuthue > 960000000) {
    var thuetra = chiuthue * 0.35;
  }

  thueEL.innerHTML = `Thuế mà ${tenEL} phải trả là : ${thuetra} (đồng)`;
}
// bài 4
function chon() {
  document.getElementById("hien").style.display = "block";
  document.getElementById("an").style.display = "block";
}
function an() {
  document.getElementById("hien").style.display = "none";

  document.getElementById("ank").style.display = "none";
  document.getElementById("an").style.display = "block";
  socongEL = document.getElementById("socong");
  socongEL.disabled = true;
}
function hien() {
  document.getElementById("an").style.display = "none";
  document.getElementById("hien").style.display = "bloc;k";
  document.getElementById("ank").style.display = "block";
  socongEL = document.getElementById("socong");
  socongEL.disabled = false;
}

function tinhtien() {
  maEL = document.getElementById("ma").value;
  socongEL = document.getElementById("socong").value * 1;
  sokenhEL = document.getElementById("sokenh").value * 1;
  xuatraEL = document.getElementById("xuatra");

  if (socongEL == 0) {
    console.log("yes");
    var tongtien = 4.5 + 20 + sokenhEL * 7.5;
  } else if (socongEL > 0 && socongEL <= 10) {
    var tongtien = 15 + 75 + sokenhEL * 50;
    console.log(socongEL);
  } else if (socongEL > 10) {
    var tongtien = 15 + 75 + sokenhEL * 50 + (socongEL - 10) * 5;
  }
  xuatraEL.innerHTML = `Số tiền mà khách hàng ${maEL} phải trả là ${tongtien} ($) `;
}
