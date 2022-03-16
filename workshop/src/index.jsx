import '../assets/stylesheets/application.scss';

import ReactDOM from "react-dom";
import React from "react";

import App from './components/App';

const root = document.querySelector("#root");
console.log(root);

ReactDOM.render(<App />, root);

// rsc + tab
// const Hello = ({ name, flag }) => {
//   // const { name, flag } = props;
//   return (
//     <div>
//       <h1>Hello {name}!!! {flag}</h1>
//     </div>
//   );
// };

// eslint-disable-next-line react/prefer-stateless-function
// class Hello extends React.Component {
//   render() {
//     const { name, flag } = this.props;
//     return (
//       <div>
//         <h1>Hello {name}!!! {flag}</h1>
//       </div>
//     );
//   }
// }
