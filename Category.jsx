function Category() {
    return (
        <>
            {/* Categories Section */}
            <section className="container my-5">
                <h2 className="text-center mb-4">Shop by Category</h2>
                <div className="row text-center">
                    <div className="col-md-4">
                        <div className="category-box p-4 bg-light">
                            <h5>Men</h5>
                            <p>Explore our collection of men's clothing.</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="category-box p-4 bg-light">
                            <h5>Women</h5>
                            <p>Shop the latest women's fashion trends.</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="category-box p-4 bg-light">
                            <h5>Kids</h5>
                            <p>Find stylish outfits for kids of all ages.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Category;

