/* eslint-disable prettier/prettier */
const navbar = function () {
    return {
        open: false,
        entries: [
            { name: 'home', targetSection: '#home' },
            { name: 'about', targetSection: '#about' },
            { name: 'skills', targetSection: '#skills' },
            { name: 'experience', targetSection: '#experience' },
            { name: 'projects', targetSection: '#project' },
            { name: 'contact', targetSection: '#contact' },
        ],
    };
};
window.$navbar = navbar;

const home = function () {
    let $refs;

    return {
        setup(refs) {
            $refs = refs;
        },
        // Based on:
        // https://stackoverflow.com/a/30358006/2251135
        play() {
            this.showVideo = true;
            $refs.youtubeEmbeddedVideo.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
        },
        hide() {
            this.showVideo = false;
            $refs.youtubeEmbeddedVideo.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
        },
        showVideo: false,
    };
};
window.$home = home;

const skills = function () {
    return {
        languages: [],
        imageMap: {
            HTML: {
                image: './html5.svg',
                description:
                    'HTML is essential for creating web content with a wide range of applications, constantly evolving to meet changing needs and remaining vital.',
            },
            CSS: {
                image: './css.svg',
                description: 'CSS is critical for creating visually appealing and consistent web designs across devices and platforms.',
            },
            JavaScript: {
                image: './js.svg',
                description:
                    'JavaScript has grown to become one of the most popular programming languages in the world, with a large and active developer community.',
            },
        },
        async load() {
            const res = await fetch('https://nextjs-red-six-46.vercel.app/api/wakatime/danielcamargo', { method: 'GET' });
            const stats = await res.json();
            const { data } = stats;
            const languagesIWant = ['HTML', 'CSS', 'JavaScript'];
            // const languagesIWant = ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'PHP', 'Kotlin'];
            this.languages = data.languages.filter(l => languagesIWant.indexOf(l.name) !== -1);
        },
        progress(language) {
            const percentage = (language.decimal / 320) * 100;
            return `${percentage}%`;
        },
    };
};
window.$skills = skills;
