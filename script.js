//  1 yil ay gun saat dakika saniye yi obje olarak tanimla
// 2. window yuklenirken loading 1 saniye gozuksun
// 3.yil ay gun saat dakika saniye  iceriginde baslangic olarak "00" yazsin
// 4. dogum gununu ve bugun ki tarihi ayni formatta yaz. kullanici dogum gunun sectigind eger dogum gunu bugun ki tarihten yeni ise "dogum gununuz bugunden buyuk olamaz!!!!" uyarisi alsin
// 5. ayni zamanda kullanici dogum gununu sectiginde ekranin arka plani degissin
// 6.yil ay gun saat dakika saniye yi kullanicinin secimi ve bugununtarihi olarak tanimla farkini al
// 7.yil ay gun saat dakika saniye nin ayri ayri negatif gelme durumlarini kontrol et
// 8. yil ay gun saat dakika saniye nin tek basamakli olmasi durunda 09 07 seklinde yazmasini sagla

const years = document.querySelector("#years");
const months = document.querySelector("#months");
const days = document.querySelector("#days");
const hours = document.querySelector("#hours");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");
const countdown = document.querySelector(".countdown");
// console.log(countdown);

const loading = document.querySelector("#loading")

window.addEventListener("load", () => {
    loading.style.display = "block";
    // !setTimeout(fonksiyon,gecikme suresi)
    setTimeout(() => {
        // loading fonksiyonu sayfa yuklendiklten  1 sn sonra none olsun
        loading.style.display = "none";
        countdown.style.display = "flex";
    }, 1000);
    
    const H2Elements = countdown.querySelectorAll("h2");

    H2Elements.forEach(i => {
        i.innerHTML = "00";
        // console.log(i);
    })

});
let selectedBirthday = new Date();
let birthdayInput = document.querySelector("input[name=birthday]");
birthdayInput.addEventListener("change", (event) => {
    // console.log(typeof event.target.value);
    selectedBirthday = new Date(event.target.value);
    // console.log(typeof selectedBirthday);
    if (selectedBirthday > new Date()) {
        alert("dogum tarihiniz bugunden yeni olamaz.")
        return;
    }
    document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1467810563316-b5476525c0f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1349&q=80')";
    
    // setInterval(fonksiyon,calisma araligi)
    // loading.style.display = "block";
    setInterval(updateCountdown(), 1000);
    // setTimeout(() => {
    //     loading.style.display = "none";
    //     countdown.style.display = "flex";
    // }, 1000);
    

});

const updateCountdown = () => {
    let selectedYear = selectedBirthday.getFullYear();
    let selectedMonth = selectedBirthday.getMonth();
    let selectedDay = selectedBirthday.getDate();
    let selectedHour = selectedBirthday.getHours();
    let selectedMinute = selectedBirthday.getMinutes();
    let selectedSecond = selectedBirthday.getSeconds();
    console.log(selectedYear);

    let now = new Date();
    
    let nowYear = now.getFullYear();
    let nowMonth = now.getMonth();
    let nowDay = now.getDate();
    let nowHour = now.getHours();
    let nowMinute = now.getMinutes();
    let nowSecond = now.getSeconds();
    
    let yearOfAge = nowYear - selectedYear;
    let monthOfAge = nowMonth - selectedMonth;
    let dayOfAge = nowDay - selectedDay;
    let hourOfAge = nowHour - selectedHour;
    let minuteOfAge = nowMinute - selectedMinute;
    let secondOfAge = nowSecond - selectedSecond;
    
    if (secondOfAge < 0) {
        secondOfAge += 60;
        minuteOfAge--;
    }
    if (minuteOfAge < 0) {
        minuteOfAge += 60;
        hourOfAge--;
    }
    if (hourOfAge < 0) {
        hourOfAge += 24;
        dayOfAge--;
    }
    if (dayOfAge < 0) {
        dayOfAge +=30 ;
        monthOfAge--;
    }
    
    if (monthOfAge < 0) {
        monthOfAge += 12;
        yearOfAge--;

    }
   
    
   

    years.innerHTML = yearOfAge.toString().padStart(2, "0");
    months.innerHTML = monthOfAge.toString().padStart(2, "0");
    days.innerHTML = dayOfAge.toString().padStart(2, "0");
    hours.innerHTML = hourOfAge.toString().padStart(2, "0");
    minutes.innerHTML = minuteOfAge.toString().padStart(2, "0");
    seconds.innerHTML = secondOfAge.toString().padStart(2, "0");

};