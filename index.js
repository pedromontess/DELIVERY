document.addEventListener('DOMContentLoaded', () => {
  // Menu responsivo
  const toggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.menu');

  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      menu.classList.toggle('show');
    });
  }

  // Espera até que os botões existam no DOM
  setTimeout(() => {
    const botoesComprar = document.querySelectorAll('.btn-comprar');
    botoesComprar.forEach(botao => {
      botao.addEventListener('click', () => {
        alert('Você será redirecionado para nossa página no Mercado Livre.');
        window.open('https://www.mercadolivre.com.br/', '_blank');
      });
    });
  }, 100); // espera 100ms para garantir que tudo carregou
});
