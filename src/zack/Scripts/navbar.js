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
