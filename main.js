const ism = "Nurmuhammad";
let bot = prompt("Ismingizni kiriting");
let harf = prompt("Harfingizni kiriting");

if(bot == ""){
    alert("Ismingizni kiriting")
}
else if(bot.toLowerCase().includes(harf)){
    alert(`${bot} ismida ${harf} harfi mavjud`)
}else{
    alert(`${bot} ismida ${harf} harfi mavjud emas`)
}