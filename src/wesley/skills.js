const skills = function () {
    return {
        languages: [],
        async load() {
            const res = await fetch('https://nextjs-red-six-46.vercel.app/api/wakatime/WesleyDSantos', { method: 'GET' });
            const stats = await res.json();
            const { data } = stats;
            const languagesIWant = ['HTML', 'CSS', 'JavaScript', 'Dart'];
            this.languages = data.languages.filter(l => languagesIWant.indexOf(l.name) !== -1);
        },
        calculatePercentage(language) {
            const percentage = (language.decimal / 320) * 100;
            return `${percentage}%`;
        },
    };
};

window.skills = skills;
