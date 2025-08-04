export const GetProfissionalExperiences = async () => {

    const experience = [
        {
            title: 'Desenvolvedor Front-End Junior',
            tools: [
                'devicon-react-original colored',
                'devicon-javascript-plain colored',
                'devicon-html5-plain colored',
                'devicon-css3-plain colored',
                'devicon-axios-plain colored',
                'devicon-reactrouter-plain colored',
                'devicon-postman-plain colored',
                'devicon-materialui-plain colored'
            ],
            finalizado: false,
            link: null,
            company: 'COTEMIG',
            experience: '03/2025 - presente'
        },
        {
            title: 'Estagiáro em desenvolvimento Front-End',
            tools: [
                'devicon-react-original colored',
                'devicon-javascript-plain colored',
                'devicon-html5-plain colored',
                'devicon-css3-plain colored',
                'devicon-axios-plain colored',
                'devicon-reactrouter-plain colored',
                'devicon-postman-plain colored',
                'devicon-materialui-plain colored'
            ],
            finalizado: true,
            link: null,
            company: 'COTEMIG',
            experience: '03/2023 - 02/2025'
        }
    ]

    return experience
}