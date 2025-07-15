document.addEventListener('DOMContentLoaded', () => {
  // Menu responsivo
  const toggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.menu');

  toggle.addEventListener('click', () => {
    menu.classList.toggle('show');
  });

  // Botões de compra
  const botoesComprar = document.querySelectorAll('.btn-comprar');

  botoesComprar.forEach(botao => {
    botao.addEventListener('click', () => {
      alert('Você será redirecionado para nossa página no Mercado Livre.');
      window.open('https://www.mercadolivre.com.br/', '_blank');
    });
  });
});
