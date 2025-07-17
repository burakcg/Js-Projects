const positiveAnswer = ['Evet','Evet','Evet','Evet'];
const form = document.querySelector(".question-form");
const result = document.querySelector(".result");

form.addEventListener("submit", e =>{
    e.preventDefault();
    let score = 0;
    const userAnswer = [form.q1.value,form.q2.value,form.q3.value,form.q4.value,];
    
    userAnswer.forEach((answer,index) =>{
        if(answer.toLowerCase() === positiveAnswer[index].toLowerCase()){
            score += 25;
            
        }
            console.log(`answer:${answer} array:${positiveAnswer[index]}`);
    }); 
    
    result.classList.remove("hidden");
    let counter = 0;
    const animateResult = setInterval(() =>{
        result.querySelector("span").innerHTML =`${counter}%`;
        if(counter == score){
            clearInterval(animateResult);
        }
        else{
            counter++;
        }
    },20);

   
});

// setTimeout(() =>{
//     console.log("bcg");
// },2000);

// setInterval(() =>{
//     console.log("bcg");
// },2000);

// let i = 0;
// const bastir = setInterval(() =>{
//     console.log("bcg");
//     i++;
//     if(i == 4){
//         clearInterval(bastir);
//     }
// },2000);
