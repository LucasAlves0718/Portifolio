// Bilingual Translation Dictionary
const TRANSLATIONS = {
    pt: {
        nav_home: "Início",
        nav_about: "Sobre Mim",
        nav_stack: "Tecnologias",
        nav_projects: "Projetos",
        nav_education: "Educação",
        nav_contact: "Contato",
        hero_status: "Aberto a Oportunidades",
        hero_title: 'Lucas Alves <span class="gradient-name">Corrêa dos Santos</span>',
        hero_desc: "Estudante de Ciência da Computação com formação técnica em Desenvolvimento de Sistemas. Experiência prática no desenvolvimento de aplicações web, APIs e projetos de software utilizando Python, Django, JavaScript, Node.js e bancos de dados relacionais. Interesse em Backend, Engenharia de Software, Tecnologia Esportiva e Desenvolvimento de Jogos.",
        btn_resume: "Download Currículo",
        btn_contact: "Contato",
        title_about: "Sobre Mim",
        about_p1: "Técnico em Desenvolvimento de Sistemas formado pela <strong>ETEC Professora Ilza Nascimento Pintus</strong> (2023 – 2025). Durante o curso técnico, consolidei uma base sólida em algoritmos, modelagem de dados e desenvolvimento de software completo.",
        about_p2: "Atualmente, curso Bacharelado em <strong>Ciência da Computação na Universidade Federal do Pampa (UNIPAMPA)</strong>. Sou apaixonado por resolver problemas lógicos complexos e desenvolver aplicações eficientes que resolvem gargalos de negócio.",
        about_p3: "Meu foco principal é o ecossistema de <strong>Backend e Engenharia de Software</strong>, estruturando códigos limpos, arquiteturas sustentáveis e fluxos de dados seguros.",
        about_interests_title: '<i data-lucide="sparkles"></i> Focos de Interesse',
        interest_1: "Backend & Desenvolvimento de APIs",
        interest_2: "Engenharia de Software & Arquitetura",
        interest_3: "Desenvolvimento de Jogos & POO",
        interest_4: "Data Analytics Aplicado a Esportes",
        interest_5: "Modelagem Relacional & Otimização de Bancos",
        title_stack: "Stack Tecnológica",
        stack_cat_languages: "Linguagens",
        stack_cat_backend: "Backend",
        stack_cat_databases: "Bancos de Dados",
        stack_cat_frontend: "Front-End",
        stack_cat_tools: "Ferramentas",
        lang_pt_title: "Português",
        lang_pt_desc: "Nativo",
        lang_en_title: "Inglês",
        lang_en_desc: "Avançado",
        lang_es_title: "Espanhol",
        lang_es_desc: "Intermediário",
        title_projects: "Projetos em Destaque",
        proj1_title: "DraftMe — Conexão Esportiva",
        proj1_desc: "Plataforma desenvolvida para aproximar jovens atletas de oportunidades esportivas e clubes de futebol/basquete por meio da tecnologia.",
        proj_resp_title: "Minhas Responsabilidades:",
        proj1_resp1: "Desenvolvimento completo da interface web responsiva.",
        proj1_resp2: "Implementação de regras de negócio e fluxos de cadastro.",
        proj1_resp3: "Estruturação da experiência de usuário intuitiva.",
        proj2_title: "Aplicações Web e APIs REST",
        proj2_desc: "Desenvolvimento de ecossistemas backend robustos com foco em desempenho, segurança e separação clara de responsabilidades.",
        proj_feat_title: "Destaques Técnicos:",
        proj2_feat1: "APIs RESTful seguras com autenticação JWT.",
        proj2_feat2: "Integração com MySQL/PostgreSQL com modelagem relacional limpa.",
        proj2_feat3: "Rotas protegidas com controle de acesso baseado em níveis.",
        proj3_title: "Desenvolvimento de Jogos",
        proj3_desc: "Projetos autorais voltados ao estudo de motores de renderização, simulação física de gameplay e sistemas de IA básica.",
        proj_concepts_title: "Conceitos Aplicados:",
        proj3_concept1: "Programação Orientada a Objetos (POO) avançada.",
        proj3_concept2: "Máquinas de Estados (FSM) para gerenciamento de gameplay.",
        proj3_concept3: "Renderização de cenários 3D e detecção de colisões.",
        title_timeline: "Jornada e Formação",
        time1_title: "ETEC Professora Ilza Nascimento Pintus",
        time1_subtitle: "Técnico em Desenvolvimento de Sistemas",
        time1_desc: "Consolidação de conceitos em engenharia de requisitos, lógica estruturada, Programação Orientada a Objetos e banco de dados relacionais MySQL. Criação de projetos práticos e modelagem de sistemas corporativos.",
        time2_title: "Desenvolvimento de Projetos Web",
        time2_subtitle: "Aplicações Full Stack & Front-End",
        time2_desc: "Desenvolvimento e design de projetos completos, incluindo a plataforma DraftMe para atletas. Uso prático de PHP, estruturação de grids flexíveis com HTML/CSS e integração com MySQL.",
        time3_title: "Especialização em APIs REST",
        time3_subtitle: "Foco em Arquiteturas Backend",
        time3_desc: "Modelagem de serviços RESTful, validação de tokens JWT, controle de rotas seguras e arquitetura CRUD complexa. Experiência de desenvolvimento com Django, Flask e Node.js.",
        time4_title: "Estudo de Programação de Jogos",
        time4_subtitle: "Motores Gráficos e Estrutura Lógica",
        time4_desc: "Aplicação de conceitos matemáticos, gerenciamento de loop principal, sincronização e física de colisão. Desenvolvimento de scripts customizados com GDScript (Godot Engine) e Panda3D (Python).",
        time5_title: "Universidade Federal do Pampa (UNIPAMPA)",
        time5_subtitle: "Bacharelado em Ciência da Computação",
        time5_desc: "Aprofundamento em computação teórica, análise de algoritmos complexos, arquitetura de computadores e metodologias modernas de engenharia de software para projetos de larga escala.",
        time6_badge: "Objetivo de Carreira",
        time6_title: "Engenheiro de Software Backend",
        time6_subtitle: "Foco em Sistemas Escalonáveis",
        time6_desc: "Construir sistemas eficientes e integrados, microserviços escaláveis, data engineering aplicável a tecnologia esportiva e arquiteturas de alta disponibilidade em nuvem.",
        title_github: "Portfólio GitHub",
        github_repos_title: "Repositórios Recentes",
        github_see_all: "Ver tudo no GitHub",
        github_stats_title: "Estatísticas Gerais",
        github_langs_title: "Linguagens mais utilizadas",
        github_graph_title: "Calendário de Atividade",
        title_contact_sec: "Vamos Conversar",
        contact_greeting: "Fale Comigo!",
        contact_desc: "Estou em busca de minha primeira vaga de estágio ou cargo júnior na área de Engenharia de Software e Desenvolvimento Backend. Sinta-se à vontade para entrar em contato se você tiver uma oportunidade ou quiser colaborar em um projeto!",
        form_label_name: "Seu Nome",
        form_label_email: "Seu E-mail",
        form_label_message: "Sua Mensagem",
        form_submit: "Enviar Mensagem",
        footer_rights: "Todos os direitos reservados.",
        footer_credits: "Construído com HTML5, CSS3 Puro, JavaScript ES6 e APIs Integradas."
    },
    en: {
        nav_home: "Home",
        nav_about: "About Me",
        nav_stack: "Tech Stack",
        nav_projects: "Projects",
        nav_education: "Education",
        nav_contact: "Contact",
        hero_status: "Open to Opportunities",
        hero_title: 'Lucas Alves <span class="gradient-name">Corrêa dos Santos</span>',
        hero_desc: "Computer Science student with a technical background in Systems Development. Practical experience in developing web applications, APIs, and software projects using Python, Django, JavaScript, Node.js, and relational databases. Interested in Backend, Software Engineering, Sports Technology, and Game Development.",
        btn_resume: "Download Resume",
        btn_contact: "Contact",
        title_about: "About Me",
        about_p1: "Technical degree in Systems Development from <strong>ETEC Professora Ilza Nascimento Pintus</strong> (2023 – 2025). During the program, I established a solid foundation in algorithm logic, data modeling, and full-stack software development.",
        about_p2: "Currently, I am pursuing a Bachelor's in <strong>Computer Science at the Federal University of Pampa (UNIPAMPA)</strong>. I am passionate about solving complex logical challenges and building efficient systems that address real business bottlenecks.",
        about_p3: "My primary engineering focus is on the <strong>Backend and Software Engineering</strong> ecosystem, structuring clean code, scalable service layouts, and secure data pipelines.",
        about_interests_title: '<i data-lucide="sparkles"></i> Focus Areas',
        interest_1: "Backend & API Development",
        interest_2: "Software Engineering & Architecture",
        interest_3: "Game Development & OOP",
        interest_4: "Sports Data Analytics",
        interest_5: "Relational Modeling & DB Optimization",
        title_stack: "Technical Stack",
        stack_cat_languages: "Languages",
        stack_cat_backend: "Backend",
        stack_cat_databases: "Databases",
        stack_cat_frontend: "Front-End",
        stack_cat_tools: "Tools",
        lang_pt_title: "Portuguese",
        lang_pt_desc: "Native",
        lang_en_title: "English",
        lang_en_desc: "Advanced",
        lang_es_title: "Spanish",
        lang_es_desc: "Intermediate",
        title_projects: "Featured Projects",
        proj1_title: "DraftMe — Sports Scouting",
        proj1_desc: "A networking platform developed to connect young athletic talent with professional sports scouts and clubs using technology.",
        proj_resp_title: "My Responsibilities:",
        proj1_resp1: "Full developer of the responsive, modern web interface.",
        proj1_resp2: "Implementation of business logic and dynamic onboarding workflows.",
        proj1_resp3: "Structuring user-friendly UX architecture.",
        proj2_title: "Web Apps & RESTful APIs",
        proj2_desc: "Development of robust backend systems focusing on high performance, secure communication, and clean separation of concerns.",
        proj_feat_title: "Technical Highlights:",
        proj2_feat1: "Secure RESTful APIs backed by JWT authentication.",
        proj2_feat2: "MySQL/PostgreSQL integrations with structured relational models.",
        proj2_feat3: "Protected endpoints with granular user-level authorization.",
        proj3_title: "Game Development",
        proj3_desc: "Independent projects built to explore rendering engines, physical gameplay loops, and fundamental AI systems.",
        proj_concepts_title: "Applied Concepts:",
        proj3_concept1: "Advanced Object-Oriented Programming (OOP) architectures.",
        proj3_concept2: "Finite State Machines (FSM) for core gameplay loops.",
        proj3_concept3: "3D scene loading, camera control, and collision meshes.",
        title_timeline: "Journey & Education",
        time1_title: "ETEC Professora Ilza Nascimento Pintus",
        time1_subtitle: "Technical degree in Systems Development",
        time1_desc: "Acquired fundamental logic foundations, systems analysis, object-oriented concepts, and relational SQL structure using MySQL. Designed real-world workflows and database schemas.",
        time2_title: "Web Projects Development",
        time2_subtitle: "Full Stack & Front-End Dev",
        time2_desc: "Engineered responsive full-stack applications, featuring DraftMe sports connection. Acquired PHP experience, HTML/CSS layout grid layouts, and MySQL queries.",
        time3_title: "REST APIs Specialization",
        time3_subtitle: "Backend Services Focus",
        time3_desc: "Implemented RESTful routes, JWT authentication layers, controller logic, and CRUD operations. Hands-on experience writing backend scripts with Django, Flask, and Node.js.",
        time4_title: "Game Programming Studies",
        time4_subtitle: "Physics Loops & Object Architecture",
        time4_desc: "Implemented main loop updates, coordinate translation, boundary physics, and asset loading. Developed custom logic scripts in Godot (GDScript) and Panda3D (Python).",
        time5_title: "Federal University of Pampa (UNIPAMPA)",
        time5_subtitle: "Bachelor of Computer Science",
        time5_desc: "Deep diving into computer science theory, complexity analysis, assembly, discrete mathematics, and modern software design concepts for high scalability.",
        time6_badge: "Career Objective",
        time6_title: "Backend Software Engineer",
        time6_subtitle: "High-Availability Systems Focus",
        time6_desc: "Develop high-efficiency distributed services, microservice interfaces, data orchestration, and cloud systems for tech environments.",
        title_github: "GitHub Portfolio",
        github_repos_title: "Recent Repositories",
        github_see_all: "See all on GitHub",
        github_stats_title: "General Stats",
        github_langs_title: "Top Languages Used",
        github_graph_title: "Activity Calendar",
        title_contact_sec: "Let's Connect",
        contact_greeting: "Get in Touch!",
        contact_desc: "I am actively looking for internship or junior positions in Software Engineering and Backend Development. Feel free to contact me if you have a job opportunity, project query, or just want to connect!",
        form_label_name: "Your Name",
        form_label_email: "Your Email",
        form_label_message: "Your Message",
        form_submit: "Send Message",
        footer_rights: "All rights reserved.",
        footer_credits: "Built with HTML5, Pure CSS3, JavaScript ES6, and Integrated APIs."
    }
};

