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


let fullname = "Tita Mulyana"; 
let alamat = "jalan kalimantan 82";
console.log("nama depan = " + fullname.slice(0,4));
console.log("nama belakang = " + fullname.slice(5,12));
console.log("alamat = " + alamat.slice(0,15));
console.log("nomor jl = " + alamat.slice(-2));

let angka1 = 6
let angka2 = 12

let angkaBerpangkat =Math.pow(angka1,angka2);
console.log('angkaBerpangkat: ', angkaBerpangkat);

let tampung
tampung = angka2
angka2 = angka1
console.log('angka1: ', angka1);
console.log('angka2: ', angka2);

let buah = ["semangka", "apel", "mangga", "sawo", "salak"]
buahKetinggalan = "jeruk"
buah.push(buahKetinggalan)
buah.splice(2,1)
console.log('buah: ', buah);