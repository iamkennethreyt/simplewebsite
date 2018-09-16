import React from "react";
import "../styles/styles.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <header class="showcase">
          <div class="content">
            <img
              src="https://image.ibb.co/d4EAuz/Tamis_Kenneth_Rey.jpg"
              class="logo"
              alt="Traversy Media"
            />
            <div class="title">Kenneth Rey Tamis</div>
            <div class="text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
              vel.
            </div>
          </div>
        </header>

        <section class="services">
          <div class="container grid-3 center">
            <div>
              <a href="https://github.com/iamkennethreyt">
                <i class="fab fa-github fa-3x" />
                <h3>GitHub</h3>
              </a>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
                reiciendis!
              </p>
            </div>
            <div>
              <a href="https://facebook.com/iamkennethreyt">
                <i class="fab fa-facebook-f fa-3x" />
                <h3>Facebook</h3>
              </a>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
                reiciendis!
              </p>
            </div>
            <div>
              <a href="https://instagram.com/iamkennethreyt">
                <i class="fab fa-instagram fa-3x" />
                <h3>Instagram</h3>
              </a>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
                reiciendis!
              </p>
            </div>
          </div>
        </section>

        <section class="about bg-light">
          <div class="container">
            <div class="grid-2">
              <div class="center">
                <i class="fas fa-laptop-code fa-10x" />
              </div>
              <div>
                <h3>About Us</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non
                  eos aperiam labore consectetur maiores ea magni exercitationem
                  similique laborum sed, unde, autem vel iure doloribus aliquid.
                  Aspernatur explicabo consectetur consequatur non nesciunt
                  debitis quos alias soluta, ratione, ipsa officia reiciendis.
                </p>
              </div>
            </div>
          </div>
        </section>

        <footer class="center bg-dark">
          <p>Kenneth Rey Tamis &copy; 2018</p>
        </footer>
      </div>
    );
  }
}

export default App;
