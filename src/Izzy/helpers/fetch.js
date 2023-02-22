const skills = function () {
    return {
        languages: [],
        async load() {
            const res = await fetch('https://nextjs-red-six-46.vercel.app/api/wakatime/sapoepsilon', { method: 'GET' });
            const javascriptObject = await res.json();
            const { languages } = javascriptObject.data;
            const languagesIWant = ['Dart', 'CSS', 'JavaScript', 'HTML', 'Swift'];

            // fetch all languages

            languagesIWant.forEach(language => {
                const languageObject = {
                    language: {},
                    path: 0,
                };
                languageObject.language = languages.filter(l => l.name === language);
                languageObject.path = `asset/icon/${language}`;
                console.log('Languages', languages);
                this.languages.push(languageObject);
            });

            console.log(`this language${this.languages[0].language.name}`);
        },

        calculatePercentage() {},
    };
};

window.skills = skills;
