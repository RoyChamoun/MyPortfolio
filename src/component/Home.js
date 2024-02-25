// import React from "react";
// import image from "../image/image.jpeg";

// const Home = () => {
//   return (
//     <div className="container my-24 mx-auto md:px-6">
//       {/* <!-- Section: Design Block --> */}
//       <section className="mb-32">
//         <div className="flex flex-wrap">
//           <div className="w-full shrink-0 grow-0 basis-auto md:w-2/12 lg:w-3/12">
//             <img
//               src={image}
//               alt="image"
//               className="mb-6 w-full rounded-lg shadow-lg dark:shadow-black/20"
//             />
//           </div>

//           <div className="w-full shrink-0 grow-0 basis-auto text-center md:w-10/12 md:pl-6 md:text-left lg:w-9/12">
//             <h6 className="mb-6 text-4xl font-bold">Roy Chamoun</h6>
//             <ul className="list-inside mb-6 flex justify-center space-x-4 md:justify-start">
//               {/* <a href="#!"> */}
//               {/* <!-- Facebook --> */}
//               {/* <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-4 w-4"
//                   fill="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
//                 </svg>
//               </a>
//               <a href="#!"> */}
//               {/* <!-- Linkedin --> */}
//               {/* <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 24 24"
//                   className="h-3.5 w-3.5"
//                 >
//                   <path
//                     fill="currentColor"
//                     d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"
//                   />
//                 </svg>
//               </a> */}
//               {/* <a href="#!"> */}
//               {/* <!-- Twitter --> */}
//               {/* <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 24 24"
//                   className="h-4 w-4"
//                 >
//                   <path
//                     fill="currentColor"
//                     d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
//                   />
//                 </svg>
//               </a>
//               <a href="#!"> */}
//               {/* <!-- Instagram --> */}
//               {/* <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 24 24"
//                   className="h-4 w-4"
//                 >
//                   <path
//                     fill="currentColor"
//                     d="M12 2.78c3.21 0 3.594.012 4.864.07 1.228.058 2.177.264 2.97.567.786.303 1.45.707 2.115 1.373.665.665 1.07 1.33 1.373 2.115.303.792.509 1.74.567 2.97.058 1.27.07 1.653.07 4.864s-.012 3.594-.07 4.864c-.058 1.228-.264 2.177-.567 2.97-.303.786-.707 1.45-1.373 2.115-.665.665-1.33 1.07-2.115 1.373-.792.303-1.74.509-2.97.567-1.27.058-1.653.07-4.864.07s-3.594-.012-4.864-.07c-1.228-.058-2.177-.264-2.97-.567-.786-.303-1.45-.707-2.115-1.373-.665-.665-1.07-1.33-1.373-2.115-.303-.792-.509-1.74-.567-2.97-.058-1.27-.07-1.653-.07-4.864s.012-3.594.07-4.864c.058-1.228.264-2.177.567-2.97.303-.786.707-1.45 1.373-2.115.665-.665 1.33-1.07 2.115-1.373.792-.303 1.74-.509 2.97-.567 1.27-.058 1.653-.07 4.864-.07zM12 0c-3.244 0-3.629.014-4.914.072-1.527.072-2.745.288-3.657.6-1.15.396-2.065.91-2.99 1.835-.825.825-1.438 1.84-1.835 2.99-.312.912-.528 2.13-.6 3.657-.058 1.285-.072 1.67-.072 4.914s.014 3.629.072 4.914c.072 1.527.288 2.745.6 3.657.396 1.15.91 2.065 1.835 2.99.825.825 1.84 1.438 2.99 1.835.912.312 2.13.528 3.657.6 1.285.058 1.67.072 4.914.072s3.629-.014 4.914-.072c1.527-.072 2.745-.288 3.657-.6 1.15-.396 2.065-.91 2.99-1.835.825-.825 1.438-1.84 1.835-2.99.312-.912.528-2.13.6-3.657.058-1.285.072-1.67.072-4.914s-.014-3.629-.072-4.914c-.072-1.527-.288-2.745-.6-3.657-.396-1.15-.91-2.065-1.835-2.99-.825-.825-1.84-1.438-2.99-1.835-.912-.312-2.13-.528-3.657-.6-1.285-.058-1.67-.072-4.914-.072zm0 5.674a6.326 6.326 0 100 12.652 6.326 6.326 0 000-12.652zm0 10.6a4.274 4.274 0 110-8.548 4.274 4.274 0 010 8.548zM18.537 5.008c.3 0 .539.24.539.538s-.24.538-.539.538-.539-.24-.539-.538.24-.538.539-.538z"
//                   />
//                 </svg>
//               </a> */}
//             </ul>
//             <p className="text-base md:text-lg lg:text-xl">
//               "Aside from my coding expertise, I'm driven by a fervent
//               commitment to self-improvement. Embracing the ethos of lifelong
//               learning, I actively seek opportunities to expand my knowledge
//               base. Whether through online courses, tech meetups, or open-source
//               projects, I relentlessly pursue avenues for growth. Engaging with
//               diverse learning experiences fuels my curiosity and strengthens my
//               skills, propelling me toward continuous development and
//               innovation."
//             </p>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Home;

import React from 'react';
import image from '../image/image.jpeg';

const Home = () => {
  return (
    <div className="container my-24 mx-auto md:px-6">
      <section className="mb-32">
        <div className="flex flex-wrap items-center">
          <div className="w-full md:w-1/2 lg:w-1/3">
            <img
              src={image}
              alt="Roy Chamoun"
              className="mb-6 w-full rounded-lg shadow-lg"
            />
          </div>
          <div className="w-full md:w-1/2 lg:w-2/3 md:pl-6 md:text-left lg:pl-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Roy Chamoun</h2>
            <p className="text-lg text-gray-700 mb-6">
              Roy Chamoun is a passionate web developer with expertise in HTML, CSS, JavaScript, and React. Beyond his coding skills, Roy is driven by a fervent commitment to self-improvement. Embracing the ethos of lifelong learning, he actively seeks opportunities to expand his knowledge base. Whether through online courses, tech meetups, or open-source projects, Roy relentlessly pursues avenues for growth. Engaging with diverse learning experiences fuels his curiosity and strengthens his skills, propelling him toward continuous development and innovation.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
           
             
               
            </div>
          </div>
        </div>
      </section>
    </div>
  )}
  export default Home;

