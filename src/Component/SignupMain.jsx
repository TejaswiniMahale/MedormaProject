import React from 'react'
import icon1 from "../Assets/icon1.png"
import icon2 from "../Assets/icon2.png"
import icon3 from "../Assets/icon3.png"
import apple from "../Assets/app-store-icon-png-14 1 (1).png"
import google from "../Assets/google.png"

const SignupMain = () => {
  return (
    <div >
        <div className='Main_flex'>
            <div className='features'>
                <p className='features_h'>Features </p>
                <div className='features_ele'>
                    <img src={icon1} alt=''/>
                    <div>
                        <p className='features_p1'>Digitize</p>
                        <p className='features_p2'>A Bird eye view of the entire Biomedical Operations.</p>
                    </div>
                </div>
                <div className='features_ele'>
                    <img src={icon2} alt=''/>
                    <div>
                        <p className='features_p1'>Track</p>
                        <p className='features_p2'>Track the product life cycle and service history.</p>
                    </div>
                </div>
                <div className='features_ele'>
                    <img src={icon3} alt=''/>
                    <div>
                        <p className='features_p1'>Biomedical Budget</p>
                        <p className='features_p2'>Regulate and save budget through analysed data and informed</p>
                    </div>
                </div>
            </div>
            <div className='signin_form'>
                <p className='form_h'>Sign in</p>
                <div className='form_line'></div>
                <div className='sigin_main_form'>
                    <p className='form_h2'>Sign in to your account</p>
                    <p className='form_label'>Email Id</p>
                    <input placeholder='xxxxxxxxxxxx'/>
                    <p className='form_label'>Password</p>
                    <input placeholder='xxxxxxxxxxxx'/>
                    <p className='forgot_password'>Forgot password</p>
                    <button className='siginin_btn'>Sign in</button>
                    <p className='from_info'>New to vajra?   <span style={{color:"#F78117"}}>Sign UP Now</span></p>
                </div>
            </div>
        </div>
        <div className='download_container'>
            <p>Download Our App</p>
            <div>
                <img src={google} alt=''/>
                <img src={apple} alt=''/>
            </div>
        </div>
    </div>
  )
}

export default SignupMain