document.addEventListener('DOMContentLoaded', function() {
    const btnProjetos = document.querySelector('#botao-projetos');
    const btnCertificados = document.querySelector('#botao-certificados');
    const btnHabilidades = document.querySelector('#botao-tecnologias');

    const containerPortifolio = document.querySelector('.dados-portifolio');

    btnProjetos.addEventListener('click', function() {
        const dadosProjetos = document.createElement('div');
        dadosProjetos.classList.add('container-projetos');

        if (containerPortifolio.firstChild) {
            containerPortifolio.removeChild(containerPortifolio.firstChild);
        }

        dadosProjetos.innerHTML = `
            <div class="projetos">
            <div class="projeto">
                <img src="path/to/image1.jpg" alt="Projeto 1">
                <h3>Projeto 1</h3>
                <p>Descrição do projeto 1.</p>
                <button class="detalhes-btn" data-nome="Projeto 1" data-descricao="Descrição detalhada do projeto 1." data-tecnologias="HTML, CSS, JavaScript" data-link="https://linkprojeto1.com">Detalhes</button>
            </div>
            <div class="projeto">
                <img src="path/to/image2.jpg" alt="Projeto 2">
                <h3>Projeto 2</h3>
                <p>Descrição do projeto 2.</p>
                <button class="detalhes-btn" data-nome="Projeto 2" data-descricao="Descrição detalhada do projeto 2." data-tecnologias="React, Node.js" data-link="https://linkprojeto2.com">Detalhes</button>
            </div>
            </div>   
        `;

        const detalhesBtns = dadosProjetos.querySelectorAll('.detalhes-btn');
        detalhesBtns.forEach(btn => {
            btn.addEventListener('click', function() {
            const nome = btn.getAttribute('data-nome');
            const descricao = btn.getAttribute('data-descricao');
            const tecnologias = btn.getAttribute('data-tecnologias');
            const link = btn.getAttribute('data-link');
            modalProjeto(nome, descricao, tecnologias, link);
            });
        });

        containerPortifolio.appendChild(dadosProjetos);
    });
    btnCertificados.addEventListener('click', function() {
        const dadosCertificados = document.createElement('div');
        dadosCertificados.classList.add('container-certificados');

        if (containerPortifolio.firstChild) {
            containerPortifolio.removeChild(containerPortifolio.firstChild);
        }

        dadosCertificados.innerHTML = `
            <div class="certificados">
                <div class="certificado">
                    <img src="path/to/image1.jpg" alt="Projeto 1">
                </div>
                <div class="certificado">
                    <img src="path/to/image2.jpg" alt="Projeto 2">
                </div>
            </div>   
        `;

        containerPortifolio.appendChild(dadosCertificados);
    });

    btnHabilidades.addEventListener('click', function() {
        const dadosTecnologias = document.createElement('div');
        dadosTecnologias.classList.add('container-tecnlogias');

        if (containerPortifolio.firstChild) {
            containerPortifolio.removeChild(containerPortifolio.firstChild);
        }

        dadosTecnologias.innerHTML = `
            <div class="tecnologias">
                <div class="tecnologia">
                    <img src="path/to/image1.jpg" alt="Tecnologia 1">
                </div>
                <div class="tecnologia">
                    <img src="path/to/image2.jpg" alt="Tecnologia 2">
                </div>
            </div>   
        `;

        containerPortifolio.appendChild(dadosTecnologias);
    });

    function modalProjeto(nomeProjeto, descricao, tecnologias, link) {
        const modal = document.createElement('div');
        modal.classList.add('modal-projeto');
        modal.innerHTML = `
            <div class="modal-conteudo">
                <h3>${nomeProjeto}</h3>
                <p>${descricao}</p>
                <span class="tecnologias-usadas">${tecnologias}</span>
                <a href="${link}" target="_blank">Ver projeto</a>
                <button class="fechar-modal">Fechar</button>
            </div>
        `;

        document.body.appendChild(modal);

        const fecharModal = modal.querySelector('.fechar-modal');
        fecharModal.addEventListener('click', function() {
            document.body.removeChild(modal);
        });
    }
    const projeto1 = document.querySelector('.projeto:nth-child(1)');






});