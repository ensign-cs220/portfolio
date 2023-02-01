const andresnavbar = function () {
    return {
        open: false,
        entries: [
            { item: 'home', url: '#home', prefix: '01. ' },
            { item: 'about', url: '#about', prefix: '02. ' },
            { item: 'skills', url: '#skills', prefix: '03. ' },
            { item: 'experience', url: '#experience', prefix: '04. ' },
            { item: 'projects', url: '#projects', prefix: '05. ' },
            { item: 'contact', url: '#contact', prefix: '06. ' },
        ],
    };
};

window.andresnavbar = andresnavbar;
