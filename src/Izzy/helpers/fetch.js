const skills = function () {
    return {
        languages: [],
        async load() {
            const res = await fetch('https://nextjs-red-six-46.vercel.app/api/wakatime/sapoepsilon', { method: 'GET' });
            const javascriptObject = await res.json();
            const fetchedLangeages = javascriptObject.data;
            const languagesIWant = ['Dart', 'JavaScript', 'HTML', 'Java'];

            // fetch all languages

            languagesIWant.forEach(language => {
                const languageObject = {
                    language: '',
                    path: 0,
                    hours: '',
                    minutes: '',
                    percentage: '',
                };
                languageObject.language = language;
                languageObject.path = `./assets/icons/${language}.svg`;
                const fetchedLanguage = fetchedLangeages.languages.filter(obj => obj.name === language);
                languageObject.hours = fetchedLanguage[0].hours;
                languageObject.minutes = fetchedLanguage[0].minutes;
                languageObject.percentage = `${(100 / 100) * fetchedLanguage[0].hours}%`;
                this.languages.push(languageObject);
            });
            console.log(`languages time: ${this.languages[0].time}`);
        },
    };
};

window.skills = skills;
