# VanderFish - Mergulhando pela Natureza

Este é um projeto de uma página web estática, criada para destacar a importância da conservação ambiental e divulgar o trabalho de organizações dedicadas à proteção do nosso planeta. A página serve como uma vitrine para o "VanderFish", o Projeto Tamar e o Greenpeace.

## ✨ Funcionalidades

A página apresenta um design limpo e responsivo, com os seguintes elementos principais:

*   **Barra de Navegação Fixa:** Um menu no topo da página com links diretos para os sites/redes sociais das organizações apresentadas (VanderFish, Tamar e Greenpeace).
*   **Carrossel Interativo:** Um carrossel de tela cheia que introduz cada uma das três iniciativas com uma imagem e uma breve descrição.
*   **Conteúdo Dinâmico:** Abaixo do carrossel, há uma seção de texto que muda dinamicamente para exibir informações detalhadas sobre a organização mostrada no slide ativo do carrossel.

## 🚀 Tecnologias Utilizadas

*   **HTML5:** Para a estrutura semântica da página.
*   **Bootstrap 5.2.1:** Utilizado para a criação de um layout responsivo e para componentes como o carrossel e o sistema de grid.
    *   CSS do Bootstrap para estilização.
    *   JavaScript do Bootstrap para a funcionalidade de componentes como o carrossel.
*   **CSS3 Customizado:** Estilos adicionais para personalizar a aparência, como a cor dos links de navegação e o ajuste das imagens do carrossel.
*   **JavaScript:** Um pequeno script customizado para sincronizar o conteúdo de texto exibido com o slide ativo no carrossel.

## ⚙️ Como Funciona a Interatividade

A principal interatividade da página é a conexão entre o carrossel e as seções de informação. Isso é alcançado com o seguinte script:

```javascript
const carousel = document.getElementById('carouselExampleCaptions');
const infoCols = document.querySelectorAll('.info-col');

carousel.addEventListener('slide.bs.carousel', event => {
    // Esconde a coluna que estava visível
    infoCols[event.from].classList.add('d-none');

    // Mostra a coluna correspondente ao novo slide
    infoCols[event.to].classList.remove('d-none');
});
```

Este código "escuta" o evento `slide.bs.carousel` do Bootstrap. Quando um novo slide está prestes a ser exibido, o script:
1.  Adiciona a classe `d-none` (display: none) à coluna de informação que estava visível (`event.from`).
2.  Remove a classe `d-none` da coluna de informação que corresponde ao novo slide (`event.to`), tornando-a visível.

## 📂 Estrutura de Arquivos

*   `index.html`: O arquivo principal que contém toda a estrutura e conteúdo da página.
*   `image/`: Pasta que deve conter as imagens utilizadas no carrossel (`oceano_com_logo.png`, `projeto_tamar_apresentação.png`, `greenpeace_apresentação.png`).