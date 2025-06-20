
// MENU DE NAVEGAÇÃO
const toggleMenu = document.querySelector('.toggle-menu');
const menu = document.querySelector('.menu-nav');

toggleMenu.onclick = () => {
    menu.classList.toggle('active');
};

menu.onmouseleave = () => {
    menu.classList.remove('active');
}


// MENU DE NAVEGAÇÃO



//PERFIL HEADER
const togglePerfil = document.querySelector('.photo-perfil');
const photoExpanded = document.querySelector('.photo-expanded');
const perfilExpanded = document.querySelector('.photo-expanded div')

togglePerfil.onclick = () => {
    photoExpanded.classList.toggle('active');
}
// Remover active ao clicar fora do .photo-expanded
document.addEventListener('click', (event) => {
    // Verifica se o clique foi fora da .photo-expanded e do botão .photo-perfil
    if (!perfilExpanded.contains(event.target) && !togglePerfil.contains(event.target)) {
        photoExpanded.classList.remove('active');
    }
});
//PERFIL HEADER


//PROJECT EXPANDED
const buttonProject = document.querySelectorAll('.button-project');
const divProjectExpanded = document.querySelector('.project-expanded');
const itemProjectExpanded = document.querySelector('.project-item-expanded');


// OBJETOS ITEM DOS PROJETOS
const projectItem = {
    meca: `
        <div class="container-item-project">
            <div class="header-item-project">
                <h2>Meca Importações</h2>
            </div>
            <div class="content-item-project">
                <div class="img-project-expanded">
                    <img src="/assets/IMG/Meca-Importações.png" title="Projeto para Meca Importações - Empresa" alt="Foto Home Page da Meca Importações">
                </div>
                <div class="text-project-expanded">
                    <h3>Informações do Projeto:</h3>
                    <p>Website desenvolvido para a abertura da empresa Meca Importações.</p>
                    <h3>Detalhes do Projeto:</h3>
                    <p><strong>Tecnologias: </strong>HTML5, CSS3, React, e JavaScript.</p>
                    <p><strong>Data: </strong>16 de Janeiro de 2025</p>
                    <p><strong>Site: </strong><a href="https://www.mecaimportacoes.com.br" target="_blank" rel="noopener noreferrer">www.mecaimportacoes .com.br</a></p>
                </div>
            </div>
        </div>
    `,
    alli: `
        <div class="container-item-project">
            <div class="header-item-project">
                <h2>ALLI Contabilidade</h2>
            </div>
            <div class="content-item-project">
                <div class="img-project-expanded">
                    <img src="/assets/IMG/ALLI-Contabilidade.png" title="Projeto para ALLI Contabilidade - Empresa" alt="Foto Home Page da ALLI Contabilidade">
                </div>
                <div class="text-project-expanded">
                    <h3>Informações do Projeto:</h3>
                    <p>Website desenvolvido para a abertura da empresa ALLI Contabilidade.</p>
                    <h3>Detalhes do Projeto:</h3>
                    <p><strong>Tecnologias: </strong>HTML5, CSS3, React, e JavaScript.</p>
                    <p><strong>Data: </strong>31 de Janeiro de 2025</p>
                    <p><strong>Site: </strong><a href="https://alli-contabilidade.netlify.app/" target="_blank" rel="noopener noreferrer">alli-contabilidade.netlify.app</a></p>
                </div>
            </div>
        </div>
    `,
    rick: `
        <div class="container-item-project">
            <div class="header-item-project">
                <h2>Rick and Morty - Jogo da Memória</h2>
            </div>
            <div class="content-item-project">
                <div class="img-project-expanded">
                    <img src="/assets/IMG/Rick-and-Morty.png" title="Projeto Rick and Morty" alt="Foto Memory Game Rick and Morty">
                </div>
                <div class="text-project-expanded">                    
                    <h3>Informações do Projeto:</h3>
                    <p>Um jogo interativo inspirado no universo de Rick and Morty.</p>
                    <h3>Detalhes do Projeto:</h3>                    
                    <p><strong>Tecnologias: </strong>HTML5, CSS3, e JavaScript.</p>
                    <p><strong>Data: </strong>06 de Junho de 2024</p>
                    <p><strong>Site: </strong><a href="https://github.com/imleodeveloper/rick-and-morty" target="_blank" rel="noopener noreferrer">Repositório GitHub</a></p>
                </div>
            </div>
        </div>
    `,
    vierca: `
        <div class="container-item-project">
            <div class="header-item-project">
                <h2>VierCa Tech</h2>
            </div>
            <div class="content-item-project">
                <div class="img-project-expanded">
                    <img src="/assets/IMG/VierCa-Tech-2.png" title="VierCa Tech" alt="Foto da empresa VierCa Tech">
                </div>
                <div class="text-project-expanded">                    
                    <h3>Informações do Projeto:</h3>
                    <p>Site da minha empresa onde nossos principais serviços são: Desenvolvimento Web e Assistência Técnica.</p>
                    <h3>Detalhes do Projeto:</h3>                    
                    <p><strong>Tecnologias: </strong>HTML5, CSS3, JavaScript com React, GSAP, EmailJS.</p>
                    <p><strong>Data: </strong>01 de Fevereiro de 2025</p>
                    <p><strong>Site: </strong><a href="https://www.viercatech.com.br" target="_blank" rel="noopener noreferrer">www.viercatech.com.br</a></p>
                </div>
            </div>
        </div>
    `,
    rxConsult: `
        <div class="container-item-project">
            <div class="header-item-project">
                <h2>RX Consultoria</h2>
            </div>
            <div class="content-item-project">
                <div class="img-project-expanded">
                    <img src="/assets/IMG/RX-Consultoria.png" title="RX Consultoria" alt="Foto da empresa RX Consultoria">
                </div>
                <div class="text-project-expanded">                    
                    <h3>Informações do Projeto:</h3>
                    <p>Site da consultoria RX, focada em auditória em saúde. </p>
                    <h3>Detalhes do Projeto:</h3>                    
                    <p><strong>Tecnologias: </strong>Desenvolvido via Wix, contém loja, login, e responsividade.</p>
                    <p><strong>Data: </strong>05 de Abril de 2025</p>
                    <p><strong>Site: </strong><a href="https://www.rxconsultoria.com.br" target="_blank" rel="noopener noreferrer">www.rxconsultoria. com.br</a></p>
                </div>
            </div>
        </div>
    `,
    lustraOmega: `
        <div class="container-item-project">
            <div class="header-item-project">
                <h2>Lustra Ômega</h2>
            </div>
            <div class="content-item-project">
                <div class="img-project-expanded">
                    <img src="/assets/IMG/Lustra-Ômega.png" title="Lustra Ômega" alt="Foto da empresa Lustra Ômega">
                </div>
                <div class="text-project-expanded">                    
                    <h3>Informações do Projeto:</h3>
                    <p>Site desenvolvido para a empresa Lustra Ômega, focada em comercialização de panos, EPI's e produtos industriais</p>
                    <h3>Detalhes do Projeto:</h3>                    
                    <p><strong>Tecnologias: </strong>HTML5, CSS3, JavaScript, SwiperSlide, GSAP, ViaCEP e EmailJS.</p>
                    <p><strong>Data: </strong>14 de Abril de 2025</p>
                    <p><strong>Site: </strong><a href="https://www.lustraomega.com.br" target="_blank" rel="noopener noreferrer">www.lustraomega.com.br</a></p>
                </div>
            </div>
        </div>
    `,
    ebookLVC: `
        <div class="container-item-project">
            <div class="header-item-project">
                <h2>eBook para LVC Agência</h2>
            </div>
            <div class="content-item-project">
                <div class="img-project-expanded">
                    <img src="/assets/IMG/ebook-lvc.png" title="eBook para LVC Agência" alt="Foto do eBook: Planejamento e Hábitos para Vencer na Vida.">
                </div>
                <div class="text-project-expanded">                    
                    <h3>Informações do Projeto:</h3>
                    <p>Landing Page desenvolvido para a empresa LVC, do eBook: Planejamento e Hábitos para Vencer na Vida, focado em gerar leads.</p>
                    <h3>Detalhes do Projeto:</h3>                    
                    <p><strong>Tecnologias: </strong>HTML5, CSS3, JavaScript.</p>
                    <p><strong>Data: </strong>01 de Maio de 2025</p>
                    <p><strong>Site: </strong><a href="https://planejamento-e-habitos-para-vencer.netlify.app" target="_blank" rel="noopener noreferrer">https://planejamento-e-habitos-para-vencer.netlify.app/</a></p>
                </div>
            </div>
        </div>
    `,
    test_aMORA: `
        <div class="container-item-project">
            <div class="header-item-project">
                <h2>Teste Front-End para aMORA</h2>
            </div>
            <div class="content-item-project">
                <div class="img-project-expanded">
                    <img src="/assets/IMG/amora.webp" title="Teste Front-End para aMORA" alt="Foto do teste front-end para aMORA">
                </div>
                <div class="text-project-expanded">                    
                    <h3>Informações do Projeto:</h3>
                    <p>O teste consiste em construir uma solução para simulação de compra de um imóvel.</p>
                    <h3>Detalhes do Projeto:</h3>                    
                    <p><strong>Tecnologias: </strong>HTML5, CSS3, JavaScript, Next.js.</p>
                    <p><strong>Data: </strong>06 de Junho de 2025</p>
                    <p><strong>Site: </strong><a href="https://test-front-a-mora.vercel.app" target="_blank" rel="noopener noreferrer">https://test-front-a-mora.vercel.app</a></p>
                </div>
            </div>
        </div>
    `,
    fabioSilvaContabilidade: `
        <div class="container-item-project">
            <div class="header-item-project">
                <h2>Site institucional para Fábio Silva Contabilidade</h2>
            </div>
            <div class="content-item-project">
                <div class="img-project-expanded">
                    <img src="/assets/IMG/fabio-silva-contabilidade.webp" title="Desenvolvimento de site para Fábio Silva Contabilidade" alt="Foto page home, site Fábio Silva Contabilidade">
                </div>
                <div class="text-project-expanded">                    
                    <h3>Informações do Projeto:</h3>
                    <p>Site institucional para a Fábio Silva Contabilidade, com objetivo de adquirir tráfego orgânico com SEO otimizado</p>
                    <h3>Detalhes do Projeto:</h3>                    
                    <p><strong>Tecnologias: </strong>HTML5, CSS3, JavaScript.</p>
                    <p><strong>Data: </strong>Em desenvolvimento</p>
                    <p><strong>Site: </strong><a href="https://www.fabiosilvacontabilidade.com.br/" target="_blank" rel="noopener noreferrer">https://www.fabiosilvacontabilidade.com.br/</a></p>
                </div>
            </div>
        </div>
    `,
    eunivida: `
        <div class="container-item-project">
            <div class="header-item-project">
                <h2>Landing Page desenvolvido para o Espaço Univida</h2>
            </div>
            <div class="content-item-project">
                <div class="img-project-expanded">
                    <img src="/assets/IMG/eunivida.webp" title="Landing Page para Espaço Univida" alt="Desenvolvimento de Landing Page para Espaço Univida">
                </div>
                <div class="text-project-expanded">                    
                    <h3>Informações do Projeto:</h3>
                    <p>Landing Page desenvolvido para a empresa EUNIVIDA, focada em dermatologia</p>
                    <h3>Detalhes do Projeto:</h3>                    
                    <p><strong>Tecnologias: </strong>Desenvolvido via plataforma WIX.</p>
                    <p><strong>Data: </strong>Em desenvolvimento</p>
                    <p><strong>Site: </strong><a href="https://www.eunivida.com.br/" target="_blank" rel="noopener noreferrer">https://www.eunivida.com.br/</a></p>
                </div>
            </div>
        </div>
    `,
};

