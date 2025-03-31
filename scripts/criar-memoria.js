document.querySelector('.btn-criar').addEventListener('click', function(event){
    event.preventDefault();

    // Pega div que contem todas as imagens.
    let caixaDeImagens = document.querySelector('.img-container');

    // Pega imagens e conta quantas tem
    let imagens = caixaDeImagens.querySelectorAll('img');

    console.log(imagens);

    if(imagens.length === 0) {
        let cxAlerta = document.getElementById('cx-alerta');
        cxAlerta.style.display = 'block'; //mostrar o alerta

        // Oculta o alerta após 3 segundos
        setTimeout(() => {
            cxAlerta.style.display = 'none';
        }, 3000);
    }
})