function Main () {
    return (
        <div>
            {/* Main Section */}
            <main>
                {/* Hero Section */}
                <section className="container my-5">
                    <div id="heroCarousel" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="img/454A6013.jpg.png" className="d-block w-100" alt="New Arrivals"/>
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>New Arrivals</h5>
                                    <p>Check out the latest trends!</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src="img/intro-1624717960.webp" className="d-block w-100" alt="Exclusive Discounts"/>
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>Exclusive Discounts</h5>
                                    <p>Up to 50% off on selected items!</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src="img/Design sem nome - 2024-08-26T113444.149.png" className="d-block w-100" alt="Recommended"/>
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>Recommended for You</h5>
                                    <p>Handpicked just for you.</p>
                                </div>
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#heroCarousel" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#heroCarousel" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default Main;
