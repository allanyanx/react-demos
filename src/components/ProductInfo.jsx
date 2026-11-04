function ProductInfo() {
    let product = {
        name : "Laptop",
        price : 1200,
        availability : "In Stock"
    };

  return (
    <div>
        <p>Información del producto {product.name}:</p>
        <ul>
            <li>Price: ${product.price}</li>
            <li>Availability: {product.availability}</li>
        </ul>
    </div>
  );
};

export default ProductInfo;