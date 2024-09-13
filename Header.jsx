function Header() {
    return (
        <div>
            {/* <!-- Header --> */}
            <header className="bg-light py-3">
                <div className="container d-flex justify-content-between align-items-center">
                    <h1 className="logo">Clothing Store</h1>
                    <nav>
                        <ul className="nav">
                            <li className="nav-item"><a href="#" className="nav-link">Home</a></li>
                            <li className="nav-item"><a href="#" className="nav-link">Men</a></li>
                            <li className="nav-item"><a href="#" className="nav-link">Women</a></li>
                            <li className="nav-item"><a href="#" className="nav-link">Kids</a></li>
                        </ul>
                    </nav>
                    <form className="form-inline">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </header>
        </div>
    );
}

export default Header;
