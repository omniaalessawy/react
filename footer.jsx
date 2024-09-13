function Footer() {
    return (
        <>
            {/* Loyalty Program */}
            <section className="container my-5">
                <h2 className="text-center mb-4">Exclusive Offers for Members</h2>
                <div className="row">
                    <div className="col-md-12 text-center">
                        <div className="bg-primary text-white p-4">
                            <h3>Join our loyalty program and earn rewards!</h3>
                            <p>Get points for every purchase and unlock exclusive discounts.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Fashion Inspiration */}
            <section className="container my-5">
                <h2 className="text-center mb-4">Fashion Inspiration</h2>
                <div className="row">
                    <div className="col-md-4">
                        <h5>Winter Trends</h5>
                        <p>Stay warm with these stylish winter essentials.</p>
                    </div>
                    <div className="col-md-4">
                        <h5>Summer Outfits</h5>
                        <p>Explore light and breezy outfits for the hot season.</p>
                    </div>
                    <div className="col-md-4">
                        <h5>Office Wear</h5>
                        <p>Discover elegant yet professional clothing options for work.</p>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-dark text-white text-center py-3">
                <p>© 2024 Clothing Store. All rights reserved.</p>
            </footer>
        </>
    );
}

export default Footer;
