document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll(".menu a[data-page]");
    const content = document.getElementById("main-content");

    // Função para carregar o conteúdo das views
    function loadPage(page) {
        fetch(page)
            .then(response => {
                if (!response.ok) {
                    throw new Error("Erro ao carregar a página");
                }
                return response.text();
            })
            .then(data => {
                content.innerHTML = data; // Insere o conteúdo no main
            })
            .catch(error => {
                content.innerHTML = "<h2>Erro ao carregar a página</h2><p>Por favor, tente novamente mais tarde.</p>";
                console.error('Erro ao carregar a página: ', error); // Log do erro para o console
            });
    }

    // Adiciona evento de clique aos links do menu
    links.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Impede a navegação normal
            const page = this.getAttribute("data-page");

            if (page) {
                loadPage(page); // Carrega o conteúdo da página selecionada
            } else {
                console.error('Atributo data-page não definido corretamente.');
            }
        });
    });
});
