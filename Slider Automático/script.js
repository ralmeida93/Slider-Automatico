var interval = 0;

//O "querySelectorAll" retorna uma NodeList ou ArrayLike,ai ultilizamos o "length" para mostrar o tamanho dela.
var maxSlider = document.querySelectorAll('.box-img ').length  - 1;
console.log(maxSlider);



function acao(){
    let imgs = document.querySelectorAll('.box-img img');
    
    setInterval(function(){
        //O interval está me retornando a 1° imagem,pois o interval etá valendo 0(zero),e a cada 2 seg a imagem some.
        imgs[interval].style.display = 'none'; 
        interval++; // fazemos o incremento

        if(interval > maxSlider){ 
            //Aqui fizemos tratamento para se caso o "Interval" for maior q o tamanho da minha NodeList ela volta a valer 0(zero).
            interval = 0;
        }
        imgs[interval].style.display = 'block'; // Depois q o "Interval" receber 0(zero),ou seja volta para primeira imagem.
    },2000)
}
acao();