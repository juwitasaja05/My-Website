document.write("<h1 style='color:blue;'>Hello Dunia</h1>");
document.write("<p>BIODATA : </p>")
document.write("<hr>")
document.write("nama :")
document.write("<p>jurusan: </p>")

document.write("<hr>");

var nama = "juwita"
var jurusan = "rekaya perangkat lunak"
document.write(`
<table>
<tr>
<td><h1>BIODATA</h1></td>
</tr>

<tr>
<td> nama : </td>
<td>` + nama + `  </td>
</tr>

<tr>
<td> jurusan : </td>
<td>` + jurusan + `</td>
</tr>
</table>

`);
//variabel
var nilai_a = 10;
var nilai_b = 20;

var penjumlahan = nilai_a + nilai_b;
document.write("Hasil Penjumlahan : " + penjumlahan);

var nilai_c = 50;
var nilai_d = 10;
var pembagian = nilai_c / nilai_d;
document.write("<p>Hasil Pembagian : " + pembagian + "</p>");

console.log("RPL");