// Global State
let currentLanguage = localStorage.getItem('preferred-language') || 'pt';

// Typewriter variables
const TYPEWRITER_WORDS = {
    pt: ["Desenvolvimento Web", "APIs & Backend", "Desenvolvimento de Jogos", "Bancos de Dados", "Engenharia de Software"],
    en: ["Web Development", "APIs & Backend", "Game Development", "Databases", "Software Engineering"]
};
const TYPING_DELAY = 90;
const ERASING_DELAY = 60;
const NEW_WORD_DELAY = 2200;

let wordIndex = 0;
let charIndex = 0;
let isErasing = false;
let typewriterTimeout = null;

// Initialize Elements
document.addEventListener("DOMContentLoaded", () => {
    // 1. Setup Navigation Scroll effect
    setupNavbarScroll();

    // 2. Setup Mobile Navigation Menu
    setupMobileMenu();

    // 3. Setup Language switch
    setupLanguageToggler();

    // 4. Start Typewriter
    startTypewriter();

    // 5. Setup Scroll Animation (Intersection Observer)
    setupScrollReveal();

    // 6. Fetch GitHub Repositories
    fetchGitHubRepos();

    // 7. Setup Interactive Contact Form
    setupContactForm();

    // 8. Render Initial Lucide Icons
    lucide.createIcons();

    // 9. Parallax spotlights effect
    setupSpotlightsMovement();
});

