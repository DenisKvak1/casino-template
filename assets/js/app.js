function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
    
let Button = document.getElementById("gameButton");
let Input  = document.getElementById("userBet");
let Input2 = document.getElementById("userOption");
let Img = document.getElementById("dice1Image");
let Img2= document.getElementById("dice2Image");
let Message= document.getElementById("messagePlace");
let userBalance= document.getElementById("userBalance");

let bal=10000;
let dice1;
let dice2;

userBalance.textContent=`Ваш баланс: ${bal} грн.`;
Button.addEventListener("click", function () {
    if(Input.value && Input2.value){
        dice1=getRandomNumber(1, 6);
        dice2=getRandomNumber(1, 6);
        diceSum=dice1+dice2;
        Img.src=`assets/images/${dice1}.png`;                                                                   
        Img2.src=`assets/images/${dice2}.png`;
        let i=+Math.round(Input.value);
        let i2=Math.round(+Input2.value);
        let kof=2;
        if(i2==diceSum){
            Message.textContent=`Ваша ставка на ${i2} выиграла, выиграли ${(i*kof)} грн.`;
            Message.classList.remove('d-none')
            Input.value='';
            Input2.value='';
            bal=bal+i*kof;
        }
        else{
            Message.textContent=`Ваша ставка на ${i2} проиграла, вы проиграли ${i} грн.`;
            Message.classList.remove('d-none')
            Input.value='';
            Input2.value='';
            bal=bal-i;
        }
        userBalance.textContent=`Ваш баланс: ${bal} грн.`;
    }
})
