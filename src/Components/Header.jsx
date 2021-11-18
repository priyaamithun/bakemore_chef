import React from 'react';
import Modal from './Modal';
import Calendar from './Calendar';



class  Header extends React.Component {
state ={
    show:false
}
 showModal=() =>{
this.setState({
...this.state,
show: !this.state.show
});
}

onDayClick = (e, day) => {
    alert(day);
  }

    render() { 
        return ( 
           
            <header id="Header" className="grid header">
     

    

          </header>
         );
    }
}
 
export default Header;