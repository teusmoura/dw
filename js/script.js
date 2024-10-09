document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll(".menu a");
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
            });
    }

    // Adiciona evento de clique aos links do menu
    links.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Impede a navegação normal
            const page = this.getAttribute("data-page");
            loadPage(page); // Carrega o conteúdo da página selecionada
        });
    });
});