// Scroll Navbar Effect
function setupNavbarScroll() {
    const navbar = document.getElementById("navbar");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
        updateActiveNavLink();
    });
}

// Mobile Menu Handler
function setupMobileMenu() {
    const mobileMenuBtn = document.getElementById("mobile-menu-toggle");
    const navLinks = document.getElementById("nav-links");

    mobileMenuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("active");
        mobileMenuBtn.classList.toggle("active");

        // Hamburguer morph animation
        const bars = mobileMenuBtn.querySelectorAll(".bar");
        if (mobileMenuBtn.classList.contains("active")) {
            bars[0].style.transform = "rotate(-45deg) translate(-5px, 6px)";
            bars[1].style.opacity = "0";
            bars[2].style.transform = "rotate(45deg) translate(-5px, -6px)";
        } else {
            bars[0].style.transform = "none";
            bars[1].style.opacity = "1";
            bars[2].style.transform = "none";
        }
    });

    // Close menu when clicking link
    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
            mobileMenuBtn.classList.remove("active");
            const bars = mobileMenuBtn.querySelectorAll(".bar");
            bars[0].style.transform = "none";
            bars[1].style.opacity = "1";
            bars[2].style.transform = "none";
        });
    });
}

// Language System Toggle
function setupLanguageToggler() {
    const toggleBtn = document.getElementById("lang-toggle-btn");

    // Set initial toggle layout
    setLanguageClass(currentLanguage);
    applyLanguage(currentLanguage);

    toggleBtn.addEventListener("click", () => {
        currentLanguage = currentLanguage === 'pt' ? 'en' : 'pt';
        setLanguageClass(currentLanguage);

        // Add dynamic fade out/in effect
        document.querySelectorAll("[data-i18n]").forEach(el => el.classList.add("translating"));

        setTimeout(() => {
            applyLanguage(currentLanguage);
            document.querySelectorAll("[data-i18n]").forEach(el => el.classList.remove("translating"));
        }, 150);
    });
}

