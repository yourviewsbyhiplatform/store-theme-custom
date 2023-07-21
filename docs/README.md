# Store theme with Yourviews Installed Custom Layout

### Esse repositório está disponível para ser usado de exemplo em como e onde instalar os blocos da yourviews em sua loja dentro da VTEX IO
### Podendo personalizar cada bloco disponível pelo app da yourviews!

## Tutorial
Siga nossa documentação disponível no HELP: https://help.hiplatform.com/docs/instalacao-na-loja

- 1 Instale o app "yourviews.yourviewsreviews"
- 2 Instale o app "vtex.seller-selector" (https://developers.vtex.com/docs/guides/vtex-seller-selector)
- 3 Insira as peerDependencies no manifest.json (https://github.com/luisfkandriolohi/vtexio-yourviews-store-theme-custom/blob/main/manifest.json#L71)
- 4 Configure o app na seção /admin/apps/yourviews.yourviewsreviews@X.XX.X/setup/ da VTEX IO usando as chaves da sua loja yourviews.
- 5 Insira os blocos de avaliações, perguntas e respostas, estrelas de prateleiras, 
estrelas do sumario do produto, estrelas do lojista no sumario do produto e estrelas de infos do lojista.
- 6 Pronto!

## Blocos

- Reviews / Avaliações: (https://github.com/luisfkandriolohi/vtexio-yourviews-store-theme-custom/blob/main/store/blocks/pdp/product.jsonc#L11)
- Perguntas&Respostas / QA: (https://github.com/luisfkandriolohi/vtexio-yourviews-store-theme-custom/blob/main/store/blocks/pdp/product.jsonc#L12)
- ProductRatingSummary / Estrelas de sumário de produto: (https://github.com/luisfkandriolohi/vtexio-yourviews-store-theme-custom/blob/main/store/blocks/pdp/product.jsonc#L108)
- ProductRatingInline / Estrelas de prateleira/vitrine dos produtos: (https://github.com/luisfkandriolohi/vtexio-yourviews-store-theme-custom/blob/main/store/blocks/product-summary/product-summary.jsonc#L19)
- Testimonials / Testemunhos: (https://github.com/luisfkandriolohi/vtexio-yourviews-store-theme-custom/blob/main/store/blocks/home/home.jsonc#L15)

## Personalizações dos blocos
Todas as personalizações dos blocos podem ser feitas num arquivo json/jsonc separado para uma melhor organização, neste caso, foi criado um arquivo separado onde é feita toda a personalização dos blocos da yourviews e personalizações do css:

- Documentação: https://github.com/luisfkandriolohi/vtexio-yourviews-store-theme-custom/blob/main/custom-blocks-doc.md

- Blocos: https://github.com/luisfkandriolohi/vtexio-yourviews-store-theme-custom/blob/main/store/blocks/yourviews-custom.jsonc
- CSS: https://github.com/luisfkandriolohi/vtexio-yourviews-store-theme-custom/blob/main/styles/css/yourviews.yourviewsreviews.css

## Previews

### Preview Home Page
![image](https://github.com/luisfkandriolohi/vtexio-yourviews-store-theme-custom/assets/97966769/88f85bd9-107c-463e-957c-33733250587c)

### Preview Product Page
![image](https://github.com/luisfkandriolohi/vtexio-yourviews-store-theme-custom/assets/97966769/3a6d4d16-99d2-41cc-8e06-792643f6d1a4)