//add evento para cada button
buttonProject.forEach(button => {
    button.onclick = () => {
        const projectData = button.getAttribute('data-project');
        const content = projectItem[projectData];
        itemProjectExpanded.innerHTML = content;
        divProjectExpanded.classList.add('active');
        divProjectExpanded.scrollIntoView({behavior: "smooth", block: "center"});
    };
});

document.addEventListener('click', (event) => {
    const isClickInsideExpanded = itemProjectExpanded.contains(event.target);
    const isClickOnButton = Array.from(buttonProject).some(button => button.contains(event.target));

    if(!isClickInsideExpanded && !isClickOnButton){
        divProjectExpanded.classList.remove('active');
    }
});
//PROJECT EXPANDED


//ANIMAÇÕES DOCUMENT
document.addEventListener("DOMContentLoaded", () => {
    // Seleciona todos os elementos que devem ser animados
    
    //SECTION WELCOME
    const textWelcome = document.querySelector(".text-welcome");
    const scrollSection = document.querySelector(".scroll-to-section");

    //SECTION ABOUT-ME
    const aboutMeSection = document.querySelector(".about-me-section");

    //SECTION SKILLS
    const skillsSection = document.querySelector('.skills-section-animate');

    //SECTION EXPERIENCE
    const experienceSection = document.querySelector('.exp-section');

    //SECTION PROJECT
    const projectSection = document.querySelector('.project-section-animate');
    
    //SECTION CONTACT
    const contactTitle = document.querySelector('.contact-title');
    const contentContact = document.querySelector('.content-contact');

    // Define o limite (threshold) como 10% da altura da janela
    const threshould = window.innerHeight * 0.1;


    //Function para verificar a visibilidade dos elementos na tela
    const checkVisibility = () => {
        const textWelcomePosition = textWelcome.getBoundingClientRect();
        const scrollSectionPosition = scrollSection.getBoundingClientRect();
        const aboutMePosition = aboutMeSection.getBoundingClientRect();
        const skillsPosition = skillsSection.getBoundingClientRect();
        const experiencePosition = experienceSection.getBoundingClientRect();
        const projectPosition = projectSection.getBoundingClientRect();
        const contactTitlePosition = contactTitle.getBoundingClientRect();
        const contentContactPosition = contentContact.getBoundingClientRect();


        // Verifica se o elemento está visivel na tela
        // WELCOME SECTION
        if(textWelcomePosition.top < window.innerHeight - threshould && 
            textWelcomePosition.bottom > 0
        ){
            textWelcome.classList.add("visible");
        } else {
            textWelcome.classList.remove("visible");
        }

        if(scrollSectionPosition.top < window.innerHeight - threshould && 
            scrollSectionPosition.bottom > 0){
            scrollSection.classList.add('visible');
        }else{
            scrollSection.classList.remove('visible');
        }

        // ABOUT ME SECTION
        if(aboutMePosition.top < window.innerHeight - threshould && 
            aboutMePosition.bottom > 0){
            aboutMeSection.classList.add('visible');
        }else{
            aboutMeSection.classList.remove('visible');
        }

        //SKILLS SECTION
        if(skillsPosition.top < window.innerHeight - threshould &&
            skillsPosition.bottom > 0){
            skillsSection.classList.add('visible');
        } else{
            skillsSection.classList.remove('visible');
        }

        //EXPERIENCE SECTION
        if(experiencePosition.top < window.innerHeight - threshould &&
            experiencePosition.bottom > 0){
            experienceSection.classList.add('visible');
        } else{
            experienceSection.classList.remove('visible');
        }

        //PROJECT  SECTION
        if(projectPosition.top < window.innerHeight - threshould &&
            projectPosition.bottom > 0){
            projectSection.classList.add('visible');
        } else{
            projectSection.classList.remove('visible');
        }

        //************CONTACT  SECTION
        if(contactTitlePosition.top < window.innerHeight - threshould &&
            contactTitlePosition.bottom > 0){
            contactTitle.classList.add('visible');
        } else{
            contactTitle.classList.remove('visible');
        }
        if(contentContactPosition.top < window.innerHeight - threshould &&
            contentContactPosition.bottom > 0){
            contentContact.classList.add('visible');
        } else{
            contentContact.classList.remove('visible');
        }



    };
    //Chama a função na rolagem e ao carregar a página
    window.addEventListener("scroll", checkVisibility);
    checkVisibility();
});
//ANIMAÇÕES DOCUMENT

