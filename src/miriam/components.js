// script for the skills section cards
const skills = function () {
    return {
        languages: [
            {
                name: 'HTML',
                image: 'images/html logo.png',
                description:
                    'HTML is essential for creating web content with a wide range of applications, constantly evolving to meet changing needs and remaining vital.',
            },
            {
                name: 'Dart',
                image: 'images/dart logo.png',
                description:
                    'Dart is a language designed for ease of mobile-app creation. It is object-oriented and class-based with C-style syntax.',
            },
            {
                name: 'Java',
                image: 'images/java logo.png',
                description:
                    'Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.',
            },
            {
                name: 'JavaScript',
                image: 'images/javascript logo.png',
                description:
                    'JavaScript has grown to become one of the most popular programming languages in the world, with a large and active developer community.',
            },
            {
                name: 'CSS',
                image: 'images/css logo.png',
                description: 'CSS is critical for creating visually appealing and consistent web designs across devices and platforms.',
            },
        ],
        async load() {
            const res = await fetch('https://nextjs-red-six-46.vercel.app/api/wakatime/miriamjb', { method: 'GET' });
            const stats = await res.json();
            const { data } = stats;
            const languagesWanted = ['HTML', 'JavaScript', 'CSS', 'Dart', 'Java'];
            const langStatList = data.languages.filter(l => languagesWanted.indexOf(l.name) !== -1);
            for (let i = 0; i < langStatList.length; i++) {
                const langStats = langStatList[i];
                const targetLang = this.languages.find(l => l.name === langStatList.name);
                targetLang.hours = langStats.hours;
                targetLang.decimal = langStats.decimal;
            }
        },
        progress(language) {
            const percentage = (language.decimal / 320) * 100;
            return `${percentage}%`;
        },
    };
};
window.$skills = skills;

// async function simpleGet() {
//     try {
//         const res = await fetch('https://wakatime.com/api/v1/users/miriamjb/stats/all_time', { method: 'GET' });
//         const stats = await res.json();

//         const top5 = [];
//         const data = stats.data.languages;
//         for (let i = 0; i < data.length; i++) {
//             if (data[i] !== 'Other') {
//                 top5.push(data[i]);
//             }
//             if (top5.length === 5) {
//                 break;
//             }
//         }

//         for (let i = 0; i < top5.length; i++) {
//             console.log(`${top5[i].name}\t${top5[i].decimal}`);
//         }
//     } catch (error) {
//         console.log(error);
//     }
// }

// simpleGet();
