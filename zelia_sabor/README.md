# Zélia Sabor - Landing Page

Este é um projeto de uma landing page (página única) para a "Zélia Sabor", uma empresa fictícia de alimentos caseiros. O site foi desenvolvido para ser responsivo e apresentar os produtos, sabores e informações de contato da empresa de forma clara e atraente.

## 🚀 Como Visualizar

Para visualizar a página, não é necessário um servidor web, pois é um site estático. Basta seguir os passos:

1.  Faça o download ou clone os arquivos do projeto para o seu computador.
2.  Navegue até a pasta onde os arquivos foram salvos.
3.  Abra o arquivo `index.html` diretamente em seu navegador de preferência (como Google Chrome, Firefox, ou Microsoft Edge).

## ✨ Técnicas e Tecnologias Aplicadas

O projeto foi construído utilizando tecnologias web modernas e boas práticas de desenvolvimento front-end.

-   **HTML5**: Para a estrutura semântica do conteúdo, utilizando tags como `<header>`, `<main>`, `<footer>` e `<nav>`, o que melhora a acessibilidade e a otimização para motores de busca (SEO).

-   **CSS3**:
    -   Estilizações personalizadas foram adicionadas para complementar o framework.
    -   Foi utilizada a propriedade `scroll-margin-top` para corrigir o problema de posicionamento de âncoras internas (`#Home`, `#Produtos`, etc.) causado pelo cabeçalho fixo, garantindo que o título da seção não fique escondido sob a barra de navegação.

-   **Bootstrap 5**:
    -   **Framework CSS**: Utilizado como a principal ferramenta para estilização e responsividade.
    -   **Sistema de Grid**: O layout é organizado com o sistema de grid do Bootstrap (`container`, `row`, `col-md-*`), garantindo que o conteúdo se ajuste perfeitamente a diferentes tamanhos de tela (de celulares a desktops).
    -   **Componentes**: Foram usados componentes prontos como a `navbar` (barra de navegação responsiva e fixa no topo), `buttons` e `form` para acelerar o desenvolvimento e garantir consistência visual.

-   **Design Responsivo (Mobile-First)**: A abordagem de design garante que o site funcione bem em dispositivos móveis, e o layout se expande para telas maiores, proporcionando uma boa experiência de usuário em qualquer dispositivo.

-   **Formulário de Contato com `mailto`**: O formulário de contato utiliza o atributo `action="mailto:..."`. Essa é uma técnica simples que não requer um back-end. Ao clicar em "Enviar Email", o cliente de e-mail padrão do usuário (como Outlook, Gmail, etc.) é aberto com o endereço do destinatário e os dados do formulário já preenchidos no corpo do e-mail.

## 📂 Estrutura dos Arquivos

```
├── img/
│   ├── zelia_sabor_logo.png
│   ├── zelia_sabor_principal.jpg
│   └── ... (outras imagens)
├── index.html      # Arquivo principal com toda a estrutura da página.
├── style.css       # Arquivo para estilos CSS personalizados.
└── README.md       # Este arquivo.
```