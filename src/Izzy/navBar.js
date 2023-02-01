const navbar = function () {
    return {
        isOpen: true,
        entries: [
            { label: 'home', url: '#home', id: 1 },
            { label: 'about', url: '#about', id: 2 },
            { label: 'skills', url: '#skills', id: 3 },
            { label: 'projects', url: '#projects', id: 4 },
            { label: 'contact', url: '#contact', id: 5 },
        ],
    };
};
window.navbar = navbar;
