import React from "react";

import Greet from './greet.jsx';

class Main extends React.Component {
  render() {
    return (
      `<Greet />`
    );
  }
}




let documentReady = () => {
   React.render (
     `<Main />`,
       document.getElementById('react')
   );
};


$(documentReady);
