import React from 'react'
import './Register.css'

function Register() {
  return (
    <>
    <div className="registerBody">
        <div className="image">
            <div className="imgText">
            Discover new things on Superapp
            </div>
        </div>
        <div className="register">
            <div className="title">
                <h1>Super app</h1>
                <h5>Create your new account</h5>
            </div>
            <div className="formdiv">
                <form>
                <input type='text' placeholder='Name' name='name' className='input' pattern=".+" title="Please enter a value."  />
                <input type='text' placeholder='UserName' name='Uname' className='input' />
                <input type='email' placeholder='Email' name='email' className='input' />
                <input type='number' placeholder='Mobile' name='mobile' className='input' />
                <label><input type="checkbox" />Share my registration data with Superapp</label>
                <button className="signBtn">SIGN UP</button>
                </form>
            </div>
            <div className="signUp">
                
                <p className="terms">By clicking on Sign up. you agree to Superapp <span>Terms and Conditions of Use</span></p>
                <p className="policy">To learn more about how Superapp collects, uses, shares and protects your personal data please head Superapp <span>Privacy Policy</span></p>
            </div>
        </div>
    </div>
  </>
    )
}

export default Register