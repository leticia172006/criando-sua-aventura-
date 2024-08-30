const avanca = document.querySelectorAll('.btn-proximo');
 avanca.forEach(button => {
    button.addEventListener('click', function(){
    const atual = documentquerySelector('.ativo');
    const proximoPasso = 'passo-' + this.getAttribute('data-proxima');

    atual.classList.remove('ativo');
    document.getElementById(proximoPasso).classList.add('ativo');
    })
 })