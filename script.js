function showPopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'flex'; // Exibe o pop-up
  }
  
  function closePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none'; // Oculta o pop-up
  }

  function movePopup() {
    const popup = document.querySelector('.heart');
    
    // Gera posições aleatórias dentro da tela
    const randomTop = Math.random() * 80 + 10; // Garante que fique dentro de 10% a 90% da tela
    const randomLeft = Math.random() * 80 + 10;
  
    // Atualiza a posição do pop-up
    popup.style.position = 'absolute';
    popup.style.top = randomTop + '%';
    popup.style.left = randomLeft + '%';
  }
  


  function createHearts() {
    for (let i = 0; i < 70; i++) {
        const coracao = document.createElement('div');
        coracao.className = 'coracao';
        coracao.style.left = Math.random() * 100 + 'vw';
        coracao.style.top = -10 + 'vh';
        coracao.style.setProperty('--move-x', Math.random() * 30 + 'vw');
        document.body.appendChild(coracao);

        setTimeout(() => {
            coracao.remove();
        }, 5000); // Remove o coração após 5 segundos
    }
    const botao = document.getElementById('createHearts');
    const texto = document.getElementById('meuTexto');
    if (texto.classList.contains('mostrado')) {
      texto.classList.remove('mostrado');
      botao.textContent = 'Mostrar Texto';
  } else {
      texto.classList.add('mostrado');
      botao.textContent = 'Esconder Texto';
  }
    
  

}
