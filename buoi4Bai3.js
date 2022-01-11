function locSo() {
  var soNguyen1Txt = document.getElementById("soNguyen1").value * 1;
  var soNguyen2Txt = document.getElementById("soNguyen2").value * 1;
  var soNguyen3Txt = document.getElementById("soNguyen3").value * 1;
  if (soNguyen1Txt / 2 && soNguyen2Txt / 2 && soNguyen3Txt / 2) {
    console.log("Cả 3 số đều là số chẵn");
    document.getElementById("xuatKetQuaBai3").innerText =
      "Cả 3 số đều là số chẵn";
  } else if (
    (soNguyen1Txt / 2 && soNguyen2Txt / 2 && soNguyen3Txt % 2) ||
    (soNguyen1Txt / 2 && soNguyen2Txt % 2 && soNguyen3Txt / 2) ||
    (soNguyen1Txt % 2 && soNguyen2Txt / 2 && soNguyen3Txt / 2)
  ) {
    console.log("2 số là số chẵn");
    console.log("1 số là số lẻ");
    document.getElementById("xuatKetQuaBai3").innerText =
      "Có 2 số chẵn và 1 số lẻ";
  } else if (
    (soNguyen1Txt / 2 && soNguyen2Txt % 2 && soNguyen3Txt % 2) ||
    (soNguyen1Txt % 2 && soNguyen2Txt / 2 && soNguyen3Txt % 2) ||
    (soNguyen1Txt % 2 && soNguyen2Txt % 2 && soNguyen3Txt / 2)
  ) {
    console.log("1 Số là số chẵn");
    console.log("2 Số là số lẻ");
    document.getElementById("xuatKetQuaBai3").innerText =
      "Có 2 số lẻ và 1 số chẵn";
  } else {
    document.getElementById("xuatKetQuaBai3").innerText =
      "Cả 3 số đều là số lẻ";
  }
}
