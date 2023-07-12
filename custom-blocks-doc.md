# Documentação dos Blocos da Yourviews para Personalização

## Atenção: Essa documentação foi criada com intuito de ajudar pessoas apenas com conhecimento técnico sobre criação e edição de blocos na VTEX IO!

Abaixo será passado uma documentação dos blocos personalizáveis e quais blocos filhos cada um aceita.
Alguns blocos aceitam propriedades a serem passadas de forma específica respeitando maiuculas e minusculas para 
mais possibilidades de personaliazão.

## Blocos Principais

### 1 - yv-product-rating-inline ( bloco pai )
#### Blocos Aceitos:
- yv-rating-stars ( Retorna as estrelas de acordo com o bloco pai )
- yv-rating-average ( Retorna um texto com a nota média da avaliação de acordo com o bloco pai )
- yv-total-rating ( Retorna um texto com o total de avaliações seguindo de um texto traduzido exemplo: "10 avaliações" )
  - Props Aceitas:
    - **numberOnly** = _Boolean_ (default = false) - ( Quando true, remove o texto "avaliações" que vem após o número total de avaliações )

Exemplo: https://github.com/luisfkandriolohi/vtexio-yourviews-store-theme-custom/blob/main/store/blocks/yourviews-custom.jsonc#L48

<hr>

### 2 - yv-testimonials
#### Blocos Aceitos:
- yv-title ( Retorna o titulo de acordo com o bloco pai )
  - Props Aceitas:
    - **text** = _String_ (opcional) - ( Recebe uma string para exibir no lugar do título )
- yv-testimonials-content ( Retorna apénas informações para os blocos filhos que exibe cada informação separada )
  - Blocos Aceitos:
    - yv-rating-stars ( Retorna as estrelas de acordo com o bloco pai )
    - yv-date ( Retorna a data de acordo com o bloco pai )
      - Props Aceitas:
        - **showDifference** = _Boolean_ (default = false) - ( Quando true, exibe "x dias/meses/anos atrás" ao invés da data padrão )
    - yv-user-image ( Retorna foto ou avatar de acordo com o bloco pai )
    - yv-user-name ( Retorna o nome do usuário de acordo com o bloco pai )
      - Props Aceitas:
        - **initialsOnly** = _Boolean_ (default = false) - ( Quando true, exibe apenas as iniciais do nome )
    - yv-user-localization ( Retorna a localização do usuário de acordo com o bloco pai )
      - Props Aceitas:
        - **stateOnly** = _Boolean_ (default = false) - ( Quando true, exibe apenas o estado )
        - **cityOnly** = _Boolean_ (default = false) - ( Quando true, exibe apenas a cidade )
    - yv-comment ( Retorna o comentário da avaliação da loja de acordo com o bloco pai )
    - yv-store-ratings ( Retorna avaliações da loja separadas de acordo com o bloco pai )

Exemplo: https://github.com/luisfkandriolohi/vtexio-yourviews-store-theme-custom/blob/main/store/blocks/yourviews-custom.jsonc#L3

<hr>

### 3 - yv-product-rating-summary
#### Blocos Aceitos:
- yv-rating-stars ( Retorna as estrelas de acordo com o bloco pai )
- yv-rating-average ( Retorna um texto com a nota média da avaliação de acordo com o bloco pai )
- yv-total-rating ( Retorna um texto com o total de avaliações seguindo de um texto traduzido exemplo: "10 avaliações" )
  ##### Props Aceitas:
  **numberOnly** = _Boolean_ (default = false) - ( Quando true, remove o texto "avaliações" que vem após o número total de avaliações )

Exemplo: https://github.com/luisfkandriolohi/vtexio-yourviews-store-theme-custom/blob/main/store/blocks/yourviews-custom.jsonc#L57
 
<hr>

### 4 - yv-product-questions-and-answers
#### Blocos Aceitos:
- yv-title ( Retorna o titulo de acordo com o bloco pai )
  - Props Aceitas:
    - **text** = _String_ (opcional) - ( Recebe uma string para exibir no lugar do título )
- yv-subtitle ( Retorna o subtitulo de acordo com o bloco pai )
  - Props Aceitas:
    - **text** = _String_ (opcional) - ( Recebe uma string para exibir no lugar do título )
