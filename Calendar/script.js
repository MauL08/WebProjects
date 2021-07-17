// For Clock
function jam() {
    var date = new Date();

    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();

    document.getElementById("hours").innerHTML = hour + ":";
    document.getElementById("minute").innerHTML = minute + ":";
    document.getElementById("second").innerHTML = second;
}
var loop = setInterval(jam,1000);

// For Calendar
var cal = new Date();

function hr(num) {
    daylist = ["Senin","Selasa","Rabu","Kamis","Jumat","Sabtu","Minggu"];
    return daylist[num - 1];
}
var day = cal.getDay();
var hari = hr(day);

function bl(num) {
    monthlist = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
    return monthlist[num];
}
var month = cal.getMonth();
var bulan = bl(month);

var date = cal.getDate();
var year = cal.getFullYear();

document.getElementById("namaHari").innerHTML = hari;
document.getElementById("tanggal").innerHTML = date;
document.getElementById("namaBulan").innerHTML = bulan + "     ";
document.getElementById("tahun").innerHTML = year;