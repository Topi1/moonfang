import React from 'react'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import "./SignInModal.css"
import Sidebar from './Sidebar';

export default function SignInModal() {
  return (
                <Popup contentStyle={{width: "320px"}} trigger={<a >SIGN IN</a>}
                modal nested> 
                    {
                    close => (
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
                              <h3>&#8250; SIGN UP</h3>
                              <button className='modalClose' onClick=
                                {() => close()}>
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
