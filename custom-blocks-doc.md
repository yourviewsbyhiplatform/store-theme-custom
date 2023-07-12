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
    - **text** = _String_ - ( Recebe uma string para exibir no lugar do título )
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

<hr>

### 5 - yv-product-reviews

<hr>
