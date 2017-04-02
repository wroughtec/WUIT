class ProductsController {
  constructor() {
    this.name = 'products';

    this.products = {
      poker: {
        cssClass: 'poker',
        pageUrl: '#'
      },
      casino: {
        cssClass: 'casino',
        pageUrl: '#'
      },
      sports: {
        cssClass: 'sports',
        pageUrl: '#'
      }
    };
  }
}

export default ProductsController;
