
// import React from 'react';

// const Navbar = ({ setCategory }) => {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-light bg-light">
//       <div className="container-fluid"> {/* Ensure this div is present for full width */}
//         <a className="navbar-brand" href="#"><span className="badge bg-light text-dark fs-4">News</span></a>
//         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//           <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//             <li className="nav-item">
//               <div className="nav-link text-dark cursor-pointer" onClick={() => setCategory("technology")}>Technology</div>
//             </li>
//             <li className="nav-item">
//               <div className="nav-link text-dark cursor-pointer" onClick={() => setCategory("Business")}>Business</div>
//             </li>
//             <li className="nav-item">
//               <div className="nav-link text-dark cursor-pointer" onClick={() => setCategory("health")}>Health</div>
//             </li>
//             <li className="nav-item">
//               <div className="nav-link text-dark cursor-pointer" onClick={() => setCategory("sports")}>Sports</div>
//             </li>
//             <li className="nav-item">
//               <div className="nav-link text-dark cursor-pointer" onClick={() => setCategory("entertainment")}>Entertainment</div>
//             </li>
//           </ul>
//           <form className="d-flex">
//             <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
//             <button className="btn btn-outline-success" type="submit">Search</button>
//           </form>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;

// Navbar.js
// import React from 'react';

// const Navbar = ({ setCategory }) => {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-light bg-light">
//       <div className="container-fluid">
//         {/* <a className="navbar-brand" href="#"><span className="badge bg-light text-dark fs-4">News</span></a> */}
//         <a className="navbar-brand" href="#"><span className="badge bg-dark text-light fs-4">News</span></a>
//         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//           <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//             <li className="nav-item">
//               <div className="nav-link text-dark cursor-pointer" onClick={() => setCategory("technology")}>Technology</div>
//             </li>
//             <li className="nav-item">
//               <div className="nav-link text-dark cursor-pointer" onClick={() => setCategory("Business")}>Business</div>
//             </li>
//             <li className="nav-item">
//               <div className="nav-link text-dark cursor-pointer" onClick={() => setCategory("health")}>Health</div>
//             </li>
//             <li className="nav-item">
//               <div className="nav-link text-dark cursor-pointer" onClick={() => setCategory("sports")}>Sports</div>
//             </li>
//             <li className="nav-item">
//               <div className="nav-link text-dark cursor-pointer" onClick={() => setCategory("entertainment")}>Entertainment</div>
//             </li>
//           </ul>
//           <form className="d-flex">
//             <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
//             <button className="btn btn-outline-success" type="submit">Search</button>
//           </form>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;

// // App.css
// // .cursor-pointer {
// //   cursor: pointer;
// // }


// Navbar.js
import React, { useState } from 'react';

const Navbar = ({ setCategory }) => {
  const [activeCategory, setActiveCategory] = useState('');

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    setCategory(category);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#"><span className="badge bg-light text-dark fs-4">News</span></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <div
                className={`nav-link cursor-pointer text-light ${activeCategory === 'technology' ? 'active-category' : ''}`}
                onClick={() => handleCategoryClick('technology')}
              >
                Technology
              </div>
            </li>
            <li className="nav-item">
              <div
                className={`nav-link cursor-pointer text-light ${activeCategory === 'Business' ? 'active-category' : ''}`}
                onClick={() => handleCategoryClick('Business')}
              >
                Business
              </div>
            </li>
            <li className="nav-item">
              <div
                className={`nav-link cursor-pointer text-light ${activeCategory === 'health' ? 'active-category' : ''}`}
                onClick={() => handleCategoryClick('health')}
              >
                Health
              </div>
            </li>
            <li className="nav-item">
              <div
                className={`nav-link cursor-pointer text-light ${activeCategory === 'sports' ? 'active-category' : ''}`}
                onClick={() => handleCategoryClick('sports')}
              >
                Sports
              </div>
            </li>
            <li className="nav-item">
              <div
                className={`nav-link cursor-pointer text-light ${activeCategory === 'entertainment' ? 'active-category' : ''}`}
                onClick={() => handleCategoryClick('entertainment')}
              >
                Entertainment
              </div>
            </li>
          </ul>
          <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;



