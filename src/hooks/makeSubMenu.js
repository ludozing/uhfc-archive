import React from 'react';

function makeSubMenu(props) {
    let state = {
        props.forEach(element => {
            element: false;
        });
    }
    return (
        <ul className='subMenu'>
            {
                props.map(item => {
                    <li>
                        <button className={this.state.isOn? "on":""}>
                            {item}
                        </button>
                    </li>
                })
            }
        </ul>
    );
}

export default makeSubMenu;