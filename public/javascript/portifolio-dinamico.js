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
            <div class="projeto">
                <img src="../public/image/logoSC.png" alt="Projeto 1">
                <h3>Screenning Programming</h3>
                <p>Screenning Programming é um sistema web que tem como objetivo fornecer apoio aos educadores de cursos superiores e técnicos da área de informática a mensurar habilidades cognitivas preditoras de programação.</p>
                <button class="detalhes-btn"><a href="../public/views/projeto.html?tecnologias=${'HTML, CSS e JavaScript'}&nome=${'Screenning Programming'}&link=${'https://github.com/ErosFranklin/ScreenningProgramming2024'}&descricao=${'Screenning Programming é um sistema web que tem como objetivo fornecer apoio aos educadores de cursos superiores e técnicos da área de informática a mensurar habilidades cognitivas preditoras de programação.'}">Detalhes</a></button>
            </div>
            <div class="projeto">
                <img src="../public/image/logo.png" alt="Projeto 2">
                <h3>Staff Com</h3>
                <p>Este projeto é uma plataforma WEB que envolve a criação de uma aplicação de automação de comandas, além de fornecer gerenciamento de funcionários, deixando o uso de métodos manuais para uma aplicação informatizada. A aplicação ainda está em seu estado inicial de desenvolvimento. O sistema contará com frontend, backend e banco de dados integrados.</p>
                 <button class="detalhes-btn"><a href="../public/views/projeto.html?tecnologias=${'HTML, CSS e JavaScript'}&nome=${'Staff Com'}&link=${'https://github.com/ErosFranklin/StaffCom'}&descricao=${'Este projeto é uma plataforma WEB que envolve a criação de uma aplicação de automação de comandas, além de fornecer gerenciamento de funcionários, deixando o uso de métodos manuais para uma aplicação informatizada. A aplicação ainda está em seu estado inicial de desenvolvimento. O sistema contará com frontend, backend e banco de dados integrados.'}">Detalhes</a></button>
            </div> 
            <div class="projeto">
                <img src="../public/image/logo-0-name.png" alt="Projeto 2">
                <h3>Life Fit Boosted</h3>
                <p>O Life Fit Boosted é uma aplicação web completa desenvolvida para ajudar pessoas a monitorarem seus treinos de musculação e dietas de forma eficiente e intuitiva. Nossa missão é tornar o processo de acompanhamento fitness mais simples, permitindo que você se concentre no que realmente importa: seus resultados.</p>
                <button class="detalhes-btn"><a href="../public/views/projeto.html?tecnologias=${'HTML, CSS e JavaScript'}&nome=${'Life Fit Boosted'}&link=${'https://github.com/ErosFranklin/LIFE-FIT-BOOSTED'}&descricao=${'O Life Fit Boosted é uma aplicação web completa desenvolvida para ajudar pessoas a monitorarem seus treinos de musculação e dietas de forma eficiente e intuitiva. Nossa missão é tornar o processo de acompanhamento fitness mais simples, permitindo que você se concentre no que realmente importa: seus resultados.'}">Detalhes</a></button>
            </div> 
            <div class="projeto">
                <img src="../public/image/logo_funcionalize.png" alt="Projeto 2">
                <h3>Funcionalize</h3>
                <p>Funcionalize é uma aplicação web desenvolvida para ajudar no gerenciamento de funcionários, facilitando a comunicação e a organização das tarefas diárias.</p>
                <button class="detalhes-btn"><a href="../public/views/projeto.html?tecnologias=${'HTML, CSS e JavaScript'}&nome=${'Funcionalize'}&link=${'https://github.com/ErosFranklin/Funcionalize'}&descricao=${'Funcionalize é uma aplicação web desenvolvida para ajudar no gerenciamento de funcionários, facilitando a comunicação e a organização das tarefas diárias.'}">Detalhes</a></button>
            </div> 
            <div class="projeto">
                <img src="../public/image/SMAAS-rlogo.png" alt="Projeto 2">
                <h3>SMASS</h3>
                <p>SMASS é uma aplicação web desenvolvida para monitorar as atividades dos agentes de saúde de uma cidade</p>
                <button class="detalhes-btn"><a href="../public/views/projeto.html?tecnologias=${'HTML, CSS e JavaScript'}&nome=${'SMASS'}&link=${'https://github.com/ErosFranklin/Projeto_MAP'}&descricao=${'SMASS é uma aplicação web desenvolvida para monitorar as atividades dos agentes de saúde de uma cidade.'}">Detalhes</a></button>
            </div> 
            <div class="projeto">
                <img src="../public/image/logo_bj.png" alt="Projeto 2">
                <h3>Black Jack</h3>
                <p>Black Jack é uma aplicação web desenvolvida para que os usuarios consigam jogar Black Jack ou o famoso 21</p>
                <button class="detalhes-btn"><a href="../public/views/projeto.html?tecnologias=${'HTML, CSS e TypeScript'}&nome=${'Black Jack'}&link=${'https://github.com/ErosFranklin/Black-Jack'}&descricao=${'Black Jack é uma aplicação web desenvolvida para que os usuarios consigam jogar Black Jack ou o famoso 21.'}">Detalhes</a></button>
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
                    <img src="certificados/thumbnail/cap_certificado_ministrante.png" alt="Certificado HTML">
                </div>
                <div class="certificado">
                    <img src="certificados/thumbnail/cap_certificado_premiacao.png" alt="Certificado HTML">
                </div>
                <div class="certificado">
                    <img src="certificados/thumbnail/cap_certificado_semana0_iv.png" alt="Certificado HTML">
                </div>
                <div class="certificado">
                    <img src="certificados/thumbnail/cap_certificado_semana0_vi.png" alt="Certificado HTML">
                </div>
                 <div class="certificado">
                    <img src="certificados/thumbnail/cap_certificado_semana0_vii.png" alt="Certificado HTML">
                </div>
                <div class="certificado">
                    <img src="certificados/thumbnail/cap_certificado_semana0_viii.png" alt="Certificado HTML">
                </div>
                <div class="certificado">
                    <img src="certificados/thumbnail/cap_sercomp_v_artigo.png" alt="Certificado HTML">
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
                <div class="tecnologia tooltip">
                    <i class="fa-brands fa-html5"></i>
                    <span class="tecnologia-texto">HTML</span>
                </div>
                <div class="tecnologia tooltip">
                    <i class="fa-brands fa-css3"></i>
                    <span class="tecnologia-texto">CSS</span>
                </div>
                <div class="tecnologia tooltip">
                    <i class="fa-brands fa-java"></i>
                    <span class="tecnologia-texto">Java</span>
                </div>
                <div class="tecnologia tooltip">
                    <i class="fa-brands fa-js"></i>
                    <span class="tecnologia-texto">JavaScript</span>
                </div>
                <div class="tecnologia tooltip">
                    <i class="fa-brands fa-node"></i>
                    <span class="tecnologia-texto">Node.js</span>
                </div>
                <div class="tecnologia tooltip">
                    <i class="fa-brands fa-react"></i>
                    <span class="tecnologia-texto">React</span>
                </div>
                <div class="tecnologia tooltip">
                    <i class="fa-brands fa-figma"></i>
                    <span class="tecnologia-texto">Figma</span>
                </div>
                <div class="tecnologia tooltip">
                    <i class="fa-brands fa-github"></i>
                    <span class="tecnologia-texto">GitHub</span>
                </div>
                <div class="tecnologia tooltip">
                    <i class="fa-brands fa-git-alt"></i>
                    <span class="tecnologia-texto">Git</span>
                </div>
                <div class="tecnologia tooltip">
                    <i class="fa-solid fa-code"></i>
                    <span class="tecnologia-texto">VS Code</span>
                </div>
                <div class="tecnologia tooltip">
                    <i class="fa-solid fa-c">++</i>
                    <span class="tecnologia-texto">C++</span>
                </div>
                <div class="tecnologia tooltip">
                    <i class="fa-solid fa-c"></i>
                    <span class="tecnologia-texto">C</span>
                </div>
                <div class="tecnologia tooltip">
                    <i class="fa-brands fa-jira"></i>
                    <span class="tecnologia-texto">Jira</span>
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