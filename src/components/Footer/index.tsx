import React from 'react';
import Link from 'next/link';

const Footer = () => (
  <footer className="mt-10 border-t-2 py-12">
    <div className="mx-auto max-w-3xl">
      <div className="flex justify-between flex-col pl-10 sm:flex-row sm:p-0">
        <div className="mb-6">
          <h4 className="font-bold mb-3">Nosotros</h4>
          <Link href="/about">
            <a>Conoce más</a>
          </Link>
        </div>
        <div className="mb-6">
          <h4 className="font-bold mb-3">Servicios</h4>
          <Link href="/">
            <a>Todos los productos</a>
          </Link>
        </div>
        <div className="mb-6">
          <h4 className="font-bold mb-3">Hecho para</h4>
          <p>
            <a href="https://platzi.com/">Platzi y su curso de Next.JS</a> de
            Platzi <br /> dictado por{' '}
            <a href="https://twitter.com/jonalvarezz">@jonalvarezz</a>
          </p>
          <div className="flex mt-1">
            <a
              className="flex items-center ml-2"
              href="https://twitter.com/jonalvarezz"
            >
              <svg
                className="mr-1"
                width="16px"
                height="16px"
                viewBox="-21 -81 681.33464 681"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m200.964844 515.292969c241.050781 0 372.871094-199.703125 372.871094-372.871094 0-5.671875-.117188-11.320313-.371094-16.9375 25.585937-18.5 47.824218-41.585937 65.371094-67.863281-23.480469 10.441406-48.753907 17.460937-75.257813 20.636718 27.054687-16.230468 47.828125-41.894531 57.625-72.488281-25.320313 15.011719-53.363281 25.917969-83.214844 31.808594-23.914062-25.472656-57.964843-41.402344-95.664062-41.402344-72.367188 0-131.058594 58.6875-131.058594 131.03125 0 10.289063 1.152344 20.289063 3.398437 29.882813-108.917968-5.480469-205.503906-57.625-270.132812-136.921875-11.25 19.363281-17.742188 41.863281-17.742188 65.871093 0 45.460938 23.136719 85.605469 58.316407 109.082032-21.5-.660156-41.695313-6.5625-59.351563-16.386719-.019531.550781-.019531 1.085937-.019531 1.671875 0 63.46875 45.171875 116.460938 105.144531 128.46875-11.015625 2.996094-22.605468 4.609375-34.558594 4.609375-8.429687 0-16.648437-.828125-24.632812-2.363281 16.683594 52.070312 65.066406 89.960937 122.425781 91.023437-44.855469 35.15625-101.359375 56.097657-162.769531 56.097657-10.5625 0-21.003906-.605469-31.2617188-1.816407 57.9999998 37.175781 126.8710938 58.871094 200.8867188 58.871094" />
              </svg>
              Twitter
            </a>
            <a
              className="flex items-center ml-2"
              href="https://github.com/jonalvarezz/platzi-nextjs"
            >
              {/* <img
                className="mr-1"
                width="24px"
                src="/icons/svg/github-icon.svg"
                alt="Github icon"
              /> */}
              <svg
                className="mr-1"
                width="16px"
                height="16px"
                viewBox="0 0 512 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m256 0c-140.609375 0-256 115.390625-256 256 0 119.988281 84.195312 228.984375 196 256v-84.695312c-11.078125 2.425781-21.273438 2.496093-32.550781-.828126-15.128907-4.464843-27.421875-14.542968-36.546875-29.910156-5.816406-9.8125-16.125-20.453125-26.878906-19.671875l-2.636719-29.882812c23.253906-1.992188 43.371093 14.167969 55.3125 34.230469 5.304687 8.921874 11.410156 14.152343 19.246093 16.464843 7.574219 2.230469 15.707032 1.160157 25.183594-2.1875 2.378906-18.972656 11.070313-26.074219 17.636719-36.074219v-.015624c-66.679687-9.945313-93.253906-45.320313-103.800781-73.242188-13.976563-37.074219-6.476563-83.390625 18.238281-112.660156.480469-.570313 1.347656-2.0625 1.011719-3.105469-11.332032-34.230469 2.476562-62.546875 2.984375-65.550781 13.078125 3.867187 15.203125-3.890625 56.808593 21.386718l7.191407 4.320313c3.007812 1.792969 2.0625.769531 5.070312.542969 17.371094-4.71875 35.683594-7.324219 53.726563-7.558594 18.179687.234375 36.375 2.839844 54.464844 7.75l2.328124.234375c-.203124-.03125.632813-.148437 2.035157-.984375 51.972656-31.480469 50.105469-21.191406 64.042969-25.722656.503906 3.007812 14.128906 31.785156 2.917968 65.582031-1.511718 4.65625 45.058594 47.300781 19.246094 115.753906-10.546875 27.933594-37.117188 63.308594-103.796875 73.253907v.015624c8.546875 13.027344 18.816406 19.957032 18.761719 46.832032v105.722656c111.808594-27.015625 196-136.011719 196-256 .003906-140.609375-115.386719-256-255.996094-256zm0 0" />
              </svg>
              GitHub
            </a>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <small>
          <p className="text-center">
            Icons made by{' '}
            <a
              target="_blank"
              href="https://www.flaticon.com/authors/freepik"
              title="Freepik"
            >
              Freepik
            </a>
            {' from '}
            <a
              target="_blank"
              href="https://www.flaticon.com/"
              title="Flaticon"
            >
              www.flaticon.com
            </a>
          </p>
          <p className="text-center">
            Avocado images taken from{' '}
            <a
              className=""
              target="_blank"
              href="https://www.californiaavocado.com/avocado101/avocado-varieties"
              title="California Avocado"
            >
              Avocado 101
            </a>
            {' at '}
            <a
              target="_blank"
              href="https://www.californiaavocado.com"
              title="Flaticon"
            >
              California Avocado
            </a>
          </p>
        </small>
      </div>
    </div>
    <style jsx>{`
      a {
        color: #00aebe;
      }
      a:hover {
        color: #52f1ff;
      }
    `}</style>
  </footer>
);

export default Footer;
