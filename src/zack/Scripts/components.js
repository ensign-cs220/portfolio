function zacksNavbar() {
    return {
        open: false,
        entries: [
            { label: 'home', link: '#home', prefix: '01. ' },
            { label: 'about', link: '#about', prefix: '02. ' },
            { label: 'skills', link: '#skills', prefix: '03. ' },
            { label: 'experience', link: '#experience', prefix: '04. ' },
            { label: 'projects', link: '#projects', prefix: '05. ' },
            { label: 'contact', link: '#contact', prefix: '06. ' },
        ],
    };
}

window.zacksNavbar = zacksNavbar;

const skills = function () {
    return {
        languages: [
            {
                name: 'HTML',
                image: 'Images/html5.svg',
                description:
                    'HTML (HyperText Markup Language) is the most basic building block of the Web. It defines the meaning and structure of web content',
            },
            {
                name: 'JavaScript',
                image: 'Images/js.svg',
                description:
                    'JavaScript (JS) is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions. ',
            },
            {
                name: 'PHP',
                image: 'Images/php.svg',
                description:
                    'PHP is a server side scripting language that is embedded in HTML. It is used to manage dynamic content, databases, session tracking, even build entire e-commerce sites.',
            },
            {
                name: 'CSS',
                image: 'Images/css.svg',
                description:
                    'CSS (Cascading Style Sheets) is used to style and layout web pages — for example, to alter the font, color, size, and spacing of your content, split it into multiple columns, or add animations and other decorative features.',
            },
        ],
        async load() {
            const res = await fetch('https://nextjs-red-six-46.vercel.app/api/wakatime/daggerman77', { method: 'GET' });
            const stats = await res.json();
            const { data } = stats;
            const languagesIWant = ['HTML', 'CSS', 'PHP', 'JavaScript'];
            const languageStatsList = data.languages.filter(l => languagesIWant.indexOf(l.name) !== -1);
            for (let i = 0; i < languageStatsList.length; i++) {
                const languageStats = languageStatsList[i];
                const targetLanguage = this.languages.find(l => l.name === languageStats.name);
                targetLanguage.hours = languageStats.hours;
                targetLanguage.decimal = languageStats.decimal;
            }
        },
        progress(language) {
            const percentage = (language.decimal / 1000) * 100;
            return `${percentage}%`;
        },
    };
};
window.$skills = skills;