function setLanguageClass(lang) {
    const toggleBtn = document.getElementById("lang-toggle-btn");
    if (lang === 'en') {
        toggleBtn.classList.remove("pt-active");
        toggleBtn.classList.add("en-active");
    } else {
        toggleBtn.classList.remove("en-active");
        toggleBtn.classList.add("pt-active");
    }
}

function applyLanguage(lang) {
    localStorage.setItem('preferred-language', lang);
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';

    // Loop translations dictionary
    document.querySelectorAll("[data-i18n]").forEach(element => {
        const translationKey = element.getAttribute("data-i18n");
        if (TRANSLATIONS[lang][translationKey]) {
            element.innerHTML = TRANSLATIONS[lang][translationKey];
        }
    });

    // Recreate Lucide Icons to re-bind icons in translated tags
    lucide.createIcons();

    // Localize Input Placeholders
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");

    if (nameInput && emailInput && messageInput) {
        nameInput.placeholder = lang === 'pt' ? 'Digite seu nome' : 'Enter your name';
        emailInput.placeholder = lang === 'pt' ? 'seuemail@exemplo.com' : 'yourname@example.com';
        messageInput.placeholder = lang === 'pt' ? 'Como posso te ajudar?' : 'How can I help you?';
    }

    // Reset typewriter with new localized lists
    resetTypewriter();
}

