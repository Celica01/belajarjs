// let arr =["mangga", "jeruk", "apel"];
// for(let i = 0; i < arr.length; i++)
// {console.log(arr[1]);
// } cara looping model 1
//cara mengakses data
// let dataObject = {
//     nama: "budi",
//     alamat: "bogor",
//     usia: 30,
//     hoby : {
//         hoby1: "panahan",
//         hoby2: "berkuda",
//         hoby3: "berenang"
//     }
// }
// console.log(dataObject.nama);
// console.log(dataObject.hoby.hoby3);
// console.log(dataObject.usia);


// 

// function nilaitertinggi (siswa){
//     let nilaiSiswa = {}

//     for (let i =0; i <siswa. lenght; i++)
// }

//string
let fullname = "Tita Mulyana"; 
let alamat = "jalan kalimantan 82";
console.log("nama depan = " + fullname.slice(0,4));
console.log("nama belakang = " + fullname.slice(5,12));
console.log("alamat = " + alamat.slice(0,15));
console.log("nomor jl = " + alamat.slice(-2));
//nomor
let angka1 = 6
let angka2 = 12

let angkaBerpangkat =Math.pow(angka1,angka2);
console.log('angkaBerpangkat: ', angkaBerpangkat);
//nomor
let tampung
tampung = angka2
angka2 = angka1
console.log('angka1: ', angka1);
console.log('angka2: ', angka2);
//array
let buah = ["semangka", "apel", "mangga", "sawo", "salak"]
buahKetinggalan = "jeruk"
buah.push(buahKetinggalan)
buah.splice(2,1)
console.log('buah: ', buah);


//object
let sabunMandi1 = {
    nama : "liveboy",
    harga : "6000",
    berat : "200 ml"
}
let sabunMandi2 = {
    nama : "nuvo",
    harga : "5000",
    berat : "300 ml"
}

let hargasabun1 = sabunMandi1.harga


//conditional
if (angka1 > 10) {
    //yang berada disini harus true
}

//looping
for (let i = 0; i < buah.length; i++) {
    const element = buah[i];
    
}

buah.forEach((el,idx) => {
    
});

buah.map(()=> {})//sering dipkai

//function
function mesinPembuatkue(a,b,c) {
    //params bahan baku// 
    let proses =a+b+c
    return proses
}

console.log('mesinPembuatkue : ', mesinPembuatkeu(1,2,3));

function mesinPembuatKue (a,b,c) {
    let number = 0
    if (a) number += a
    if (b) number += b
    if (c) number += c

    return number
}
console.log("mesin pembuat kue : ", mesinPembuatKue(null,2,null));

//arrow function
//let namaFunction = () =>  {}