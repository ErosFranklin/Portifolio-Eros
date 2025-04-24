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
                    <span class="tecnologias-usadas"> HTML, CSS, JavaScript</span>
                    <a href="" target="_blank">Ver projeto</a>
                </div>
                <div class="projeto">
                    <img src="path/to/image2.jpg" alt="Projeto 2">
                    <h3>Projeto 2</h3>
                    <p>Descrição do projeto 2.</p>
                </div>
            </div>   
        `;

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






});