- yv-question-button ( Retorna o botão para o usuário efetuar uma pergunta sobre o produto )
- yv-qa-content ( Retorna apénas informações para os blocos filhos que exibe cada informação separada )
  - Blocos Aceitos:
    - yv-qa-content ( Retorna apénas informações para os blocos filhos que exibe cada informação separada )
      - Blocos Aceitos:
        - yv-user-image ( Retorna foto ou avatar de acordo com o bloco pai )
        - yv-user-name ( Retorna o nome do usuário de acordo com o bloco pai )
          - Props Aceitas:
            - **initialsOnly** = _Boolean_ (default = false) - ( Quando true, exibe apenas as iniciais do nome )
        - yv-date ( Retorna a data de acordo com o bloco pai )
          - Props Aceitas:
            - **showDifference** = _Boolean_ (default = false) - ( Quando true, exibe "x dias/meses/anos atrás" ao invés da data padrão )
        - yv-comment ( Retorna o comentário da avaliação da loja de acordo com o bloco pai )
    - yv-qa-content-answer ( Retorna apénas informações para os blocos filhos que exibe cada informação separada )
      - Blocos Aceitos:
        - yv-user-image ( Retorna foto ou avatar de acordo com o bloco pai )
        - yv-user-name ( Retorna o nome do usuário de acordo com o bloco pai )
          - Props Aceitas:
            - **initialsOnly** = _Boolean_ (default = false) - ( Quando true, exibe apenas as iniciais do nome )
        - yv-date ( Retorna a data de acordo com o bloco pai )
          - Props Aceitas:
            - **showDifference** = _Boolean_ (default = false) - ( Quando true, exibe "x dias/meses/anos atrás" ao invés da data padrão )
        - yv-comment ( Retorna o comentário da avaliação da loja de acordo com o bloco pai )

Exemplo: https://github.com/luisfkandriolohi/vtexio-yourviews-store-theme-custom/blob/main/store/blocks/yourviews-custom.jsonc#L284

<hr>

### 5 - yv-product-reviews
#### Blocos Aceitos:
- yv-title ( Retorna o titulo de acordo com o bloco pai )
  - Props Aceitas:
    - **text** = _String_ (opcional) - ( Recebe uma string para exibir no lugar do título )
- yv-reviews-details ( Retorna apenas informações para os blocos filhos que exibe cada informação separada )
  - Blocos Aceitos:
    - yv-reviews-histogram ( Retorna apenas informações para os blocos filhos que exibe cada informação separada )
      - yv-histogram-title ( Retorna o título do histograma )
      - yv-histogram-bar ( Retorna a barra do histograma )
      - yv-histogram-total ( Retorna o total de avaliações do histograma )
    - yv-rating-stars ( Retorna as estrelas de acordo com o bloco pai )
    - yv-rating-average ( Retorna um texto com a nota média da avaliação de acordo com o bloco pai )
    - yv-total-rating ( Retorna um texto com o total de avaliações seguindo de um texto traduzido exemplo: "10 avaliações" )
      - Props Aceitas:
        - **numberOnly** = _Boolean_ (default = false) - ( Quando true, remove o texto "avaliações" que vem após o número total de avaliações )
    - yv-reviews-recommend ( Retorna uma porcentagem de quantos usuários recomendam o produto atual )
- yv-reviews-field-summary ( Retorna apenas informações para os blocos filhos que exibe cada informação separada )
  - yv-field-summary-title ( Retorna o titulo das perguntas adicionais sobre o produto )
  - yv-rating-stars ( Retorna as estrelas de acordo com o bloco pai )
  - yv-rating-average ( Retorna um texto com a nota média da avaliação de acordo com o bloco pai )
  - yv-total-rating ( Retorna um texto com o total de avaliações seguindo de um texto traduzido exemplo: "10 avaliações" )
    - Props Aceitas:
      - **numberOnly** = _Boolean_ (default = false) - ( Quando true, remove o texto "avaliações" que vem após o número total de avaliações )
