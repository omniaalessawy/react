function Products() {
    return (
        <>
            {/* Featured Products Section */}
            <section className="container my-5">
                <h2 className="text-center mb-4">Featured Products</h2>
                <div className="row">
                    {/* Product 1 */}
                    <div className="col-md-4">
                        <div className="card">
                            <img src="img/download.jpeg" className="card-img-top" alt="Product 1" />
                            <div className="card-body">
                                <h5 className="card-title">Product 1</h5>
                                <p className="card-text">Stylish t-shirt for casual wear.</p>
                                <button className="btn btn-primary">Add to Cart</button>
                            </div>
                        </div>
                    </div>
                    {/* Product 2 */}
                    <div className="col-md-4">
                        <div className="card">
                            <img src="img/download (1).jpeg" className="card-img-top" alt="Product 2" />
                            <div className="card-body">
                                <h5 className="card-title">Product 2</h5>
                                <p className="card-text">Elegant dress for special occasions.</p>
                                <button className="btn btn-primary">Add to Cart</button>
                            </div>
                        </div>
                    </div>
                    {/* Product 3 */}
                    <div className="col-md-4">
                        <div className="card">
                            <img src="img/child.jpeg" className="card-img-top" alt="Product 3" />
                            <div className="card-body">
                                <h5 className="card-title">Product 3</h5>
                                <p className="card-text">Comfortable jeans for everyday use.</p>
                                <button className="btn btn-primary">Add to Cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Products;