// Typewriter Mechanism
function startTypewriter() {
    const typedTextElement = document.getElementById("typed-text");
    const words = TYPEWRITER_WORDS[currentLanguage];
    const currentWord = words[wordIndex];

    if (isErasing) {
        typedTextElement.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typedTextElement.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
    }

    let delay = isErasing ? ERASING_DELAY : TYPING_DELAY;

    if (!isErasing && charIndex === currentWord.length) {
        isErasing = true;
        delay = NEW_WORD_DELAY; // pause at peak
    } else if (isErasing && charIndex === 0) {
        isErasing = false;
        wordIndex = (wordIndex + 1) % words.length;
        delay = 400; // brief pause before next word
    }

    typewriterTimeout = setTimeout(startTypewriter, delay);
}

function resetTypewriter() {
    if (typewriterTimeout) clearTimeout(typewriterTimeout);
    wordIndex = 0;
    charIndex = 0;
    isErasing = false;
    const typedTextElement = document.getElementById("typed-text");
    if (typedTextElement) typedTextElement.textContent = "";
    startTypewriter();
}

// Active Nav Link Tracker
function updateActiveNavLink() {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-links a");

    let currentActiveId = "";
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        if (window.scrollY >= sectionTop) {
            currentActiveId = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${currentActiveId}`) {
            link.classList.add("active");
        }
    });
}

// Scroll reveal observer
function setupScrollReveal() {
    const revealOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("section-visible");
                observer.unobserve(entry.target);
            }
        });
    }, revealOptions);

    document.querySelectorAll(".section-hidden").forEach(section => {
        observer.observe(section);
    });
}

// Language color lookup helper
function getLangColor(language) {
    const colors = {
        'Python': '#3572A5',
        'JavaScript': '#f1e05a',
        'TypeScript': '#3178c6',
        'PHP': '#4F5D95',
        'HTML': '#e34c26',
        'CSS': '#563d7c',
        'GDScript': '#355570',
        'C#': '#178600',
        'C': '#555555',
        'Shell': '#89e051',
        'Vue': '#41b883',
        'Java': '#b07219'
    };
    return colors[language] || '#8e8e8e';
}

// Fallback repositories database in case GitHub API rate limit is exceeded
const FALLBACK_REPOS = [
    {
        name: "Crud-Mundo",
        html_url: "https://github.com/LucasAlves0718/Crud-Mundo",
        description: "Sistema CRUD completo com modelagem de banco de dados relacional e integração dinâmica (PHP / MySQL).",
        description_en: "Complete CRUD system with relational database modeling and dynamic backend integration (PHP / MySQL).",
        language: "PHP",
        stargazers_count: 1,
        forks_count: 0
    },
    {
        name: "DraftMe",
        html_url: "https://github.com/LucasAlves0718",
        description: "Plataforma de recrutamento voltada à aproximação entre atletas juvenis e agremiações esportivas.",
        description_en: "Recruiting platform designed to connect youth athletes with professional sports clubs and scouts.",
        language: "PHP",
        stargazers_count: 1,
        forks_count: 0
    },
    {
        name: "BahSquete",
        html_url: "https://github.com/LucasAlves0718",
        description: "Sistema inteligente para gerenciamento, estatísticas e acompanhamento de torneios de basquete.",
        description_en: "Smart system for analytics, management, and tracking of basketball tournaments.",
        language: "TypeScript",
        stargazers_count: 0,
        forks_count: 0
    }
];

// Fetch GitHub Repositories
function fetchGitHubRepos() {
    const reposRoot = document.getElementById("github-repos-root");
    const username = "LucasAlves0718";

    fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=12`)
        .then(response => {
            if (!response.ok) {
                throw new Error("API Limit exceeded or failed query");
            }
            return response.json();
        })
        .then(data => {
            // Filter forks out, we only want Lucas's direct work
            let originalRepos = data.filter(repo => !repo.fork);

            // Limit to 3 or 4 repositories
            originalRepos = originalRepos.slice(0, 4);

            if (originalRepos.length === 0) {
                renderFallbackRepos(reposRoot);
                return;
            }

            reposRoot.innerHTML = "";
            originalRepos.forEach(repo => {
                const card = createRepoCardHTML(repo);
                reposRoot.appendChild(card);
            });
            lucide.createIcons();
        })
        .catch(err => {
            console.warn("GitHub API rate limit or error, loading high-fidelity fallback repos.", err);
            renderFallbackRepos(reposRoot);
        });
}

