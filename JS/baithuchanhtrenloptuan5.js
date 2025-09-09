
var diem = eval(prompt("nhap diem:"));

switch (diem) {
    case 10: alert("xuat sac"); break;
    case 9: alert("gioi"); break;
    case 8: alert("trung binh"); break;
    case 7: alert("yeu"); break;
    default: alert("rot mon!!!!");
}

var so = eval(prompt("nhap so can tinh bang cuu chuong:"));
for (i = 1; i <= 10; i++) {
    document.write(so + " * " + i + " = " + (so * i) + "<br >");
}
hehe