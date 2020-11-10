import Head from 'next/head'
import { MouseEventHandler, useState } from 'react'
import styles from '../styles/Home.module.css'
import classnames from 'classnames'

export default function Home() {
  let [modalActive, setModalActive] = useState(false)
  let [showNavbar, setShowNavbar] = useState(false)

  return (
    <div className={'blubb ' + styles.container}>
      <Head>
        <title>My App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="https://bulma.io">
            <img src="/bulma-logo.png" width="112" height="28" />
          </a>

          <a role="button" className={classnames("navbar-burger", "burger", { "is-active": showNavbar })}
            onClick={() => setShowNavbar(!showNavbar)}
            aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className={classnames("navbar-menu", { "is-active": showNavbar })}>
          <div className="navbar-start">
            <a className="navbar-item">
              Home
            </a>

            <a className="navbar-item">
              Documentation
            </a>

            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">
                More
              </a>

              <div className="navbar-dropdown">
                <a className="navbar-item">
                  About
                </a>
                <a className="navbar-item">
                  Jobs
                </a>
                <a className="navbar-item">
                  Contact
                </a>
                <hr className="navbar-divider" />
                <a className="navbar-item">
                  Report an issue
                </a>
              </div>
            </div>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <a className="button is-primary">
                  <strong>Sign up</strong>
                </a>
                <a className="button is-light">
                  Log in
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <nav className="breadcrumb" aria-label="breadcrumbs">
        <ul>
          <li><a href="#">Bulma</a></li>
          <li><a href="#">Documentation</a></li>
          <li><a href="#">Components</a></li>
          <li className="is-active"><a href="#" aria-current="page">Breadcrumb</a></li>
        </ul>
      </nav>

      <section className="hero is-medium is-primary is-bold">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">
              Hero title
            </h1>
            <h2 className="subtitle">
              Hero subtitle
            </h2>


            <h4>"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."</h4>
            <h5>"There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."</h5>

          </div>
        </div>
      </section>


      <section className="section">
        <div className="container">
          <h1 className="title">Section</h1>
          <h2 className="subtitle">
            A simple container to divide your page into <strong>sections</strong>, like the one you're currently reading
          </h2>

          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis placerat justo.
          Nulla ut placerat ligula, quis rhoncus dui. Curabitur porta molestie lectus,
          id posuere mauris faucibus eu. Praesent pulvinar pulvinar quam at mollis.
          Suspendisse lorem odio, tincidunt et nisi sed, varius mollis est. Nam sodales
          fermentum nulla accumsan aliquet. Suspendisse vel nisi ut turpis auctor mattis
          in scelerisque purus. Sed aliquam at tortor euismod accumsan. Sed cursus erat eget
          enim mattis consequat. Sed rutrum egestas risus et efficitur. Praesent sit amet tortor aliquam,
          fringilla orci vel, venenatis velit.
            </p>

          <p>
            Suspendisse non gravida mauris. Fusce nec justo tortor. Morbi non egestas eros. Morbi eleifend est ac malesuada fermentum. In hac habitasse platea dictumst. Proin efficitur accumsan urna non consequat. Cras imperdiet aliquet orci nec cursus. Quisque hendrerit urna at suscipit aliquet. In convallis rhoncus massa, nec rutrum lectus laoreet in.
          </p>
          <p>
            Vestibulum at diam ut nibh porta hendrerit vel eget metus. Cras sagittis dui id ligula elementum lobortis. Vestibulum feugiat velit malesuada ex rutrum, nec facilisis turpis congue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce laoreet luctus dolor sed tempor. Sed ac sem commodo nisi ultricies lobortis. Aliquam venenatis gravida elit, in porta odio accumsan eget.
          </p>

          <button className="button is-large" onClick={() => setModalActive(true)}>Show Modal</button>

        </div>
      </section>

      <div className="tile is-ancestor">
        <div className="tile is-vertical is-8">
          <div className="tile">
            <div className="tile is-parent is-vertical">
              <article className="tile is-child notification is-primary">
                <p className="title">Vertical...</p>
                <p className="subtitle">Top tile</p>
              </article>
              <article className="tile is-child notification is-warning">
                <p className="title">...tiles</p>
                <p className="subtitle">Bottom tile</p>
              </article>
            </div>
            <div className="tile is-parent">
              <article className="tile is-child notification is-info">
                <p className="title">Middle tile</p>
                <p className="subtitle">With an image</p>
                <figure className="image is-4by3">
                  <img src="/640x480.png" />
                </figure>
              </article>
            </div>
          </div>
          <div className="tile is-parent">
            <article className="tile is-child notification is-danger">
              <p className="title">Wide tile</p>
              <p className="subtitle">Aligned with the right tile</p>
              <div className="content">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis placerat justo.
                Nulla ut placerat ligula, quis rhoncus dui. Curabitur porta molestie lectus,
                id posuere mauris faucibus eu. Praesent pulvinar pulvinar quam at mollis.
                Suspendisse lorem odio, tincidunt et nisi sed, varius mollis est. Nam sodales
                fermentum nulla accumsan aliquet. Suspendisse vel nisi ut turpis auctor mattis
                in scelerisque purus. Sed aliquam at tortor euismod accumsan. Sed cursus erat eget
                enim mattis consequat. Sed rutrum egestas risus et efficitur. Praesent sit amet tortor aliquam,
                fringilla orci vel, venenatis velit.
            </p>
              </div>
            </article>
          </div>
        </div>
        <div className="tile is-parent">
          <article className="tile is-child notification is-success">
            <div className="content">
              <p className="title">Tall tile</p>
              <p className="subtitle">With even more content</p>
              <div className="content">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis placerat justo.
                Nulla ut placerat ligula, quis rhoncus dui. Curabitur porta molestie lectus,
                id posuere mauris faucibus eu. Praesent pulvinar pulvinar quam at mollis.
                Suspendisse lorem odio, tincidunt et nisi sed, varius mollis est. Nam sodales
                fermentum nulla accumsan aliquet. Suspendisse vel nisi ut turpis auctor mattis
                in scelerisque purus. Sed aliquam at tortor euismod accumsan. Sed cursus erat eget
                enim mattis consequat. Sed rutrum egestas risus et efficitur. Praesent sit amet tortor aliquam,
                fringilla orci vel, venenatis velit.</p>

                <p>Suspendisse non gravida mauris. Fusce nec justo tortor. Morbi non egestas eros. Morbi eleifend est ac
                malesuada fermentum. In hac habitasse platea dictumst. Proin efficitur accumsan urna non consequat.
                Cras imperdiet aliquet orci nec cursus. Quisque hendrerit urna at suscipit aliquet. In convallis rhoncus massa,
                  nec rutrum lectus laoreet in.</p>

                <p>Vestibulum at diam ut nibh porta hendrerit vel eget metus. Cras sagittis dui id ligula elementum lobortis.
                Vestibulum feugiat velit malesuada ex rutrum, nec facilisis turpis congue. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Fusce laoreet luctus dolor sed tempor. Sed ac sem commodo nisi ultricies lobortis.
                Aliquam venenatis gravida elit, in porta odio accumsan eget.</p>
              </div>
            </div>
          </article>
        </div>
      </div>

      <div className={classnames("modal", { "is-active": modalActive })}>
        <div className="modal-background"></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">Modal title</p>
            <a role="button" className="delete" aria-label="close" onClick={() => setModalActive(false)}></a>
          </header>
          <section className="modal-card-body">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis placerat justo.
            Nulla ut placerat ligula, quis rhoncus dui. Curabitur porta molestie lectus,
            id posuere mauris faucibus eu. Praesent pulvinar pulvinar quam at mollis.
            Suspendisse lorem odio, tincidunt et nisi sed, varius mollis est. Nam sodales
            fermentum nulla accumsan aliquet. Suspendisse vel nisi ut turpis auctor mattis
            in scelerisque purus. Sed aliquam at tortor euismod accumsan. Sed cursus erat eget
            enim mattis consequat. Sed rutrum egestas risus et efficitur. Praesent sit amet tortor aliquam,
            fringilla orci vel, venenatis velit.</p>
          </section>
          <footer className="modal-card-foot">
            <a role="button" className="button is-success" onClick={() => setModalActive(false)}>Save changes</a>
            <a role="button" className="button" onClick={() => setModalActive(false)}>Cancel</a>
          </footer>
        </div>

      </div>

      <footer className="footer">
        <div className="content has-text-centered">
          <p>
            <strong>Bulma</strong> by <a href="https://jgthms.com">Jeremy Thomas</a>. The source code is licensed
            <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content
            is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
          </p>
        </div>
      </footer>

    </div>
  )
}
