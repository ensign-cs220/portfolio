const navbar = function () {
    return {
        open: false,
        init() {
            console.log('Initiated');
        },
        toggle() {
            this.open = !this.open;
        },
    };
};

window.$navbar = navbar;