- yv-reviews-content ( Retorna apenas informações para os blocos filhos que exibe cada informação separada )
  - yv-content-review ( Retorna apenas informações para os blocos filhos que exibe cada informação separada )
    - yv-rating-stars ( Retorna as estrelas de acordo com o bloco pai )
    - yv-comment ( Retorna o comentário da avaliação da loja de acordo com o bloco pai )
    - yv-custom-fields ( Retorna as perguntas e respostas adicionais de cada avaliação )
    - yv-user-image ( Retorna foto ou avatar de acordo com o bloco pai )
    - yv-user-name ( Retorna o nome do usuário de acordo com o bloco pai )
      - Props Aceitas:
        - **initialsOnly** = _Boolean_ (default = false) - ( Quando true, exibe apenas as iniciais do nome )
    - yv-user-localization ( Retorna a localização do usuário de acordo com o bloco pai )
      - Props Aceitas:
        - **stateOnly** = _Boolean_ (default = false) - ( Quando true, exibe apenas o estado )
        - **cityOnly** = _Boolean_ (default = false) - ( Quando true, exibe apenas a cidade )
    - yv-date ( Retorna a data de acordo com o bloco pai )
      - Props Aceitas:
        - **showDifference** = _Boolean_ (default = false) - ( Quando true, exibe "x dias/meses/anos atrás" ao invés da data padrão )
    - yv-review-photo ( Retorna as fotos/imagens enviadas pelo usário que efetuou a avaliação )
    - yv-like-dislike-button ( Adicona os botões de like e dislike para aquela avaliação seguidas de um label )
      - Props Aceitas:
        - **showOnlyLike** = _Boolean_ (default = false) - ( Quando true, exibe apenas o botão de like )
        - **showOnlyDislike** = _Boolean_ (default = false) - ( Quando true, exibe apenas o botão de dislike )
        - **hideLabel** = _Boolean_ (default = false) - ( Quando true, esconde o texto "Essa avaliação foi útil?" )
        - **likeDislikeLabel** = _String_ (opcional) - ( Substitui o texto padrão "Essa avaliação foi útil?" )
- yv-writereview-button ( Retorna um botão para que o usuário possa efetuar uma avaliação sobre o produto atual )
          
Exemplo: https://github.com/luisfkandriolohi/vtexio-yourviews-store-theme-custom/blob/main/store/blocks/yourviews-custom.jsonc#L82

<hr>

## Blocos de Adiconais para personalizações

### 1 - yv-flex
#### Props Aceitas:
  - **className** = _String_ (opcional) - ( Adiciona uma classe no bloco para que seja possivel efetuar personalizações css mais elaboradas )
  - **direction** = _String_ “row” | “column” (opcional) - ( Adiciona o atributo "flex-direction" ao css do componente/bloco )
  - **wrap** = _String_ “wrap” | “nowrap” - ( Adiciona o atributo "flex-wrap" ao css do componente/bloco )
  - **justifyContent** = _String_ “center” | “flex-start” | “flex-end” | “space-between” | “space-around” |“space-evenly” (opcional) - ( Adiciona o atributo "justify-content" ao css do componente/bloco )
  - **alignItems** = _String_ “center” | “flex-start” | “flex-end” | “space-between” | “space-around” |“space-evenly” (opcional) - ( Adiciona o atributo "align-content" ao css do componente/bloco )
  - **alignContent** = _String_ “center” | “flex-start” | “flex-end” | “space-between” | “space-around” | “stretch” (opcional) - ( Adiciona o atributo "align-content" ao css do componente/bloco )
  - **width** = _String_ (opcional) - ( Adiciona o atributo "width" ao css do componente/bloco )
  - **height** = _String_ (opcional) - ( Adiciona o atributo "height" ao css do componente/bloco )
  - **marginTop** = _String_ (opcional) - ( Adiciona o atributo "margin-top" ao css do componente/bloco )
  - **marginBottom** = _String_ (opcional) - ( Adiciona o atributo "margin-bottom" ao css do componente/bloco )
  - **marginLeft** = _String_ (opcional) - ( Adiciona o atributo "margin-left" ao css do componente/bloco )
  - **marginRight** = _String_ (opcional) - ( Adiciona o atributo "margin-right" ao css do componente/bloco )
  - **paddingTop** = _String_ (opcional) - ( Adiciona o atributo "padding-top" ao css do componente/bloco )
  - **paddingBottom** = _String_ (opcional) - ( Adiciona o atributo "padding-bottom" ao css do componente/bloco )
  - **paddingLeft** = _String_ (opcional) - ( Adiciona o atributo "padding-left" ao css do componente/bloco )
  - **paddingRight** = _String_ (opcional) - ( Adiciona o atributo "padding-right" ao css do componente/bloco )

Exemplo: https://github.com/luisfkandriolohi/vtexio-yourviews-store-theme-custom/blob/main/store/blocks/yourviews-custom.jsonc#L206

### 2 - yv-rich-text
#### Props Aceitas:
  - **text** = _String_ (opcional) - ( Retorna um texto desejado )
  - **className** = _String_ (opcional) - ( Adiciona uma classe no bloco para que seja possivel efetuar personalizações css mais elaboradas )
