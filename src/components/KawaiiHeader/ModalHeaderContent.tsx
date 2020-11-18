import React from 'react';

import { PosMeMuero } from 'src/components/SVGIcons';

const ModalHeaderContent = () => {
  return (
    <div className="container">
      <div>
        <div>
          <div>
            <PosMeMuero size="154px" />
          </div>
          <div>
            <h2>Mataste el aguacate</h2>
            <p>Lo tocaste tanto que lo mataste.</p>
            <p>
              Por otro lado, eres una persona muy curiosa y has descubierto
              esto. :)
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .container {
          padding: 2rem;
        }
      `}</style>
    </div>
  );
};

export default ModalHeaderContent;
