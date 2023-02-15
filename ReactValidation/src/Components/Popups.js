import React from 'react';
import './style.css';
class Popup extends React.Component{
    render(){
        return(
        <div className='Popups'>
            <div className='Popup-Inner'>
                <h1 className='close' onClick={this.props.onClick}>X</h1>
                <br/>
                <br/>
                <center>
                    <span className='tick'>&#10003;</span>
                </center>
                <h2 className='text2'>You have <br/>
                Successfully Signed Up!</h2>
            </div>
        </div>
        )
    }
}
export default Popup;