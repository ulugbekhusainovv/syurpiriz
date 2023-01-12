// var, let, const
// let ism = prompt(`Ismingizni kiriting:`);
// let familya = prompt(`Familyangizni kiriting:`);
// const dob = prompt(`Tug'ilgan sanangizni kiriting:`);
// let manzil = prompt(`Yashash manzilingizni kiriting:`);
// let tel = prompt(`Telefon raqamingizni kiriting:`);

// document.body.textContent = natija;
// const natija = `Salom, meing ismim ${ism}. Familyam ${familya}. \n Yoshim ${
//   2023 - dob
// }da. Hozirda ${manzil}da yashayman. Raqamim ${tel}.`;

// document.querySelector("body").classList.add("active");

// programing

// let ism = prompt(`Ismingizni kiriting:`);
// const dob = prompt(`Tug'ilgan yilingizni kiriting:`);

// let yil = 2023 - dob;
// let oy = yil * 12;
// let hafta = oy * 4;
// let kun = hafta * 7;
// let soat = kun * 24;
// let minut = soat * 60;
// let soniya = minut * 60;

// if (!dob == "") {
//   const natija = `Hurmatli ${ism}!  ${yil} yil.  ${oy} Oy.  \n ${hafta}Hafta.  ${kun} Kun.  ${soat} Soat.  ${minut} Daqiqa.   ${soniya} Soniya Yashadiz. Hurmat bilan  Ulugbek 😊. Vaqtingizni bekorga otkazmang`;

//   document.body.textContent = natija;
// } else {
//   document.body.textContent = "Tug'ulgan sanani kiritmagansiz 🤷‍♂️";
// }

// document.querySelector("body").classList.add("active");
let ism = prompt(`Ismingizni  kiriting:`);
let birinchiHarf = ism.charAt().toUpperCase();
let davomi = ism.slice(1).toLocaleLowerCase();
let natija = birinchiHarf + davomi;
let bornYear = prompt(`Tug'ilgan yilingizni kiriting:`);
let bornMonth = prompt(`Tug'ilgan oy kiriting:`);
let bornDay = prompt(`Tug'ilgan kun kiriting:`);

let nawYear = 2023;
let nawMonth = 1;
let nawDay = 12;

let yil;
let oy;
let kun;

if (nawMonth < bornMonth && nawDay < bornDay) {
  nawMonth += 12;
  nawYear--;
  nawDay += 30;
  nawMonth--;
} else if (nawMonth < bornMonth && nawDay >= bornDay) {
  nawMonth += 12;
  nawYear--;
} else if (nawMonth >= bornMonth && nawDay < bornDay) {
  nawDay += 30;
  nawMonth--;
  if (nawMonth == 0) {
    nawMonth = 12;
    nawYear--;
  }
}

yil = nawYear - bornYear;
oy = nawMonth - bornMonth;
kun = nawDay - bornDay;

document.querySelector(
  ".text"
).textContent = `Salom, Hurmatli ${natija}, siz taxminan ${yil} yil, ${oy} oy, ${kun} kun yashadingiz Hurmat bilan Muhammad Ali 😊. Vaqtingizni bekorga o'tkazmang`;

// console.log(`siz taxminan ${yil} yil, ${oy} oy, ${kun} kun yashadingiz`);
