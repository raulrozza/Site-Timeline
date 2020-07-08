# Dados do Site

Os scripts nesta pasta contém os dados do nosso site. Muitos deles são estrurados como JSON, com atributos e valores importantes.

## backgroundImages

Este arquivo importa as imagens de fundo, e as providencia para os componentes que necessitarem.

## membersInfo

Este script contém as informações gerais dos integrantes da empresa: nome e foto.

## teamInfo

Este é o script que contém as informações dos integrantes atuais da empresa. Ele carrega suas imagens, e exporta um vetor, onde cada posição está um objeto com as seguintes informações:
- name: O nome do integrante;
- img: A variável importada que representa a imagem do integrante;
- className: Este atributo é opcional. Com determinadas quantidades de membros, o layout do mosaico pode quebrar ou ficar meio feio. Pra arrumar isso, existem algumas classes que podemos adicionar para colocar um espaço no canto esquerdo de uma foto, pontencialmente centralizando devidamente a linha (nem sempre isso é possível). Cada classe surte efeito apenas em um tamanho de tela. As classes são: **space-md** e **space-lg**.

## timelineInfo

Este script contém os dados que preenchem a timeline. A estrutura dos dados é a seguinte:

- Um vetor com vários objetos. Cada objeto pode representar uma época ou seção importante.
  - Um objeto possui os seguintes atributos:
    - title: Seu título, que pode ser o ano ou semestre da época, por exemplo, "2020".
    - quotes: Um vetor de citações. Cada citação é um objeto com as seguintes propriedades:
      - text: A citação em si, o texto a ser mostrado.
      - author: O autor da citação, aquele a quem a frase pertence.
    - directors: Um vetor com as informações da diretoria da época.
      - index: O nome do integrante.
      - job: O cargo ocupado pelo diretor.
    - members: Um vetor com as informações de todos os integrantes (assessores, gerentes, etc). Cada integrante é um objeto com as seguintes propriedades:
      - index: O nome do integrante.
      - job: O cargo ocupado pelo integrante na época.