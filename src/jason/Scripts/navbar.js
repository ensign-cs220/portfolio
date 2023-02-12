function jasonNavbar() {
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

window.jasonNavbar = jasonNavbar;
window.$home = home;
