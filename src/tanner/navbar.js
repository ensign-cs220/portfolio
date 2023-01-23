const navbar = function () {
    return {
        open: false,
        entries: [
            { name: 'home', targetSection: '#home' },
            { name: 'about', targetSectio: '#about' },
            { name: 'skills', targetSectio: '#skills' },
            { name: 'experience', targetSectio: '#experience' },
            { name: 'projects', targetSectio: '#project' },
            { name: 'contact', targetSectio: '#contact' },
        ],
    };
};

window.navbar = navbar;
