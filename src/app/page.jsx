// "use client"
// import React from "react";
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// import 'bootstrap/dist/css/bootstrap.min.css';
 
// import Main from "./Main";





// export default function Home() {

//   return (
//     <div>
//      <Main />
//     </div>
 
//   );
// }






"use client"
import React from "react";
import dynamic from 'next/dynamic';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import 'bootstrap/dist/css/bootstrap.min.css';

const Main = dynamic(() => import('./Main'), { ssr: false });

export default function Page() {
  return <Main />;
}

