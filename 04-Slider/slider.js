const prevArrow = document.querySelector('.fa-circle-arrow-left');
const nextArrow = document.querySelector('.fa-circle-arrow-right');
const images = document.querySelectorAll('.imgContainer img');
let currentIndex = 0;
let timeout;

function showImage(index) {
    
    clearTimeout(timeout);
    
    images.forEach((img, i) => {
        img.classList.toggle('hidden', i !== index);  // toggle => img index'i(i) gelen index'e eşit değilse hidden eklenir. Eşitse hidden kaldırılır.
    });

    timeout = setTimeout(() =>{
        currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;  
        showImage(currentIndex);

    }, 4000);
}

prevArrow.addEventListener('click', () => {
    
    currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1; // images.length - 1: Son resmin indeksi (örneğin, 5 resim varsa son indeks 4’tür).
    showImage(currentIndex);
   
});

nextArrow.addEventListener('click', () => {
    
    currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;  // Eğer currentIndex son resmin indeksiyse (örneğin, 5 resim varsa images.length - 1 = 4), sonraki resme geçmek için ilk resme dönülmesi gerekir. ilk resmin index'i 0 seçilir.
    showImage(currentIndex);
    
});

showImage(currentIndex);