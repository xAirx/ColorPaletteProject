import React, { Component } from 'react'
import styled from 'styled-components';



export class ColorBox extends Component {
   constructor(props) {
       super(props)

       this.state={}
   }


    render() {

            const {name,background} = this.props;

            return (
                <div style={{background}} className='ColorBox'>
    {/*                 //// The button which will display more colorboxes eventually
    */}
                <div className="copy-container">
                    <div className="box-content" >
                        <span>{name}</span>
                 </div>
                  <button className='copy-button'>Copy</button>
                </div>
                <span className="see-more">More</span>
             </div>
        )
    }
}

export default ColorBox
