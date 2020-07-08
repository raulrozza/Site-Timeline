# Modelo de Site com Timeline

Este projeto apresenta um modelo de site one page com uma página de timeline.

## Estrutura de Pastas

O código relevante do projeto está na pasta **src**, uma sigla para *source*. Lá, temos as seguintes pastas:

### Assets

Esta pasta contém os recursos usados no site, principalmente imagens. Elas estão subdivididas em diretórios que representam sua localização no projeto.

### Components

Como todo projeto em ReactJS, algumas partes do código são refatoradas para serem reutiizadas ou apenas para deixar trechos de código isolados e enxutos. Nesta pasta você encontra os componentes usados no projeto.

### Contexts

Um contexto que realiza o controle das informações, centralizando-as. Através dele, é possível criar alterações no tema com funcionalidades dentro do site, e estas alterações são refletidas em todo o projeto.

### Data

Esta pasta contém os scripts que carregam imagens ou contém alguns dados da aplicação, como membros, timeline e etc.

### Pages

Nesta pasta estão as páginas do site, cada uma seu próprio componentes.

### Routes

Nesta pasta estão os arquivos que configuram as rotas javascript da aplicação.

## Variáveis de Ambiente

Neste projeto utilizamos duas variáveis de ambiente, ambas para a utilização do EmailJS, nossa API de envio de emails:

- **REACT_APP_EMAILJS_TEMPLATE:** ID do template utilizado.
- **REACT_APP_EMAILJS_USER_ID:** ID do usuário autorizado a usar o template.

## Bibliotecas

- **Bootstrap:** Framework CSS utilziado para agilizar a estilização.
- **React Bootstrap:** Biblioteca que abstrai as classes e funcionalidades JS do Bootstrap para o React, em forma de componentes.
- **EmailJS-Com:** Biblioteca utilizada para conectar a API do EmailJS, que realiza o envio de e-mails do site para o e-mail configurado.
- **React Helmet:** Biblioteca utilizada para manipular a tag **head** dentro de um componente React, favorecendo a utilização de metadados, mudança de título e algumas coisas que ajudam no SEO.
- **React Icons:** Biblioteca que agrupa diversas outras bibliotecas de ícones existentes em um só lugar.
- **React Loading:** Biblioteca que dispõe um componente de *carregando* leve e interessante.
- **React Multi Carousel:** Um componente de carrossel customizável, com quantidade de itens simultâneos diversos e responsivo.
- **React Router Dom:** Nosso router, que gerencia as rotas do site de maneira a simular requisições via servidor.
- **React Scroll:** Biblioteca com componentes capazes de realizar o *smooth scrolling*.
- **React Vertical Timeline Component:** Componente utilizado para construir nossa timeline.