// Função de troca de tema Dark/Light
const toggleTheme = document.getElementById("toggleTheme");
const rootHtml = document.documentElement;

function changeTheme() {
  const currentTheme = rootHtml.getAttribute("data-theme");
  rootHtml.setAttribute("data-theme", currentTheme === "light" ? "dark" : "light");
  toggleTheme.classList.toggle("bi-moon");
  toggleTheme.classList.toggle("bi-sun");
}

toggleTheme.addEventListener("click", changeTheme);

// Navegação lateral
function setupNavigation() {
  const links = document.querySelectorAll('.nav-link');
  for (const link of links) {
    link.addEventListener('click', event => {
      event.preventDefault();
      const target = event.target.getAttribute('data-target');
      for (const section of document.querySelectorAll('.content-section')) {
        section.classList.remove('active');
      }
      document.getElementById(target).classList.add('active');
    });
  }

  document.getElementById('homeLink').addEventListener('click', event => {
    event.preventDefault();
    for (const section of document.querySelectorAll('.content-section')) {
      section.classList.remove('active');
    }
    document.getElementById('home').classList.add('active');
  });
}

setupNavigation();

// Validação de formulários
(() => {
  const forms = document.querySelectorAll('.needs-validation');
  for (const form of forms) {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }
      form.classList.add('was-validated');
    }, false);
  }
})();

// Função para mostrar tabelas de funcionários
function mostrarTabela(tipo) {
  const listaFuncionarios = document.getElementById('tabelaListagemFuncionarios');
  const funcionariosDemitidos = document.getElementById('tabelaFuncionariosDemitidos');

  if (tipo === 'lista') {
    listaFuncionarios.classList.remove('d-none');
    funcionariosDemitidos.classList.add('d-none');
  } else if (tipo === 'demitidos') {
    listaFuncionarios.classList.add('d-none');
    funcionariosDemitidos.classList.remove('d-none');
  }
}
