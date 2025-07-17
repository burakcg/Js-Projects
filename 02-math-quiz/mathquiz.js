const positiveAnswer = ['8','10','3','25'];
const form = document.querySelector(".question-form");
const result = document.querySelector(".result");
// cevapları kontrol et
form.addEventListener("submit", e =>{
    e.preventDefault();
    let score = 0;
    const userAnswer = [form.q1.value,form.q2.value,form.q3.value,form.q4.value,];
    
    userAnswer.forEach((answer,index) =>{
        if(answer.toLowerCase() === positiveAnswer[index].toLowerCase()){
            score += 25;
        }    
    }); 
   
    //sonucu göster
    result.classList.remove("hidden");
    // sonuc animasyonu
    let counter = 0;
    const animateResult = setInterval(() =>{
        result.querySelector("span").innerHTML =`${counter}%`;
        if(counter == score){
            if(counter == 100){
                // gönder butonunu disable yap.
                const btn = document.querySelector(".submit-btn");
                console.log(btn.classList);
                btn.classList.add('disabled:bg-gray-400', 'disabled:cursor-not-allowed');
                btn.disabled = true;
                // success mesajı göster
                result.querySelector(".success").classList.remove("hidden");
            }
            //animasyonu durdur.
            clearInterval(animateResult);
        }
        else{
            counter++;
        }
    },40);
    
});

