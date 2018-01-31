document.addEventListener('DOMContentLoaded', function() {
    if (window.location.href.indexOf('localhost') && window.location.port == 3000) {
        const links = [...document.getElementsByTagName('a')];
        links.forEach(link => {
            link.setAttribute('href', link.getAttribute("href").replace('localhost', 'localhost:3000'));
        });
    }
}, false);