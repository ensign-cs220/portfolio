const navbar = function () {
    return {
        menuEntries: [
            { name: 'Home', href: '#home' },
            { name: 'About', href: '#about' },
            { name: 'Skills', href: '#skills' },
            { name: 'Experience', href: '#experience' },
        ],
        init() {
            console.log('Initiated');
        },
        toggle() {
            this.open = !this.open;
        },
    };
};

window.$emmanuelNavbar = navbar;
