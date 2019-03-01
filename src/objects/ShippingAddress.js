class ShippingAddress {
  constructor(address1, address2, city, country, state, zipcode) {
    this.address1 = address1;
    this.address2 = address2;
    this.city = city;
    this.country = country;
    this.state = state;
    this.zipcode = zipcode;
  }

  static createShippingAddressFromObject = address => {
    return new ShippingAddress(
      address.address1,
      address.address2,
      address.city,
      address.country,
      address.state,
      address.zipcode
    );
  };
}

export default ShippingAddress;



// WEBPACK FOOTER //
// ./src/objects/ShippingAddress.js