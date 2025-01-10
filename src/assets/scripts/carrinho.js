




// Função para calcular e adicionar material ao carrinho
function adicionarCarrinho() {
  const vendedor = document.getElementById("vendedorMaterial").value;
  const quantidade = Number.parseFloat(document.getElementById("quantidadeMaterial").value) || 0;
  const valorUnitario = Number.parseFloat(document.getElementById("valor").value) || 0;
  const valorTotal = quantidade * valorUnitario;
  const botaoAdicionar = document.getElementById("adicionarCarrinho");
  const tabelaCarrinho = document.getElementById("tabelaCarrinho");

  if (vendedor && quantidade > 0 && valorUnitario > 0) {
    // Mostrar tabela se for o primeiro item
    if (tabelaCarrinho.classList.contains("d-none")) {
      tabelaCarrinho.classList.remove("d-none");
    }

    const tabela = document.getElementById("conteudoTabela");
    const novaLinha = document.createElement("tr");

    novaLinha.innerHTML = `
      <td>${vendedor}</td>
      <td>${quantidade}</td>
      <td>${valorUnitario.toFixed(2)}</td>
      <td>${valorTotal.toFixed(2)}</td>
      <td class="text-center">
        <button class="btn btn-danger btn-sm" onclick="this.closest('tr').remove()">
          <i class="bi bi-trash"></i>
        </button>
      </td>
    `;

    tabela.appendChild(novaLinha);

    // Limpar os campos após adicionar
    document.getElementById("meuFormulario").reset();
    document.getElementById("resultadoMaterial").textContent = "";
  } else {
    alert("Por favor, preencha todos os campos corretamente.");
  }
}

// Registrar compra (exemplo simples)
function registrarCompra() {
  if (document.getElementById("conteudoTabela").children.length > 0) {
    alert("Compra registrada com sucesso!");
  } else {
    alert("Adicione itens ao carrinho antes de registrar a compra.");
  }
}

// Ajustes no botão "Adicionar Carrinho"
function ajustarBotaoCarrinho() {
  const botaoAdicionar = document.getElementById("adicionarCarrinho");
  const tabelaCarrinho = document.getElementById("tabelaCarrinho");

  if (tabelaCarrinho.classList.contains("d-none")) {
    tabelaCarrinho.classList.remove("d-none");
  }

  botaoAdicionar.classList.add("btn-ajustado");
}

// Adiciona eventos aos botões
document.getElementById("adicionarCarrinho").addEventListener("click", () => {
  adicionarCarrinho();
  ajustarBotaoCarrinho();
});

document.getElementById("registrarCompra").addEventListener("click", registrarCompra);
