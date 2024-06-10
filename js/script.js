document.body.classList.add('light-theme');

fetch('README.md')
    .then(response => response.text())
    .then(data => {
        const markdownContent = marked(data);
        document.getElementById('markdownContent').innerHTML = markdownContent;
    })
    .catch(error => console.error('Erro ao carregar o arquivo:', error));

document.getElementById('theme-toggler').addEventListener('click', function () {
    // Verifica se o tema atual é claro
    if (document.body.classList.contains('light-theme')) {
        document.body.classList.remove('light-theme');
        document.body.classList.add('dark-theme');
    } else {
        document.body.classList.remove('dark-theme');
        document.body.classList.add('light-theme');
    }
});