function renderFallbackRepos(container) {
    container.innerHTML = "";
    FALLBACK_REPOS.forEach(repo => {
        const repoData = {
            name: repo.name,
            html_url: repo.html_url,
            description: currentLanguage === 'pt' ? repo.description : repo.description_en,
            language: repo.language,
            stargazers_count: repo.stargazers_count,
            forks_count: repo.forks_count
        };
        const card = createRepoCardHTML(repoData);
        container.appendChild(card);
    });
    lucide.createIcons();
}

function createRepoCardHTML(repo) {
    const cardLink = document.createElement("a");
    cardLink.href = repo.html_url;
    cardLink.target = "_blank";
    cardLink.rel = "noopener noreferrer";
    cardLink.className = "repo-card glass-panel";

    const desc = repo.description || (currentLanguage === 'pt' ? 'Sem descrição adicionada.' : 'No description provided.');

    cardLink.innerHTML = `
        <div class="repo-top">
            <div class="repo-title-wrapper">
                <span class="repo-name">${repo.name}</span>
                <i data-lucide="arrow-up-right" style="width:14px; height:14px; opacity:0.6;"></i>
            </div>
            <p class="repo-desc">${desc}</p>
        </div>
        <div class="repo-meta">
            <span class="repo-lang">
                <span class="lang-dot" style="background-color: ${getLangColor(repo.language)}"></span>
                <span>${repo.language || 'Code'}</span>
            </span>
            <span class="repo-stat-item">
                <i data-lucide="star" style="width:12px; height:12px; fill:var(--text-secondary); stroke:none;"></i>
                <span>${repo.stargazers_count}</span>
            </span>
            <span class="repo-stat-item">
                <i data-lucide="git-fork" style="width:12px; height:12px;"></i>
                <span>${repo.forks_count}</span>
            </span>
        </div>
    `;
    return cardLink;
}

// Simulated Contact Form Submission
function setupContactForm() {
    const contactForm = document.getElementById("contact-form");
    const statusText = document.getElementById("form-status");

    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const submitBtn = contactForm.querySelector("button[type='submit']");
        const originalBtnText = submitBtn.innerHTML;

        // Visual loading feedback
        submitBtn.disabled = true;
        submitBtn.innerHTML = currentLanguage === 'pt' ? '<i data-lucide="loader" class="animate-spin"></i> Enviando...' : '<i data-lucide="loader" class="animate-spin"></i> Sending...';
        lucide.createIcons();

        // Simulate API network request
        setTimeout(() => {
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalBtnText;
            lucide.createIcons();

            // Clear fields
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("message").value = "";

            // Show success message
            statusText.className = "form-status success";
            statusText.textContent = currentLanguage === 'pt'
                ? "Mensagem simulada enviada com sucesso! Obrigado pelo contato."
                : "Simulated message sent successfully! Thanks for reaching out.";

            setTimeout(() => {
                statusText.style.display = "none";
            }, 6000);
        }, 1500);
    });
}

// Light spotlights movement following the cursor
function setupSpotlightsMovement() {
    document.addEventListener("mousemove", (e) => {
        const x = (e.clientX - window.innerWidth / 2) * 0.04;
        const y = (e.clientY - window.innerHeight / 2) * 0.04;

        const glows = document.querySelectorAll(".glow-spot");
        glows.forEach((glow, index) => {
            const direction = index % 2 === 0 ? 1 : -1;
            glow.style.transform = `translate(${x * direction}px, ${y * direction}px)`;
        });
    });
}
