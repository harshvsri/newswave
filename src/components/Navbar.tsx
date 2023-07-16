function Navbar() {
  const newsCategories = [
    "World",
    "Politics",
    "Business",
    "Technology",
    "Science",
    "Sports",
    "Entertainment",
    "Health",
  ];

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src="/newspaper.png" alt="" width="40" />
          </a>
          <a className="navbar-brand" href="#">
            NewsWave
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {newsCategories.map((category, index) => (
                <li key={index} className="nav-item">
                  <a className="nav-link" href="#">
                    {category}
                  </a>
                </li>
              ))}
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-dark" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
