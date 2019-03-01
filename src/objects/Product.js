class Product {
  constructor(
    brand,
    category,
    description,
    id,
    images,
    name,
    price,
    purchaseUrl,
    status
  ) {
    this.brand = brand;
    this.category = category;
    this.description = description;
    this.id = id;
    this.images = images;
    this.name = name;
    this.price = price;
    this.purchaseUrl = purchaseUrl;
    this.status = status;
  }

  static sampleProduct = () => {
    return new Product(
      "Lego",
      "Toys",
      "This is a Lego",
      "123",
      [
        "https://sh-s7-live-s.legocdn.com/is/image/LEGOMKTG/checkout--order-processing-minifig"
      ],
      "Lego",
      "219.99",
      "",
      null
    );
  };

  static createProductFromObject = product => {
    return new Product(
      product.brand,
      product.category,
      product.description,
      product.id,
      product.urls,
      product.title,
      product.price,
      product.purchaseUrl,
      product.purchase_status
    );
  };
}

export default Product;



// WEBPACK FOOTER //
// ./src/objects/Product.js