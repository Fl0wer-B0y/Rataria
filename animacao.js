const buttons = document.querySelectorAll('.carrinho-animacao');

// Adiciona eventos para cada botão
buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
        button.classList.add('hovered');
    });

    button.addEventListener('mouseleave', () => {
        button.classList.remove('hovered');
    });
});