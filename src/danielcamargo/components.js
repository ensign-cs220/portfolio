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
                    'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien.',
            },
            CSS: {
                image: './css.svg',
                description:
                    'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien.',
            },
            JavaScript: {
                image: './js.svg',
                description:
                    'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien.',
            },
        },
        async load() {
            const res = await fetch('https://nextjs-red-six-46.vercel.app/api/wakatime/danielcamargo', { method: 'GET' });
            const stats = await res.json();
            const { data } = stats;
            const languagesIWant = ['HTML', 'CSS', 'JavaScript'];
            this.languages = data.languages.filter(l => languagesIWant.indexOf(l.name) !== -1);
        },
        progress(language) {
            const percentage = (language.decimal / 320) * 100;
            return `${percentage}%`;
        },
    };
};
window.$skills = skills;
