# Store theme with Yourviews Installed Custom Layout

### Esse repositório está disponível para ser usado de exemplo em como e onde instalar os blocos da yourviews em sua loja dentro da VTEX IO
### Podendo personalizar cada bloco disponível pelo app da yourviews!

## Tutorial
Siga nossa documentação disponível no HELP: https://help.hiplatform.com/docs/instalacao-na-loja

- 1 Remova o app "vtex.reviews-and-ratings" padrão da vtex io para avaliações
- 2 Instale o app "yourviews.yourviewsreviews"
- 3 Instale o app "vtex.seller-selector" (https://developers.vtex.com/docs/guides/vtex-seller-selector)
- 4 Instale o app "vtex.product-review-interfaces" (https://developers.vtex.com/docs/guides/vtex-seller-selector)
- 5 Insira as peerDependencies no manifest.json
- 6 Configure o app na seção /admin/apps/yourviews.yourviewsreviews@X.XX.X/setup/ da VTEX IO usando as chaves da sua loja yourviews.
- 7 Insira os blocos de avaliações, perguntas e respostas, estrelas de prateleiras, 
estrelas do sumario do produto, estrelas do lojista no sumario do produto e estrelas de infos do lojista.
- 8 Pronto!

## Blocos

- Reviews / Avaliações: (https://github.com/luisfkandriolohi/vtexio-yourviews-store-theme-default/blob/main/store/blocks/pdp/product.jsonc#L11C7-L11C7)
- Perguntas&Respostas / QA: (https://github.com/luisfkandriolohi/vtexio-yourviews-store-theme-default/blob/main/store/blocks/pdp/product.jsonc#L12)
- ProductRatingSummary / Estrelas de sumário de produto: (https://github.com/luisfkandriolohi/vtexio-yourviews-store-theme-default/blob/main/store/blocks/pdp/product.jsonc#L105)
- ProductRatingInline / Estrelas de prateleira/vitrine dos produtos: (https://github.com/luisfkandriolohi/vtexio-yourviews-store-theme-default/blob/main/store/blocks/product-summary/product-summary.jsonc#L18)
- Testimonials / Testemunhos: (https://github.com/luisfkandriolohi/vtexio-yourviews-store-theme-default/blob/main/store/blocks/home/home.jsonc#L15)
- Manifest JSON: (https://github.com/luisfkandriolohi/vtexio-yourviews-store-theme-default/blob/main/manifest.json#L71)

## Previews

### Preview Home Page
![store-theme-default](https://github.com/luisfkandriolohi/vtexio-yourviews-store-theme-default/assets/97966769/c7fb76ae-3fe8-427d-8ef1-02376502bd1c)

### Preview Product Page
![store-theme-default](https://github.com/luisfkandriolohi/vtexio-yourviews-store-theme-default/assets/97966769/8e15739d-5801-4996-acfb-6d3eafe1bffc)
