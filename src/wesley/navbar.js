const navbar = function () {
    return {
        open: false,
        entries: [
            { name: 'home', targetSection: '#home' },
            { name: 'about', targetSection: '#about' },
            { name: 'skills', targetSection: '#skills' },
            { name: 'experience', targetSection: '#experience' },
            { name: 'project', targetSection: '#project' },
            { name: 'contact', targetSection: '#contact' },
        ],
    };
};
window.navbar = navbar;
