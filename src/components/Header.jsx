import React from 'react'

const Header = () => {
  return (
    <header>
      <div className="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom">
          <a href="/" className="d-flex align-items-center text-dark text-decoration-none">
              <img src="pokeball.png" alt="" width="40" height="40" className="me-2"/>
              <span className="fs-4">Pokedux</span>
          </a>

          <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
              <a className="me-3 py-2 text-dark text-decoration-none" href="https://www.wikidex.net/wiki/WikiDex">Wiki</a>
          </nav>
      </div>

      <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
          <h1 className="display-4 fw-normal">PokeDux</h1>
          <p className="fs-5 text-muted">Gotta Catch ’Em All</p>
      </div>
    </header>
  )
}

export default Header