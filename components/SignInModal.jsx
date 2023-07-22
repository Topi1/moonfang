import React from 'react'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import "./SignInModal.css"
import Sidebar from './Sidebar';
import props from 'prop-types';

class SignInModal extends React.Component {

    render() {

  return (
                <Popup contentStyle={{width: "320px"}} 
                closeOnEscape={false} keepTooltipInside={true} open={this.props.open}
                modal nested> 
                    {
                    () => (
                    <div className='modal'>
                        <div className='modalContent'>
                            <section className="modalSec1">
                              <h2>SIGN IN</h2>
                              <form className='modalForm'>
                                <label htmlFor="signInEmail">Email</label>
                                <input className='modalInput' type="email" name="email" id="signInEmail" />
                                <label htmlFor="signInPass">Password</label>
                                <input className='modalInput' type="password" name="password" id="signInPass" />
                                <button disabled type="submit">Log In</button>
                              </form>
                            </section>
                            <section className="modalSec2">
                              <h3>Not registered?</h3>
                              <a><h3>&#8250; SIGN UP</h3></a>
                              <button className='modalClose' onClick=
                                {() => this.props.setOpen(false)}>
                                    Close
                            </button>
                            </section>
                        </div>
                    </div> 
                          )
                        } 
                </Popup>
                      
              
  )
}
}

export default SignInModal;
