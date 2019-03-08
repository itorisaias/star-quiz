# Star Quiz - Invillia

## Requisitos

- [Nodejs && NPM](https://nodejs.org/)

---

### Configuração do projeto

Primeiro é necessário clonar o projeto

```sh
git clone https://github.com/itorisaias/star-quiz.git
```

Entre na pasta do projeto

```sh
cd star-quiz
```

Instale as dependências do projeto

```sh
npm install
```

---

### Compilações e hot-reloads para desenvolvimento

Para subir uma cópia do projeto em sua máquina

```sh
npm run serve
```

---

### Compile e diminua para produção

Gera os arquivos minificados e compilados para produção

```sh
npm run build
```

---

### Lints e corrige arquivos

Busca erros, bugs, erros de estilo e construções suspeitas em seu código

```sh
npm run lint
```

---

### Execute seus testes unitário

Executa todos seus teste em `./tests/unit` e joga o resultado no terminal

```sh
npm run test:unit
```

---

### Execute seus testes integrado

Executa todos seus teste em `./tests/e2e` e joga o resultado no terminal

```sh
npm run test:e2e
```

---

### Estrutura do projeto

- **`/src/assets`** - Where you put any assets that are imported into your components
- **`/src/components`** - All the components of the projects that are not the main views
- **`/src/mixins`** - The mixins are the parts of javascript code that is reused in different components. In a mixin you can put any component’s methods from Vue.js they will be merged with the ones of the component that uses it.
- **`/src/router`** - All the routes of your projects (in my case I have them in the index.js). Basically in Vue.js everything is a component. But not everything is a page. A page has a route like “/dashboard”, “/settings” or “/search”. If a component has a route it is routed.
- **`/src/store`** - The Vuex constants in mutation-type.js, the Vuex modules in the subfolder modules (which are then loaded in the index.js).
- **`/src/translations`** - Locales files, I use Vue-i18n, and it works pretty good.
- **`/src/utils`** - Functions that I use in some components, such as regex value testing, constants or filters.
- **`/src/views`** - To make the project faster to read I separate the components that are routed and put them in this folder. The components that are routed for me are more than a component since they represent pages and they have routes, I put them in “views” then when you check a page you go to this folder.

---

### Ferramentas usadas

- [**vue**](https://br.vuejs.org/index.html) - Vue é um framework progressivo para a construção de interfaces de usuário.
- [**vue-router**](https://router.vuejs.org) - O Vue Router é o roteador oficial do Vue.js. Ele se integra profundamente ao núcleo do Vue.js para tornar simples a criação de aplicativos de página única com o Vue.js.
- [**vuex**](https://vuex.vuejs.org/ptbr) - O Vuex é um padrão de gerenciamento de estado + biblioteca para aplicativos Vue.js. Ele serve como um armazenamento centralizado para todos os componentes em um aplicativo, com regras garantindo que o estado só possa ser modificado de maneira previsível.
- [**vuetify**](https://vuetifyjs.com/pt-BR) - O Vuetify é um framework responsivo em Vue, baseado no Material Design.
- [**axios**](https://github.com/axios/axios/) - Cliente HTTP baseado em Promise para o navegador e node.js.
- [**vue-sweetalert2**](https://sweetalert2.github.io) - Uma biblioteca JavaScript que nos ajuda na criação de alertas que sejam bonitos, responsivos e customizados.
- [**moment**](https://momentjs.com/) - O Moment.js é um pacote open source que pode ser utilizado para validar, manipular e fazer o parse de datas no JavaScript.

### Criado por

- **[Itor Isaias](https://github.com/itorisaias)**
