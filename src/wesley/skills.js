const skills = function () {
    return {
        languages: [
            {
                name: 'HTML',
                image: 'html5.svg',
                description:
                    'HTML is essential for creating web content with a wide range of applications, constantly evolving to meet changing needs and remaining vital.',
            },
            {
                name: 'CSS',
                image: 'css.svg',
                description: 'CSS is critical for creating visually appealing and consistent web designs across devices and platforms.',
            },
            {
                name: 'JavaScript',
                image: 'js.svg',
                description:
                    'JavaScript has grown to become one of the most popular programming languages in the world, with a large and active developer community.',
            },
        ],
        async load() {
            const res = await fetch('https://nextjs-red-six-46.vercel.app/api/wakatime/WesleyDSantos', { method: 'GET' });
            const stats = await res.json();
            const { data } = stats;
            const languagesIWant = ['HTML', 'CSS', 'JavaScript'];
            const languageStatsList = data.languages.filter(l => languagesIWant.indexOf(l.name) !== -1);
            for (let i = 0; i < languageStatsList.length; i++) {
                const languageStats = languageStatsList[i];
                const targetLanguage = this.languages.find(l => l.name === languageStats.name);
                targetLanguage.hours = languageStats.hours;
                targetLanguage.decimal = languageStats.decimal;
            }
        },
        progress(language) {
            const percentage = (language.decimal / 320) * 100;
            return `${percentage}%`;
        },
    };
};
window.skills = skills;
