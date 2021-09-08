import React from 'react';

const Footer = () => {
  return (
    <footer id="footer" className="pb-4 pt-4 bg-dark text-light">
          <div className="container">
            <div className="row text-center">
              <div className="col-12 col-md">
                <a href="/">Preguntas frecuentes</a>
              </div>
              <div className="col-12 col-md">
                <a href="/">Contáctanos</a>
              </div>
              <div className="col-12 col-md">
                <a href="/">Prensa</a>
              </div>
              <div className="col-12 col-md">
                <a href="/">Privacidad</a>
              </div>
              <div className="col-12 col-md">
                <a href="/">Términos y condiciones</a>
              </div>
            </div>
          </div>
        </footer>
  );
};

export { Footer };
