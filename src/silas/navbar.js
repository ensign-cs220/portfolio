// AlpineJS component
function navbarSilas() {
    const aboutEntryObject = { label: 'About', link: 'https://google.com' };

    return {
        menuEntries: [
            aboutEntryObject,
            { label: 'Home', link: '#home' },
            { label: 'Skills', link: '#skills' },
            { label: 'Experience', link: '#experience' },
            { label: 'Projects', link: '#projects' },
            { label: 'Contact', link: '#contact' },
        ],
    };
}

window.navbarSilas = navbarSilas;
