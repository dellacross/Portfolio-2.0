const getTime = (date) => {
    const today = new Date();
    const initDate = new Date(date);

    const yearsDiff = today.getFullYear() - initDate.getFullYear();
    const monthsDiff = today.getMonth() - initDate.getMonth();
    const totalMonthsDiff = yearsDiff * 12 + monthsDiff;

    if (totalMonthsDiff < 12) {
        return `${totalMonthsDiff}+ meses`;
    } else {
        const years = Math.floor(totalMonthsDiff / 12);
        return `${years}+ anos`;
    }
}

export const GetExperiences = async () => {

    const status = [
        'Finalizado', 
        'Em andamento'
    ]

    const experience = [
        {
            title: 'Curso de desenvolvimento full stack - Udemy',
            tools: [
                'devicon-react-original colored',
                'devicon-typescript-plain colored',
                'devicon-javascript-plain colored',
                'devicon-html5-plain colored',
                'devicon-css3-plain colored',
                'devicon-nextjs-plain',
                'devicon-nodejs-plain colored',
            ],
            finaliado: true,
            link: 'https://www.udemy.com/certificate/UC-7b61222f-9ff8-42b3-ac10-fa3a389b61f0/',
            experience: null
        },
        {
            title: 'Curso de desenvolvimento web - Udemy',
            tools: [
                'devicon-react-original colored',
                'devicon-javascript-plain colored',
                'devicon-html5-plain colored',
                'devicon-css3-plain colored',
            ],
            finalizado: true,
            link: 'https://www.udemy.com/certificate/UC-c0f8489a-620c-4687-873b-51d54226a028/',
            experience: null
        },
        {
            title: 'Curso de desenvolvimento mobile - Udemy',
            tools: [
                'devicon-react-original colored',
                'devicon-javascript-plain colored',
                'devicon-html5-plain colored',
                'devicon-css3-plain colored',
                'devicon-firebase-plain colored',
                'devicon-redux-original colored'
            ],
            finalizado: false,
            link: null,
            experience: null
        },
        {
            title: 'Desenvolvimento Front-end',
            tools: [
                'devicon-react-original colored',
                'devicon-typescript-plain colored',
                'devicon-javascript-plain colored',
                'devicon-html5-plain colored',
                'devicon-css3-plain colored',
            ],
            finalizado: false,
            link: null,
            experience: getTime('1/11/2022')
        },
        {
            title: 'Desenvolvimento Back-end',
            tools: [
                'devicon-nodejs-plain colored',
                'devicon-typescript-plain colored',
                'devicon-javascript-plain colored',
            ],
            finalizado: false,
            link: null,
            experience: getTime('1/7/2024')
        },
        {
            title: 'Estágio em desenvolvimento web',
            tools: [
                'devicon-react-original colored',
                'devicon-javascript-plain colored',
                'devicon-html5-plain colored',
                'devicon-css3-plain colored',
            ],
            finalizado: false,
            link: null,
            experience: getTime('6/3/2023')
        }
    ]

    return experience
}