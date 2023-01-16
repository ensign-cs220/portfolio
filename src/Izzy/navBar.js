
const navbar=function() {
    return {
        open:false,
        entries: [
            { label: 'Home', url: '#home' },
            { label: 'About', url: '#about' },
            { label: 'Skills', url: '#skills' },
            { label: 'Projects', url: '#projects' },
            { label: 'Contact', url: '#contact' },
        ],
    };
}
window.navbar = navbar;
