import React from 'react';



class Nav  extends React.Component {


    render() { 
        return ( 
<div className="Navigation">
<nav className="nav">

<img src={require('../images/bakemore_logo.png')} />

  <ul>
  <li><a className="button wobble-horizontal" href="">Home</a></li>
 <li><a className="button wobble-horizontal" href="">About</a></li>
   <li><a className="button wobble-horizontal" href="">Gallery</a></li>
   <li><a className="button wobble-horizontal" href="">Contact</a></li>
  </ul>

</nav>


    
        </div>
        );
    }
}
export default Nav ;