import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Skills: React.FC = () => {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    draggable: true,
    swipe: true,
    touchThreshold: 10,
  };

  return (
    <div className="w-full mt-20" id="skills">
        <h1 className="text-4xl text-white font-bold mb-6 border-b-4 border-white p-4" style={{ borderImage: "linear-gradient(to right, transparent, white, transparent) 1"}}>Skills</h1>
    <Slider {...settings} className=" bg-[#151515] rounded-2xl border-zinc-950 border-2 p-6 shadow-2xl">
    <div className="staks-section w-screen h-12 md:h-48 lg:h-60 flex items-center justify-center ">
        <h1 className=" text-4xl text-white">Front-End</h1>
        <div className="flex space-x-4 mt-8 items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-10 h-10 md:w-32 md:h-32 lg:w-32 lg:h-32"
            viewBox="0 0 48 48"
          >
            <path fill="#E65100" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"></path>
            <path fill="#FF6D00" d="M24 8L24 39.9 35.2 36.7 37.7 8z"></path>
            <path
              fill="#FFF"
              d="M24,25v-4h8.6l-0.7,11.5L24,35.1v-4.2l4.1-1.4l0.3-4.5H24z M32.9,17l0.3-4H24v4H32.9z"
            ></path>
            <path
              fill="#EEE"
              d="M24,30.9v4.2l-7.9-2.6L15.7,27h4l0.2,2.5L24,30.9z M19.1,17H24v-4h-9.1l0.7,12H24v-4h-4.6L19.1,17z"
            ></path>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-10 h-10 md:w-32 md:h-32 lg:w-32 lg:h-32"
            viewBox="0 0 48 48"
          >
            <path fill="#0277BD" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"></path>
            <path fill="#039BE5" d="M24 8L24 39.9 35.2 36.7 37.7 8z"></path>
            <path
              fill="#FFF"
              d="M33.1 13L24 13 24 17 28.9 17 28.6 21 24 21 24 25 28.4 25 28.1 29.5 24 30.9 24 35.1 31.9 32.5 32.6 21 32.6 21z"
            ></path>
            <path
              fill="#EEE"
              d="M24,13v4h-8.9l-0.3-4H24z M19.4,21l0.2,4H24v-4H19.4z M19.8,27h-4l0.3,5.5l7.9,2.6v-4.2l-4.1-1.4L19.8,27z"
            ></path>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-10 h-10 md:w-32 md:h-32 lg:w-32 lg:h-32"
            viewBox="0 0 48 48"
          >
            <path fill="#ffd600" d="M6,42V6h36v36H6z"></path>
            <path
              fill="#000001"
              d="M29.538 32.947c.692 1.124 1.444 2.201 3.037 2.201 1.338 0 2.04-.665 2.04-1.585 0-1.101-.726-1.492-2.198-2.133l-.807-.344c-2.329-.988-3.878-2.226-3.878-4.841 0-2.41 1.845-4.244 4.728-4.244 2.053 0 3.528.711 4.592 2.573l-2.514 1.607c-.553-.988-1.151-1.377-2.078-1.377-.946 0-1.545.597-1.545 1.377 0 .964.6 1.354 1.985 1.951l.807.344C36.452 29.645 38 30.839 38 33.523 38 36.415 35.716 38 32.65 38c-2.999 0-4.702-1.505-5.65-3.368L29.538 32.947zM17.952 33.029c.506.906 1.275 1.603 2.381 1.603 1.058 0 1.667-.418 1.667-2.043V22h3.333v11.101c0 3.367-1.953 4.899-4.805 4.899-2.577 0-4.437-1.746-5.195-3.368L17.952 33.029z"
            ></path>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-10 h-10 md:w-32 md:h-32 lg:w-32 lg:h-32"
            viewBox="0 0 48 48"
          >
            <linearGradient
              id="atmafua87GAY-Q3DVUuwga_nCj4PvnCO0tZ_gr1"
              x1="6"
              x2="42"
              y1="24"
              y2="24"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stop-color="#0d61a9"></stop>
              <stop offset="1" stop-color="#16528c"></stop>
            </linearGradient>
            <path
              fill="url(#atmafua87GAY-Q3DVUuwga_nCj4PvnCO0tZ_gr1)"
              d="M40,6H8C6.895,6,6,6.895,6,8v32c0,1.105,0.895,2,2,2h32c1.105,0,2-0.895,2-2V8 C42,6.895,41.105,6,40,6z"
            ></path>
            <path
              d="M38.819,30.606c-0.814-1.065-1.899-1.683-2.951-2.191c-0.319-0.154-0.639-0.305-0.959-0.456	c-0.665-0.313-1.353-0.637-2.002-0.983c-0.485-0.259-0.382-0.509-0.327-0.644c0.052-0.127,0.264-0.216,0.516-0.216	c0.075,0,0.152,0.008,0.228,0.022c0.284,0.053,0.816,0.507,1.094,0.933l0.272,0.416l0.271,0.416l0.418-0.269l0.418-0.269	c0.082-0.053,2.025-1.302,2.759-1.834l0.304-0.22l0.304-0.22l-0.126-0.353l-0.126-0.353c-0.049-0.138-1.264-3.38-6.221-3.38h-0.006	c-1.611,0.042-2.972,0.603-4.066,1.669c-0.23,0.225-0.434,0.476-0.617,0.745V22v-0.5V21h-0.5H27H14h-0.5H13v0.5V22v3.034v0.5v0.5	h0.5H14h3.972v12.938v0.5v0.5h0.5h0.5h2.993h0.498h0.498l0.002-0.498l0.002-0.498l0.049-12.942H27h0.074	c-0.023,0.238-0.038,0.479-0.033,0.723c0.031,1.573,0.664,3.029,1.737,3.994c0.726,0.653,1.565,1.114,2.377,1.56l0.214,0.118	c0.541,0.299,1.096,0.561,1.632,0.815c0.426,0.202,0.841,0.398,1.247,0.611c0.151,0.079,0.211,0.183,0.205,0.358	c-0.007,0.236-0.099,0.365-0.326,0.461c-0.348,0.147-0.687,0.221-1.009,0.221c-0.484,0-0.954-0.171-1.399-0.509	c-0.238-0.181-0.471-0.455-0.719-0.746c-0.141-0.165-0.284-0.332-0.436-0.497l-0.273-0.294l-0.273-0.294l-0.346,0.202l-0.346,0.202	c-0.869,0.507-2.844,1.696-2.844,1.696l-0.422,0.254l-0.422,0.254l0.248,0.426l0.248,0.426c0.713,1.223,1.711,2.287,2.671,2.848	c1.331,0.778,2.785,1.172,4.322,1.172c0.837,0,1.715-0.118,2.61-0.35c1.932-0.501,3.332-1.751,3.942-3.52	C40.321,34.311,39.983,32.128,38.819,30.606z"
              opacity=".05"
            ></path>
            <path
              d="M32.69,21.505h-0.006l-0.007,0c-1.461,0.038-2.709,0.552-3.71,1.527c-0.934,0.911-1.454,2.264-1.425,3.715 c0.029,1.436,0.601,2.76,1.571,3.633c0.683,0.614,1.497,1.062,2.284,1.494l0.214,0.118c0.528,0.291,1.075,0.551,1.605,0.802 c0.425,0.201,0.85,0.402,1.265,0.62c0.321,0.168,0.485,0.451,0.473,0.817c-0.014,0.43-0.226,0.735-0.631,0.906 c-0.41,0.173-0.814,0.26-1.203,0.26c-0.595,0-1.168-0.206-1.702-0.611c-0.281-0.213-0.532-0.508-0.797-0.82 c-0.136-0.159-0.274-0.322-0.422-0.481l-0.273-0.294l-0.346,0.202c-0.867,0.506-2.838,1.693-2.838,1.693l-0.422,0.254l0.248,0.426 c0.671,1.152,1.602,2.149,2.491,2.668c1.254,0.732,2.623,1.104,4.07,1.104c0.795,0,1.63-0.112,2.484-0.334 c1.764-0.458,3.041-1.594,3.595-3.199c0.587-1.702,0.279-3.701-0.786-5.094c-0.75-0.982-1.775-1.563-2.771-2.045 c-0.317-0.153-0.636-0.304-0.955-0.454c-0.671-0.316-1.365-0.643-2.025-0.995c-0.57-0.304-0.767-0.756-0.555-1.274 c0.133-0.325,0.508-0.527,0.979-0.527c0.105,0,0.213,0.01,0.321,0.031c0.471,0.088,1.104,0.667,1.42,1.152l0.271,0.416 l0.418-0.269c0.082-0.053,2.019-1.299,2.737-1.818l0.304-0.22l-0.126-0.353C38.396,24.429,37.299,21.505,32.69,21.505 L32.69,21.505z"
              opacity=".05"
            ></path>
            <path
              d="M27.5,21.5H27H14h-0.5V22v3.034v0.5H14h4.472v13.438v0.5h0.5h2.993h0.498l0.002-0.498l0.051-13.44H27h0.5v-0.5V22V21.5 L27.5,21.5z"
              opacity=".05"
            ></path>
            <path
              fill="#fff"
              d="M29.832,33.824c0.45,0.485,0.809,0.998,1.284,1.359c1.031,0.784,2.197,0.921,3.401,0.413 c0.579-0.244,0.917-0.716,0.937-1.35c0.018-0.56-0.252-1.019-0.741-1.276c-0.942-0.494-1.93-0.903-2.861-1.417 c-0.834-0.46-1.705-0.916-2.405-1.546c-1.855-1.67-1.851-4.942-0.132-6.617c0.935-0.911,2.064-1.351,3.374-1.385 c4.31,0,5.279,2.716,5.279,2.716c-0.715,0.517-2.714,1.803-2.714,1.803c-0.358-0.549-1.09-1.246-1.747-1.37 c-0.826-0.155-1.593,0.159-1.855,0.798c-0.302,0.737-0.04,1.466,0.782,1.905c0.979,0.522,1.997,0.973,2.997,1.457 c0.98,0.474,1.918,1.018,2.592,1.899c1.704,2.229,1.365,6.494-2.537,7.506c-2.133,0.553-4.218,0.427-6.177-0.718 c-0.923-0.539-1.783-1.581-2.311-2.488C27,35.513,28.967,34.329,29.832,33.824z"
            ></path>
            <polygon
              fill="#fff"
              points="14,22 14,25.034 18.972,25.034 18.972,38.972 21.965,38.972 22.018,25.034 27,25.034 27,22"
            ></polygon>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-10 h-10 md:w-32 md:h-32 lg:w-32 lg:h-32"
            viewBox="0 0 48 48"
          >
            <path
              fill="#7c4dff"
              d="M7.373,11.443C7.293,9.132,9.094,7,11.529,7h24.946c2.435,0,4.236,2.132,4.155,4.443	c-0.077,2.221,0.023,5.097,0.747,7.443c0.726,2.353,1.951,3.84,3.957,4.031v2.167c-2.006,0.191-3.23,1.678-3.957,4.031	c-0.724,2.345-0.824,5.222-0.747,7.443C40.71,38.868,38.909,41,36.475,41H11.529c-2.434,0-4.236-2.132-4.155-4.443	c0.077-2.221-0.023-5.097-0.747-7.443c-0.726-2.353-1.954-3.84-3.96-4.031v-2.167c2.006-0.191,3.233-1.678,3.96-4.031	C7.35,16.54,7.451,13.664,7.373,11.443z"
            ></path>
            <path
              fill="#fff"
              d="M27.073,23.464v-0.028c1.853-0.32,3.299-2.057,3.299-3.97c0-1.352-0.52-2.498-1.504-3.312	c-0.981-0.812-2.357-1.241-3.981-1.241H17.45V33.08h7.475c1.942,0,3.555-0.474,4.663-1.372c1.109-0.899,1.696-2.207,1.696-3.783	C31.283,25.544,29.593,23.756,27.073,23.464z M23.59,22.608h-3.181V17.29h3.784c2.076,0,3.219,0.911,3.219,2.565	C27.413,21.63,26.055,22.608,23.59,22.608z M20.409,24.834h3.759c2.716,0,4.092,0.981,4.092,2.916c0,1.932-1.357,2.953-3.925,2.953	h-3.926V24.834z"
            ></path>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-10 h-10 md:w-32 md:h-32 lg:w-32 lg:h-32"
            viewBox="0 0 40 40"
          >
            <path
              fill="#98ccfd"
              d="M23.5,20c0,1.935-1.565,3.5-3.5,3.5s-3.5-1.565-3.5-3.5s1.565-3.5,3.5-3.5S23.5,18.065,23.5,20z"
            ></path>
            <path
              fill="#4788c7"
              d="M20,24c-2.206,0-4-1.794-4-4s1.794-4,4-4s4,1.794,4,4S22.206,24,20,24z M20,17c-1.654,0-3,1.346-3,3 s1.346,3,3,3s3-1.346,3-3S21.654,17,20,17z"
            ></path>
            <g>
              <path
                fill="#98ccfd"
                d="M39.5,20c0-2.796-2.912-5.232-7.492-6.787c0.576-2.671,0.655-5.055,0.166-6.881 c-0.408-1.522-1.181-2.617-2.296-3.253c-0.671-0.382-1.438-0.577-2.279-0.577c-2.207,0-4.893,1.401-7.597,3.791 C17.296,3.902,14.609,2.5,12.4,2.5c-0.842,0-1.608,0.194-2.279,0.577C9.006,3.714,8.232,4.81,7.825,6.333 c-0.489,1.826-0.41,4.21,0.165,6.88C3.412,14.768,0.5,17.205,0.5,20s2.912,5.232,7.491,6.786c-0.576,2.67-0.655,5.054-0.165,6.88 c0.407,1.524,1.181,2.619,2.297,3.257c0.671,0.382,1.438,0.577,2.279,0.577c0.001,0,0,0,0.001,0c2.208,0,4.894-1.401,7.598-3.793 c2.704,2.389,5.39,3.789,7.597,3.79c0.001,0,0.001,0,0.001,0c0.842,0,1.608-0.194,2.28-0.577c1.114-0.636,1.887-1.731,2.294-3.253 c0.489-1.826,0.41-4.21-0.165-6.88C36.587,25.233,39.5,22.796,39.5,20z M28.888,4.817c0.634,0.362,1.09,1.046,1.354,2.033 c0.401,1.496,0.322,3.509-0.158,5.79c-1.596-0.417-3.343-0.734-5.208-0.938c-1.11-1.502-2.269-2.855-3.44-4.041 c2.397-2.087,4.598-3.158,6.163-3.158C28.089,4.503,28.522,4.609,28.888,4.817z M25.784,23.287 c-0.653,1.117-1.324,2.152-2.003,3.119c-1.205,0.105-2.467,0.162-3.782,0.162c-1.316,0-2.578-0.058-3.784-0.162 c-0.679-0.967-1.35-2.002-2.003-3.119C13.576,22.197,13,21.096,12.481,20c0.519-1.095,1.095-2.197,1.732-3.287 c0.653-1.117,1.325-2.152,2.004-3.12c1.205-0.105,2.468-0.162,3.783-0.162c1.315,0,2.577,0.057,3.781,0.162 c0.679,0.968,1.35,2.002,2.003,3.119c0.637,1.09,1.214,2.192,1.733,3.287C26.998,21.096,26.421,22.197,25.784,23.287z M28.558,22.392c0.41,1.036,0.756,2.052,1.041,3.035c-0.99,0.258-2.057,0.478-3.194,0.655c0.377-0.582,0.748-1.174,1.106-1.787 C27.881,23.663,28.226,23.028,28.558,22.392z M20,30.983c-0.729-0.738-1.467-1.556-2.205-2.47c0.724,0.034,1.457,0.055,2.205,0.055 c0.747,0,1.48-0.021,2.203-0.055C21.466,29.427,20.729,30.246,20,30.983z M13.593,26.082c-1.136-0.177-2.203-0.397-3.193-0.655 c0.285-0.983,0.63-1.998,1.04-3.034c0.332,0.635,0.677,1.271,1.046,1.903C12.844,24.908,13.216,25.5,13.593,26.082z M11.44,17.607 c-0.41-1.036-0.755-2.051-1.04-3.034c0.99-0.258,2.057-0.478,3.194-0.655c-0.377,0.582-0.749,1.174-1.107,1.786 C12.117,16.337,11.772,16.972,11.44,17.607z M20.001,9.018c0.729,0.737,1.466,1.555,2.202,2.469 c-0.723-0.034-1.456-0.055-2.203-0.055s-1.48,0.021-2.203,0.055C18.534,10.573,19.272,9.755,20.001,9.018z M27.511,15.704 c-0.358-0.613-0.729-1.205-1.106-1.787c1.137,0.177,2.204,0.397,3.194,0.655c-0.285,0.984-0.631,1.999-1.041,3.036 C28.226,16.973,27.881,16.337,27.511,15.704z M9.757,6.851c0.265-0.989,0.721-1.674,1.355-2.037C11.478,4.606,11.911,4.5,12.4,4.5 c1.567,0,3.768,1.072,6.166,3.161c-1.172,1.187-2.332,2.539-3.443,4.042c-1.865,0.204-3.612,0.522-5.208,0.939 C9.435,10.359,9.356,8.346,9.757,6.851z M2.5,20c0-1.729,2.231-3.566,5.983-4.857C8.935,16.708,9.538,18.342,10.28,20 c-0.742,1.658-1.345,3.292-1.797,4.857C4.731,23.566,2.5,21.729,2.5,20z M12.401,35.5c-0.49,0-0.924-0.106-1.288-0.313 c-0.636-0.363-1.092-1.048-1.356-2.037c-0.401-1.496-0.322-3.509,0.158-5.79c1.596,0.417,3.342,0.734,5.207,0.938 c1.111,1.503,2.271,2.856,3.444,4.043C16.168,34.429,13.967,35.5,12.401,35.5z M30.241,33.15c-0.265,0.987-0.72,1.671-1.354,2.033 c-0.365,0.208-0.799,0.314-1.289,0.314c-1.566,0-3.767-1.071-6.164-3.157c1.172-1.187,2.331-2.54,3.441-4.042 c1.865-0.204,3.611-0.522,5.207-0.938C30.563,29.641,30.642,31.654,30.241,33.15z M31.515,24.858 c-0.452-1.565-1.055-3.199-1.797-4.858c0.742-1.659,1.345-3.293,1.797-4.858C35.268,16.433,37.5,18.271,37.5,20 C37.5,21.729,35.268,23.567,31.515,24.858z"
              ></path>
              <path
                fill="#4788c7"
                d="M12.402,38c-0.93,0-1.78-0.216-2.528-0.642c-1.237-0.708-2.089-1.906-2.532-3.563 c-0.472-1.762-0.446-4.064,0.07-6.682C2.694,25.42,0,22.842,0,20s2.694-5.42,7.412-7.114c-0.517-2.617-0.542-4.92-0.07-6.682 C7.785,4.548,8.637,3.35,9.873,2.643c2.52-1.438,6.178-0.393,10.128,2.988c3.949-3.378,7.604-4.422,10.125-2.986 c1.235,0.705,2.087,1.902,2.531,3.558c0.472,1.763,0.446,4.066-0.071,6.683C37.305,14.579,40,17.158,40,20 c0,2.842-2.695,5.421-7.414,7.115c0.518,2.617,0.542,4.919,0.07,6.682c-0.443,1.656-1.294,2.853-2.529,3.558 C27.604,38.793,23.946,37.746,20,34.37C17.224,36.747,14.604,38,12.402,38z M12.4,3c-0.753,0-1.437,0.172-2.031,0.511 C9.373,4.081,8.68,5.074,8.309,6.462c-0.458,1.707-0.398,4.005,0.171,6.646l0.094,0.436l-0.422,0.144C3.606,15.23,1,17.531,1,20 s2.606,4.77,7.151,6.313l0.422,0.144l-0.094,0.436c-0.569,2.641-0.629,4.939-0.171,6.646c0.371,1.389,1.064,2.382,2.062,2.952 C10.965,36.828,11.648,37,12.401,37h0.001c2.012,0,4.592-1.302,7.267-3.667L20,33.04l0.331,0.293 c2.674,2.362,5.255,3.664,7.267,3.664c0.754,0,1.438-0.172,2.034-0.511c0.994-0.568,1.687-1.56,2.058-2.948 c0.458-1.707,0.398-4.004-0.171-6.645l-0.094-0.436l0.422-0.144C36.393,24.771,39,22.469,39,20c0-2.47-2.607-4.771-7.153-6.313 l-0.422-0.144l0.095-0.436c0.569-2.641,0.629-4.939,0.171-6.646c-0.372-1.389-1.065-2.38-2.061-2.948 c-0.595-0.339-1.278-0.511-2.031-0.511c-2.011,0-4.591,1.302-7.267,3.666l-0.331,0.293L19.67,6.668C16.994,4.303,14.413,3,12.4,3z M12.401,36c-0.577,0-1.094-0.127-1.535-0.379c-0.756-0.432-1.292-1.22-1.593-2.342c-0.408-1.527-0.355-3.61,0.152-6.022 l0.108-0.513l0.507,0.132c1.591,0.415,3.317,0.727,5.135,0.925l0.217,0.024L15.523,28c1.073,1.451,2.217,2.793,3.397,3.989 l0.374,0.379l-0.401,0.35C16.464,34.834,14.158,36,12.401,36z M10.303,27.973c-0.468,2.04-0.482,3.777-0.063,5.047 c0.278,0.841,0.605,1.438,1.121,1.732c1.294,0.739,3.813-0.237,6.473-2.446c-1.033-1.08-2.035-2.267-2.984-3.536 C13.257,28.588,11.73,28.32,10.303,27.973z M27.599,35.997c-1.757,0-4.063-1.165-6.491-3.28l-0.401-0.349l0.374-0.379 c1.185-1.202,2.327-2.543,3.394-3.988l0.13-0.176l0.218-0.024c1.819-0.199,3.548-0.51,5.137-0.925l0.508-0.132l0.107,0.513 c0.507,2.414,0.56,4.496,0.151,6.022c-0.301,1.121-0.836,1.908-1.589,2.338C28.693,35.87,28.176,35.997,27.599,35.997z M22.166,32.306c2.66,2.207,5.171,3.184,6.475,2.443c0.513-0.292,0.839-0.889,1.117-1.728c0.422-1.271,0.405-3.008-0.062-5.047 c-1.427,0.347-2.954,0.614-4.549,0.797C24.204,30.035,23.203,31.221,22.166,32.306z M20,31.695l-0.355-0.36 c-0.773-0.782-1.526-1.625-2.238-2.508l-0.7-0.867l1.112,0.053c1.431,0.068,2.931,0.068,4.361,0l1.111-0.053l-0.698,0.866 c-0.71,0.879-1.462,1.723-2.237,2.507L20,31.695z M18.898,29.054c0.359,0.417,0.728,0.822,1.102,1.212 c0.374-0.392,0.741-0.796,1.101-1.212C20.372,29.073,19.627,29.073,18.898,29.054z M20,27.068c-1.284,0-2.571-0.055-3.827-0.164 l-0.232-0.02l-0.134-0.191c-0.721-1.027-1.402-2.089-2.025-3.154c-0.619-1.061-1.209-2.179-1.753-3.325L11.927,20l0.102-0.214 c0.544-1.146,1.134-2.265,1.753-3.325c0.63-1.078,1.293-2.109,2.027-3.155l0.134-0.19l0.232-0.02c2.508-0.218,5.142-0.218,7.649,0 l0.232,0.02l0.134,0.191c0.736,1.05,1.399,2.082,2.025,3.154c0.625,1.07,1.215,2.188,1.753,3.326L28.069,20l-0.101,0.214 c-0.538,1.137-1.128,2.256-1.753,3.326c-0.626,1.072-1.289,2.104-2.025,3.154l-0.134,0.191l-0.232,0.02 C22.57,27.013,21.284,27.068,20,27.068z M16.491,25.928c2.309,0.187,4.71,0.187,7.015,0c0.667-0.961,1.272-1.91,1.847-2.893 c0.571-0.977,1.112-1.997,1.61-3.035c-0.498-1.038-1.039-2.058-1.61-3.035c-0.574-0.983-1.18-1.932-1.847-2.893 c-2.306-0.187-4.711-0.187-7.013,0c-0.665,0.958-1.271,1.906-1.849,2.894c-0.565,0.968-1.107,1.988-1.61,3.034 c0.503,1.045,1.044,2.065,1.61,3.035C15.215,24.01,15.836,24.982,16.491,25.928z M25.377,26.749l0.607-0.938 c0.373-0.576,0.74-1.162,1.095-1.767c0.366-0.626,0.707-1.255,1.035-1.883l0.506-0.968l0.402,1.016 c0.405,1.023,0.761,2.06,1.057,3.081l0.143,0.494l-0.497,0.129c-1.017,0.264-2.107,0.488-3.243,0.665L25.377,26.749z M28.479,23.6 c-0.174,0.316-0.353,0.633-0.537,0.949c-0.168,0.288-0.34,0.571-0.513,0.851c0.528-0.1,1.042-0.209,1.54-0.329 C28.819,24.581,28.655,24.09,28.479,23.6z M14.621,26.749l-1.105-0.172c-1.136-0.177-2.227-0.401-3.241-0.665l-0.497-0.129 l0.143-0.493c0.294-1.017,0.649-2.053,1.056-3.08l0.402-1.017l0.506,0.97c0.327,0.628,0.668,1.256,1.034,1.882 c0.354,0.605,0.722,1.191,1.095,1.767L14.621,26.749z M11.029,25.069c0.496,0.119,1.01,0.229,1.537,0.329 c-0.173-0.279-0.344-0.562-0.512-0.85c-0.185-0.315-0.362-0.631-0.536-0.948C11.342,24.092,11.179,24.582,11.029,25.069z M31.18,25.502l-0.146-0.505c-0.446-1.548-1.043-3.16-1.772-4.792L29.17,20l0.092-0.204c0.729-1.63,1.326-3.243,1.773-4.792 l0.146-0.505l0.498,0.171C35.637,16.031,38,18.024,38,20c0,1.977-2.363,3.969-6.322,5.331L31.18,25.502z M30.265,20 c0.63,1.427,1.159,2.84,1.579,4.209C34.993,23.039,37,21.412,37,20s-2.007-3.039-5.156-4.209 C31.424,17.162,30.894,18.574,30.265,20z M8.817,25.501L8.32,25.33C4.363,23.968,2,21.976,2,20s2.363-3.968,6.32-5.33l0.497-0.171 l0.146,0.505c0.449,1.554,1.045,3.167,1.772,4.792L10.828,20l-0.092,0.204c-0.728,1.625-1.323,3.238-1.772,4.792L8.817,25.501z M8.155,15.791C5.006,16.962,3,18.589,3,20s2.006,3.038,5.155,4.209c0.421-1.375,0.95-2.787,1.578-4.209 C9.105,18.578,8.576,17.166,8.155,15.791z M11.378,18.809l-0.402-1.017c-0.406-1.027-0.762-2.063-1.056-3.08l-0.143-0.493 l0.497-0.129c1.016-0.264,2.106-0.488,3.242-0.665l1.106-0.172l-0.61,0.939c-0.373,0.575-0.74,1.161-1.095,1.766 c-0.366,0.625-0.707,1.254-1.034,1.882L11.378,18.809z M11.029,14.931c0.149,0.487,0.313,0.978,0.489,1.469 c0.174-0.316,0.352-0.632,0.536-0.948c0.168-0.287,0.339-0.57,0.512-0.85C12.039,14.701,11.525,14.812,11.029,14.931z M28.62,18.809l-0.506-0.969c-0.328-0.629-0.669-1.257-1.035-1.883c-0.354-0.605-0.722-1.191-1.095-1.767l-0.607-0.938l1.104,0.172 c1.137,0.177,2.229,0.401,3.243,0.666l0.497,0.129l-0.143,0.494c-0.296,1.02-0.651,2.057-1.057,3.081L28.62,18.809z M27.43,14.601 c0.173,0.28,0.345,0.563,0.513,0.851c0.185,0.316,0.363,0.632,0.537,0.949c0.176-0.491,0.34-0.982,0.49-1.47 C28.473,14.811,27.958,14.701,27.43,14.601z M30.465,13.257l-0.507-0.132c-1.587-0.415-3.315-0.726-5.137-0.925l-0.218-0.024 l-0.13-0.176c-1.07-1.449-2.212-2.791-3.394-3.987l-0.374-0.379l0.401-0.35c3.229-2.811,6.243-3.919,8.027-2.901 c0.755,0.431,1.29,1.218,1.591,2.338c0.408,1.527,0.355,3.61-0.152,6.023L30.465,13.257z M25.147,11.229 c1.597,0.183,3.123,0.451,4.549,0.798c0.517-1.907,0.59-3.595,0.063-5.048c-0.302-0.83-0.604-1.435-1.119-1.729 c-1.298-0.74-3.812,0.236-6.473,2.444C23.2,8.775,24.201,9.962,25.147,11.229z M9.534,13.257l-0.108-0.513 c-0.508-2.413-0.561-4.495-0.152-6.022c0.301-1.123,0.836-1.911,1.591-2.341c1.789-1.02,4.801,0.091,8.03,2.904l0.402,0.35 l-0.375,0.379c-1.184,1.197-2.326,2.539-3.396,3.987l-0.13,0.176l-0.218,0.024c-1.818,0.199-3.547,0.51-5.137,0.925L9.534,13.257z M12.4,5c-0.401,0-0.751,0.083-1.041,0.249c-0.514,0.293-0.774,0.916-1.119,1.731c-0.54,1.275-0.449,3.011,0.063,5.047 c1.428-0.347,2.954-0.615,4.549-0.798c0.946-1.267,1.948-2.453,2.983-3.534C15.766,5.977,13.803,5,12.4,5z M16.709,12.039 l0.699-0.866c0.71-0.88,1.463-1.723,2.237-2.507l0.355-0.36l0.355,0.36c0.777,0.787,1.529,1.63,2.236,2.506l0.697,0.866 l-1.11-0.052c-1.43-0.067-2.93-0.067-4.359,0L16.709,12.039z M20,10.932c0.37,0,0.737,0.005,1.101,0.014 c-0.357-0.415-0.726-0.819-1.1-1.211c-0.374,0.391-0.742,0.795-1.101,1.211C19.264,10.937,19.63,10.932,20,10.932z"
              ></path>
            </g>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-10 h-10 md:w-32 md:h-32 lg:w-32 lg:h-32"
            viewBox="0 0 48 48"
          >
            <linearGradient
              id="iOmQfjoCC4Hw6zVwRjSDha_x7XMNGh2vdqA_gr1"
              x1="21.861"
              x2="25.703"
              y1="8.237"
              y2="36.552"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stop-color="#00c1e0"></stop>
              <stop offset="1" stop-color="#009bb8"></stop>
            </linearGradient>
            <path
              fill="url(#iOmQfjoCC4Hw6zVwRjSDha_x7XMNGh2vdqA_gr1)"
              d="M24,9.604c-5.589,0-9.347,2.439-11.276,7.318c-0.2,0.505,0.417,0.92,0.816,0.551 c2.035-1.882,4.322-2.505,6.86-1.871c1.826,0.456,3.131,1.781,4.576,3.247C27.328,21.236,30.051,24,36,24 c5.589,0,9.348-2.44,11.276-7.319c0.2-0.505-0.417-0.92-0.816-0.551c-2.035,1.882-4.322,2.506-6.86,1.872 c-1.825-0.456-3.13-1.781-4.575-3.247C32.672,12.367,29.948,9.604,24,9.604L24,9.604z M12,24c-5.589,0-9.348,2.44-11.276,7.319 c-0.2,0.505,0.417,0.92,0.816,0.551c2.035-1.882,4.322-2.506,6.86-1.871c1.825,0.457,3.13,1.781,4.575,3.246 c2.353,2.388,5.077,5.152,11.025,5.152c5.589,0,9.348-2.44,11.276-7.319c0.2-0.505-0.417-0.92-0.816-0.551 c-2.035,1.882-4.322,2.506-6.86,1.871c-1.826-0.456-3.131-1.781-4.576-3.246C20.672,26.764,17.949,24,12,24L12,24z"
            ></path>
          </svg>
        </div>
      </div>
      <div className="staks-section w-screen h-48 flex items-center justify-center ">
        <h1 className=" text-4xl text-white">Back-End</h1>
        <div className="flex space-x-4 mt-8 items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-10 h-10 md:w-32 md:h-32 lg:w-32 lg:h-32"
            viewBox="0 0 48 48"
          >
            <path
              fill="#F44336"
              d="M23.65,24.898c-0.998-1.609-1.722-2.943-2.725-5.455C19.229,15.2,31.24,11.366,26.37,3.999c2.111,5.089-7.577,8.235-8.477,12.473C17.07,20.37,23.645,24.898,23.65,24.898z"
            ></path>
            <path
              fill="#F44336"
              d="M23.878,17.27c-0.192,2.516,2.229,3.857,2.299,5.695c0.056,1.496-1.447,2.743-1.447,2.743s2.728-0.536,3.579-2.818c0.945-2.534-1.834-4.269-1.548-6.298c0.267-1.938,6.031-5.543,6.031-5.543S24.311,11.611,23.878,17.27z"
            ></path>
            <g>
              <path
                fill="#1565C0"
                d="M32.084 25.055c1.754-.394 3.233.723 3.233 2.01 0 2.901-4.021 5.643-4.021 5.643s6.225-.742 6.225-5.505C37.521 24.053 34.464 23.266 32.084 25.055zM29.129 27.395c0 0 1.941-1.383 2.458-1.902-4.763 1.011-15.638 1.147-15.638.269 0-.809 3.507-1.638 3.507-1.638s-7.773-.112-7.773 2.181C11.683 28.695 21.858 28.866 29.129 27.395z"
              ></path>
              <path
                fill="#1565C0"
                d="M27.935,29.571c-4.509,1.499-12.814,1.02-10.354-0.993c-1.198,0-2.974,0.963-2.974,1.889c0,1.857,8.982,3.291,15.63,0.572L27.935,29.571z"
              ></path>
              <path
                fill="#1565C0"
                d="M18.686,32.739c-1.636,0-2.695,1.054-2.695,1.822c0,2.391,9.76,2.632,13.627,0.205l-2.458-1.632C24.271,34.404,17.014,34.579,18.686,32.739z"
              ></path>
              <path
                fill="#1565C0"
                d="M36.281,36.632c0-0.936-1.055-1.377-1.433-1.588c2.228,5.373-22.317,4.956-22.317,1.784c0-0.721,1.807-1.427,3.477-1.093l-1.42-0.839C11.26,34.374,9,35.837,9,37.017C9,42.52,36.281,42.255,36.281,36.632z"
              ></path>
              <path
                fill="#1565C0"
                d="M39,38.604c-4.146,4.095-14.659,5.587-25.231,3.057C24.341,46.164,38.95,43.628,39,38.604z"
              ></path>
            </g>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-10 h-10 md:w-32 md:h-32 lg:w-32 lg:h-32"
            viewBox="0 0 16 16"
          >
            <path
              fill="#dcd5f2"
              d="M8,11.5c-4.065,0-7.5-1.832-7.5-4s3.435-4,7.5-4s7.5,1.832,7.5,4S12.065,11.5,8,11.5z"
            ></path>
            <path
              fill="#8b75a1"
              d="M8,4c4.125,0,7,1.845,7,3.5S12.125,11,8,11S1,9.155,1,7.5S3.875,4,8,4 M8,3C3.582,3,0,5.015,0,7.5 S3.582,12,8,12s8-2.015,8-4.5S12.418,3,8,3L8,3z"
            ></path>
            <path
              fill="#36404d"
              d="M4.525 7C4.758 7 4.924 7.076 4.98 7.147 4.99 7.16 5.017 7.194 4.989 7.312 4.901 7.681 4.826 8 3.729 8H3.634l.188-1H4.525M4.525 6H2.992l-.75 4H3.22l.188-1h.321c1.256 0 1.978-.381 2.233-1.457C6.182 6.619 5.452 6 4.525 6L4.525 6zM12.525 7c.233 0 .399.076.455.147.01.013.037.047.009.165C12.901 7.681 12.826 8 11.729 8h-.094l.188-1H12.525M12.525 6h-1.534l-.75 4h.978l.188-1h.321c1.256 0 1.978-.381 2.233-1.457C14.182 6.619 13.452 6 12.525 6L12.525 6z"
            ></path>
            <g>
              <path
                fill="#36404d"
                d="M9.689,6.242C9.5,6.07,9.168,6,8.673,6H8.044l0.258-1H7.295L6.459,9h1.019l0.39-2h0.176h0.629 C8.742,7,8.801,7.002,8.85,7.004L8.468,9h1.04l0.348-1.926C9.93,6.692,9.874,6.412,9.689,6.242z"
              ></path>
            </g>
          </svg>
          <img
            className="w-10 h-10 md:w-32 md:h-32 lg:w-32 lg:h-32"
            src="https://img.icons8.com/nolan/100/laravel.png"
            alt="laravel"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-10 h-10 md:w-32 md:h-32 lg:w-32 lg:h-32"
            viewBox="0 0 48 48"
          >
            <path
              fill="#0277bd"
              d="M24.047,5c-1.555,0.005-2.633,0.142-3.936,0.367c-3.848,0.67-4.549,2.077-4.549,4.67V14h9v2H15.22	h-4.35c-2.636,0-4.943,1.242-5.674,4.219c-0.826,3.417-0.863,5.557,0,9.125C5.851,32.005,7.294,34,9.931,34h3.632v-5.104	c0-2.966,2.686-5.896,5.764-5.896h7.236c2.523,0,5-1.862,5-4.377v-8.586c0-2.439-1.759-4.263-4.218-4.672	C27.406,5.359,25.589,4.994,24.047,5z M19.063,9c0.821,0,1.5,0.677,1.5,1.502c0,0.833-0.679,1.498-1.5,1.498	c-0.837,0-1.5-0.664-1.5-1.498C17.563,9.68,18.226,9,19.063,9z"
            ></path>
            <path
              fill="#ffc107"
              d="M23.078,43c1.555-0.005,2.633-0.142,3.936-0.367c3.848-0.67,4.549-2.077,4.549-4.67V34h-9v-2h9.343	h4.35c2.636,0,4.943-1.242,5.674-4.219c0.826-3.417,0.863-5.557,0-9.125C41.274,15.995,39.831,14,37.194,14h-3.632v5.104	c0,2.966-2.686,5.896-5.764,5.896h-7.236c-2.523,0-5,1.862-5,4.377v8.586c0,2.439,1.759,4.263,4.218,4.672	C19.719,42.641,21.536,43.006,23.078,43z M28.063,39c-0.821,0-1.5-0.677-1.5-1.502c0-0.833,0.679-1.498,1.5-1.498	c0.837,0,1.5,0.664,1.5,1.498C29.563,38.32,28.899,39,28.063,39z"
            ></path>
          </svg>
          <img
            src="../src/images/nodejs-icon.svg"
            alt="icono node js"
            className="w-10 h-10 md:w-32 md:h-32 lg:w-32 lg:h-32"
          />
        </div>
      </div>
      <div className="staks-section w-screen h-48 flex items-center justify-center ">
        <h1 className=" text-4xl text-white">Databases</h1>
        <div className="flex space-x-4 mt-8 items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-10 h-10 md:w-32 md:h-32 lg:w-32 lg:h-32"
            viewBox="0 0 48 48"
          >
            <path
              fill="#00796b"
              d="M0.002,35.041h1.92v-7.085l2.667,6.057c0.329,0.755,0.779,1.022,1.662,1.022 s1.315-0.267,1.644-1.022l2.667-5.902v6.93h1.92v-7.258c0-0.697-0.277-1.035-0.849-1.209c-1.367-0.43-2.285-0.059-2.7,0.872 l-2.735,6.16l-2.649-6.16c-0.398-0.93-1.332-1.302-2.7-0.872C0.277,26.748,0,27.085,0,27.782v7.258H0.002z"
            ></path>
            <path
              fill="#00796b"
              d="M13.441,29.281h1.92v4.055c-0.015,0.2,0.064,0.731,0.99,0.745c0.472,0.008,2.821,0,2.85,0v-4.8h1.92 c0.008,0,0,5.968,0,5.993c0.01,1.472-1.828,1.662-2.673,1.687h-5.006v-0.96c0.01,0,4.787,0.001,4.801,0 c1.088-0.115,0.959-0.714,0.959-0.896v-0.064H16.19c-1.67-0.015-2.735-0.751-2.747-1.59C13.441,33.373,13.479,29.317,13.441,29.281 z"
            ></path>
            <path
              fill="#f57f17"
              d="M22.081,35.041h4.807c0.63,0,1.242-0.132,1.728-0.36c0.81-0.372,1.144-0.875,1.144-1.536v-1.368 c0-1.476-1.83-1.536-2.88-1.536h-1.92c-0.755,0-0.87-0.456-0.96-0.96v-0.96c0.09-0.384,0.258-0.9,0.923-0.96 c0.773,0,4.836,0,4.836,0v-0.96h-4.566c-0.755,0-3.114,0.09-3.114,1.92v1.187c0,0.84,0.738,1.524,2.34,1.692 c0.18,0.012,0.36,0.024,0.539,0.024c0,0,1.866-0.036,1.92-0.024c1.08,0,0.96,0.84,0.96,0.96v0.96c0,0.132-0.03,0.96-0.971,0.96 c-0.072,0-4.789,0-4.789,0V35.041z"
            ></path>
            <path
              fill="#f57f17"
              d="M40.32,33.08c0,1.159,0.655,1.809,2.392,1.939c0.162,0.011,0.325,0.021,0.488,0.021H48v-0.96h-4.435 c-0.991,0-1.325-0.416-1.325-1.011v-6.669h-1.92V33.08z"
            ></path>
            <path
              fill="#f57f17"
              d="M30.704,33.121v-4.8c0-1.02,0.5-1.724,1.916-1.92h0.672h3.447h0.525 c1.416,0.196,2.08,0.899,2.08,1.92v4.782c0,0.827-0.215,1.271-0.916,1.559L39.916,36h-2.16l-1.07-0.96h-1.257l-2.136,0.012 c-0.309,0-0.635-0.043-0.993-0.141C31.226,34.618,30.704,34.054,30.704,33.121z M32.624,33.121c0.098,0.467,0.473,0.96,1.14,0.96 h1.864l-1.068-0.96h2.175l0.519,0.482c0,0,0.186-0.152,0.186-0.482c0-0.33-0.016-4.8-0.016-4.8c-0.098-0.434-0.538-0.96-1.188-0.96 h-2.471c-0.749,0-1.14,0.548-1.14,1.058L32.624,33.121L32.624,33.121z"
            ></path>
            <path
              fill="#00796b"
              d="M46.199,25.389c-1.031-0.028-1.818,0.068-2.491,0.351c-0.191,0.081-0.496,0.083-0.528,0.323 c0.105,0.11,0.121,0.275,0.205,0.41c0.16,0.26,0.432,0.609,0.674,0.791c0.265,0.2,0.538,0.414,0.821,0.587 c0.504,0.307,1.067,0.483,1.553,0.791c0.286,0.181,0.57,0.411,0.85,0.615c0.138,0.102,0.23,0.259,0.41,0.323 c0-0.01,0-0.019,0-0.029c-0.094-0.12-0.119-0.285-0.205-0.411c-0.127-0.127-0.254-0.254-0.381-0.381 c-0.372-0.494-0.846-0.929-1.348-1.289c-0.401-0.288-1.298-0.677-1.466-1.143c-0.01-0.01-0.019-0.019-0.03-0.03 c0.284-0.032,0.617-0.135,0.879-0.205c0.441-0.118,0.834-0.087,1.289-0.205c0.205-0.059,0.41-0.117,0.615-0.176 c0-0.039,0-0.078,0-0.117c-0.23-0.236-0.395-0.548-0.645-0.762c-0.657-0.559-1.373-1.117-2.11-1.583 c-0.409-0.258-0.915-0.426-1.348-0.645c-0.146-0.074-0.402-0.112-0.498-0.234c-0.228-0.29-0.351-0.659-0.527-0.996 c-0.368-0.708-0.73-1.482-1.055-2.227c-0.223-0.508-0.368-1.01-0.645-1.466c-1.331-2.188-2.764-3.509-4.982-4.807 c-0.472-0.276-1.041-0.385-1.642-0.528c-0.323-0.019-0.645-0.039-0.968-0.059c-0.197-0.083-0.401-0.323-0.587-0.44 c-0.735-0.465-2.621-1.475-3.165-0.147c-0.344,0.838,0.514,1.656,0.821,2.081c0.215,0.298,0.491,0.632,0.645,0.968 c0.101,0.22,0.119,0.441,0.205,0.674c0.213,0.574,0.55,1.228,0.826,1.759c0.139,0.269,0.293,0.551,0.469,0.791 c0.108,0.147,0.293,0.212,0.323,0.44c-0.181,0.253-0.191,0.646-0.293,0.968c-0.458,1.445-0.285,3.24,0.381,4.308 c0.204,0.328,0.686,1.032,1.348,0.762c0.579-0.236,0.45-0.967,0.615-1.612c0.037-0.146,0.014-0.253,0.088-0.351 c0,0.01,0,0.019,0,0.03c0.176,0.351,0.351,0.704,0.528,1.055c0.391,0.629,1.084,1.286,1.67,1.73 c0.304,0.23,0.544,0.628,0.938,0.762c0-0.01,0-0.019,0-0.03c-0.01,0-0.019,0-0.03,0c-0.076-0.119-0.196-0.168-0.293-0.264 c-0.229-0.225-0.485-0.504-0.674-0.762c-0.534-0.725-1.006-1.519-1.436-2.345c-0.205-0.395-0.384-0.829-0.557-1.231 c-0.067-0.155-0.066-0.389-0.205-0.469c-0.19,0.294-0.468,0.532-0.615,0.879c-0.234,0.555-0.265,1.233-0.351,1.934 c-0.052,0.018-0.029,0.006-0.059,0.029c-0.408-0.099-0.552-0.518-0.704-0.879c-0.384-0.912-0.455-2.38-0.117-3.429 c0.087-0.272,0.482-1.127,0.323-1.378c-0.076-0.251-0.328-0.396-0.468-0.587c-0.175-0.236-0.348-0.548-0.469-0.821 c-0.314-0.711-0.612-1.538-0.943-2.257c-0.158-0.344-0.425-0.691-0.645-0.996c-0.243-0.338-0.516-0.587-0.704-0.996 c-0.067-0.145-0.158-0.378-0.059-0.528c0.032-0.101,0.076-0.143,0.176-0.176c0.17-0.132,0.643,0.043,0.821,0.117 c0.47,0.195,0.862,0.381,1.26,0.645c0.191,0.127,0.384,0.372,0.615,0.44c0.088,0,0.176,0,0.264,0 c0.413,0.095,0.875,0.03,1.26,0.147c0.682,0.207,1.292,0.529,1.846,0.879c1.69,1.067,3.071,2.585,4.016,4.397 c0.152,0.292,0.218,0.57,0.351,0.879c0.27,0.624,0.611,1.266,0.879,1.876c0.268,0.609,0.53,1.223,0.909,1.73 c0.2,0.266,0.97,0.409,1.319,0.557c0.245,0.104,0.647,0.211,0.879,0.351c0.444,0.268,0.874,0.587,1.289,0.879 C45.528,24.803,46.167,25.124,46.199,25.389z"
            ></path>
            <path
              fill="#00796b"
              d="M33.098,14.223c-0.215-0.004-0.367,0.023-0.528,0.059c0,0.01,0,0.019,0,0.03c0.01,0,0.019,0,0.03,0 c0.103,0.21,0.283,0.347,0.41,0.528c0.098,0.205,0.195,0.41,0.293,0.615c0.01-0.01,0.019-0.019,0.029-0.029 c0.181-0.128,0.265-0.332,0.264-0.645c-0.073-0.077-0.084-0.173-0.147-0.264C33.365,14.394,33.203,14.325,33.098,14.223z"
            ></path>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-10 h-10 md:w-32 md:h-32 lg:w-32 lg:h-32"
            viewBox="0 0 48 48"
          >
            <path
              fill="#5d4037"
              d="M42,17.3C42,37.8,24,44,24,44S6,37.8,6,17.3c0-2.5,0.2-4.6,0.4-6.3c0.3-2.5,2-4.5,4.4-5.1 C13.9,5,18.8,4,24,4s10.1,1,13.3,1.9c2.4,0.6,4.1,2.7,4.4,5.1C41.8,12.7,42,14.9,42,17.3z"
            ></path>
            <path
              fill="#4caf50"
              d="M24,7c4.9,0,9.5,1,12.5,1.8c1.2,0.3,2,1.3,2.2,2.6c0.2,1.9,0.3,3.9,0.3,5.9c0,15.6-11.5,21.9-15,23.4 c-3.5-1.6-15-7.9-15-23.4c0-2,0.1-4,0.3-5.9c0.1-1.3,1-2.3,2.2-2.6C14.5,8,19.1,7,24,7 M24,4c-5.2,0-10.1,1-13.3,1.9 C8.4,6.5,6.6,8.6,6.4,11C6.2,12.7,6,14.9,6,17.3C6,37.8,24,44,24,44s18-6.2,18-26.7c0-2.5-0.2-4.6-0.4-6.3c-0.3-2.5-2-4.5-4.4-5.1 C34.1,5,29.2,4,24,4L24,4z"
            ></path>
            <path fill="#dcedc8" d="M23 28H25V36H23z"></path>
            <path
              fill="#4caf50"
              d="M24,10c0,0-6,5-6,13c0,5.2,3.3,8.5,5,10l1-3l1,3c1.7-1.5,5-4.8,5-10C30,15,24,10,24,10z"
            ></path>
            <path
              fill="#81c784"
              d="M24,10c0,0-6,5-6,13c0,5.2,3.3,8.5,5,10l1-3V10z"
            ></path>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-10 h-10 md:w-32 md:h-32 lg:w-32 lg:h-32"
            viewBox="0 0 50 50"
          >
            <path d="M 43.640625 1.0019531 C 42.177246 0.96137695 40.611719 1.7683594 39.058594 3.1464844 C 38.689594 3.4744844 38.321078 3.8385625 37.955078 4.2265625 C 33.705078 8.7355625 29.759203 17.086844 28.533203 23.464844 C 29.010203 24.432844 29.384859 25.669281 29.630859 26.613281 C 29.693859 26.855281 29.749922 27.081391 29.794922 27.275391 C 29.902922 27.733391 29.960938 28.029297 29.960938 28.029297 C 29.960938 28.029297 29.923578 27.885641 29.767578 27.431641 C 29.737578 27.344641 29.703062 27.250672 29.664062 27.138672 C 29.647063 27.092672 29.625609 27.036562 29.599609 26.976562 C 29.322609 26.331563 28.554797 24.970906 28.216797 24.378906 C 27.927797 25.230906 27.673937 26.027047 27.460938 26.748047 C 28.434938 28.531047 29.027344 31.585937 29.027344 31.585938 C 29.027344 31.585938 28.977422 31.388266 28.732422 30.697266 C 28.515422 30.086266 27.432781 28.188141 27.175781 27.744141 C 26.736781 29.364141 26.56175 30.458609 26.71875 30.724609 C 27.02375 31.240609 27.315313 32.129281 27.570312 33.113281 C 27.659312 33.454281 27.742266 33.806203 27.822266 34.158203 C 27.557266 36.485203 27.495047 38.822719 27.623047 41.136719 C 27.756047 43.644719 28.106906 46.1205 28.503906 48.5625 C 28.545906 48.8195 28.781922 49.005469 29.044922 48.980469 C 29.319922 48.954469 29.522094 48.710547 29.496094 48.435547 C 29.371094 47.104547 29.265266 45.777125 29.197266 44.453125 L 29.257812 45.046875 C 29.162813 43.857875 29.1365 42.577844 29.1875 41.214844 C 29.3685 36.380844 30.482109 30.550609 32.537109 24.474609 C 36.010109 15.302609 40.827328 7.9417344 45.236328 4.4277344 C 41.217328 8.0577344 35.778391 19.807203 34.150391 24.158203 C 32.327391 29.030203 31.034859 33.601422 30.255859 37.982422 C 31.599859 33.875422 35.943359 32.111328 35.943359 32.111328 C 35.943359 32.111328 38.075453 29.482516 40.564453 25.728516 C 39.073453 26.068516 36.622734 26.651094 35.802734 26.996094 C 34.592734 27.504094 34.267578 27.677734 34.267578 27.677734 C 34.267578 27.677734 38.186828 25.289984 41.548828 24.208984 C 46.173828 16.924984 51.212672 6.5767813 46.138672 2.0507812 C 45.359047 1.3555312 44.518652 1.0262988 43.640625 1.0019531 z M 9 3 C 6.79 3 5 4.79 5 7 L 5 40 C 5 42.21 6.79 44 9 44 L 25.849609 44 C 25.749609 43.1 25.680859 42.170234 25.630859 41.240234 C 25.500859 38.920234 25.550781 36.569297 25.800781 34.279297 C 25.740781 34.049297 25.690859 33.829141 25.630859 33.619141 C 25.290859 32.299141 25.06 31.850234 25 31.740234 C 24.55 30.990234 24.470234 30.080703 25.240234 27.220703 C 25.901234 24.955703 28.786375 11.163 36.359375 3 L 9 3 z"></path>
          </svg>
        </div>
      </div>
    </Slider>
    </div>
  );
};

export default Skills;
