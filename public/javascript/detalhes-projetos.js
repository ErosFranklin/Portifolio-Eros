document.addEventListener('DOMContentLoaded', function() {
    const nomeProjeto = document.querySelector('.nome-projeto');
    const descricaoProjeto = document.querySelector('.descricao-projeto');
    const tecnologiasProjeto = document.querySelector('.tecnologias-projeto');
    const linkProjeto = document.querySelector('.link-projeto');
    const parametros = new URLSearchParams(window.location.search);
    const nome = parametros.get('nome');
    const descricao = parametros.get('descricao');
    const tecnologias = parametros.get('tecnologias');
    const link = parametros.get('link');

    console.log(nome);        // "Screenning Programming"
    console.log(descricao);   // ""
    console.log(tecnologias); // "HTML, CSS e JavaScript"
    console.log(link);

    nomeProjeto.textContent = nome || 'Nome do Projeto';
    descricaoProjeto.textContent = descricao || 'Descrição do projeto não disponível.';
    tecnologiasProjeto.textContent = tecnologias || 'Tecnologias não especificadas.';
    linkProjeto.href = link || '#';
    linkProjeto.textContent = link ? 'Ver no GitHub' : 'Link não disponível.';
})