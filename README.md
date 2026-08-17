# utf-cg-tp0 — Minha Página Web

Trabalho Prático 0 da disciplina de Computação Gráfica. O objetivo
deste trabalho é praticar o fluxo de desenvolvimento e publicação de páginas
web, o primeiro passo antes de começar a programar com WebGL.


## Sobre

Uma página simples de apresentação pessoal, com foto, texto sobre mim e uma
pequena interação em JavaScript: ao clicar em um botão, uma abelhinha
aparece na tela e começa a se mover para posições aleatórias; um segundo
botão permite parar o movimento.

## Tecnologias

- **HTML5**: estrutura da página
- **CSS3**: estilização (fontes do Google Fonts, layout em cartão, cores,
  bordas arredondadas, responsividade)
- **JavaScript**: interatividade via eventos de clique e `setInterval`

## Estrutura do projeto

```
utf-cg-tp0/
├── index.html      # estrutura da página
├── style.css       # estilos
├── script.js       # lógica da abelhinha
├── ana.jpg         # foto de perfil
├── abelha.png         # foto da abelinha
└── README.md        # este arquivo
```

## Como rodar localmente

1. Clone o repositório: https://github.com/analuizareiss/utf-cg-tp0
2. Abra a pasta na sua IDE
3. Instale a extensão **Live Server**.
4. Clique com o botão direito em `index.html` e escolha **"Open with Live
   Server"**.

## Funcionalidades

- Layout responsivo (adapta para telas menores)
- Foto de perfil com borda arredondada
- Botão **"Clique aqui"**: faz uma abelhinha aparecer e se mover
  aleatoriamente pela tela a cada ~0,9s
- Botão **"Parar abelhinha"**: aparece somente após o primeiro clique, e
  interrompe o movimento

## Autor

Feito por **Ana Luiza Reis** para a disciplina de Computação Gráfica.