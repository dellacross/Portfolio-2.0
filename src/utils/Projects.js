export const GetProjects = async () => {

    const status = [
        'Em planejamento', 
        'Em desenvolvimento', 
        'Fase de testes', 
        'Finalizado', 
        'Em manutenção'
    ]

    const Projects = [
        {
            title: 'Área Restrita',
            description: 'Desenvolvimento front-end do sistema interno da empresa Cotemig - Colégio e Faculdade para alunos, ex-alunos, responsáveis, professores e funcionários.',
            repositoryUrl: 'https://github.com/dellacross/area-restrita',
            restrictUrl: true,
            tools: [
                'devicon-javascript-plain colored',
                'devicon-html5-plain colored',
                'devicon-css3-plain colored',
                'devicon-react-original colored',
                'devicon-reactrouter-plain-wordmark colored'
            ],
            siteUrl: 'https://restrito-beta.cotemig.com.br/',
            status: status[3],
            ownProject: false
        },
        {
            title: 'DepositTracker',
            description: 'Tracker de depósitos para criação e gerenciamento de desafio de depósitos.',
            repositoryUrl: 'https://github.com/dellacross/DepositTracker',
            restrictUrl: false,
            tools: [
                'devicon-typescript-plain colored',
                'devicon-html5-plain colored',
                'devicon-css3-plain colored',
                'devicon-react-original colored',
                'devicon-nodejs-plain colored',
                'devicon-reactrouter-plain-wordmark colored'
            ],
            siteUrl: null,
            status: status[3],
            ownProject: true
        },
        {
            title: 'Conta Certa',
            description: 'Sistema de gerenciamento de gastos pessoais.',
            repositoryUrl: 'https://github.com/dellacross/ContaCerta',
            restrictUrl: true,
            tools: [
                'devicon-javascript-plain colored',
                'devicon-html5-plain colored',
                'devicon-css3-plain colored',
                'devicon-react-original colored',
                'devicon-nodejs-plain colored',
                'devicon-reactrouter-plain-wordmark colored'
            ],
            siteUrl: null,
            status: status[1],
            ownProject: true
        }, 
        {
            title: 'Portfólio',
            description: 'Portfólio pessoal.',
            repositoryUrl: 'https://github.com/dellacross/Portfolio-2.0',
            restrictUrl: false,
            tools: [
                'devicon-javascript-plain colored',
                'devicon-html5-plain colored',
                'devicon-css3-plain colored',
                'devicon-react-original colored',
                'devicon-nodejs-plain colored'
            ],
            siteUrl: null,
            status: status[3],
            ownProject: true
        },
        {
            title: 'Sujeito Pizza',
            description: 'Backend de um sistema de gerenciamento de pedidos de um restaurante fictício.',
            repositoryUrl: 'https://github.com/dellacross/SujeitoPizza',
            restrictUrl: false,
            tools: [
                'devicon-javascript-plain colored',
                'devicon-typescript-plain colored',
                'devicon-nodejs-plain colored'
            ],
            siteUrl: null,
            status: status[3],
            ownProject: true
        },
        {
            title: 'Rede de dados climáticos',
            description: 'Sistema de gerenciamento de dados de uma rede (cliente-servidor - TCP/IP) de dados climáticos de salas de aula de uma universidade fictícia.',
            repositoryUrl: 'https://github.com/dellacross/Redes-TP1',
            restrictUrl: false,
            tools: [
                'devicon-c-plain colored'
            ],
            siteUrl: null,
            status: status[3],
            ownProject: true
        },
        {
            title: 'Rede de sistema elétrico',
            description: 'Sistema de gerenciamento de dados de uma rede (cliente-servidor - TCP/IP) de um sistema elétrico de uma universidade fictícia.',
            repositoryUrl: 'https://github.com/dellacross/Redes-TP2',
            restrictUrl: false,
            tools: [
                'devicon-c-plain colored'
            ],
            siteUrl: null,
            status: status[3],
            ownProject: true
        }
    ]

    return Projects
}
