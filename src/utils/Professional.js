const getTime = (date) => {
    const today = new Date();
    const initDate = new Date(date);

    const yearsDiff = today.getFullYear() - initDate.getFullYear();
    const monthsDiff = today.getMonth() - initDate.getMonth();
    const totalMonthsDiff = yearsDiff * 12 + monthsDiff;

    if (totalMonthsDiff < 12) return `${totalMonthsDiff}+ meses`
    else {
        const years = Math.floor(totalMonthsDiff / 12);
        return `${years}+ anos`;
    }
}

export const GetProfissionalExperiences = async () => {

    const experience = [
        {
            title: 'Desenvolvedor Front-end Junior',
            tools: [
                'devicon-react-original colored',
                'devicon-javascript-plain colored',
                'devicon-html5-plain colored',
                'devicon-css3-plain colored',
            ],
            finalizado: false,
            link: null,
            company: 'COTEMIG',
            experience: getTime('1/3/2025')
        }
    ]

    return experience
}