// import React from 'react';
// import { Link, Route, Redirect } from 'react-router-dom';
// import api from '../Chatgpt/api';


// const Header = () => {
//   const user = JSON.parse(localStorage.getItem('user'));

//   const handleLogout = () => {
//     api.logout();
//     window.location.reload();
//   };

//   return (
//     <nav className="navbar navbar-expand-lg navbar-light bg-light">
//       <div className="container-fluid">
//         <Link className="navbar-brand" to="/">
//           My App
//         </Link>
//         <div className="collapse navbar-collapse" id="navbarNav">
//           <ul className="navbar-nav">
//             {user ? (
//               <>
//                 <li className="nav-item">
//                   <Link className="nav-link" to="/dashboard">
//                     Dashboard
//                   </Link>
//                 </li>
//                 <li className="nav-item">
//                   <button type="button" className="btn btn-link nav-link" onClick={handleLogout}>
//                     Logout
//                   </button>
//                 </li>
//               </>
//             ) : (
//               <>
//                 <li className="nav-item">
//                   <Link className="nav-link" to="/login">
//                     Login
//                   </Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link className="nav-link" to="/register">
//                     Register
//                   </Link>
//                 </li>
//               </>
//             )}
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// const PrivateRoute = ({ component: Component, ...rest }) => {
//   const user = JSON.parse(localStorage.getItem('user'));

//   return (
//     <Route
//       {...rest}
//       render={props =>
//         user ? <Component {...props} /> : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
//       }
//     />
//   );
// };

// export { Header, PrivateRoute };
