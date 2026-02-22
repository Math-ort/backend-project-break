
  const productDetail = require('./productDetails');

function getProductCards(products) {

    let html = '<div class="products-container">';

    for (let product of products) {
        html += productDetail(product);
    }

    html += '</div>';

    return html;
}

module.exports = getProductCards;
