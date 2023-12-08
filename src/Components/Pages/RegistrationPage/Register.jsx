import React, { useState } from 'react';
import styles from './Register.module.css';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [userData, setUserData] = useState({
    name: '',
    uName: '',
    email: '',
    phone: '',
    check: false,
  });

  const [errors, setErrors] = useState({
    name: '',
    uName: '',
    email: '',
    phone: '',
    check: false,
  });

  const navigate = useNavigate();

  const handleUserSubmit = (e) => {
    e.preventDefault();

    // Validate form fields
    const newErrors = {};

    if (userData.name.trim() === '') {
      newErrors.name = 'Field Is Required';
    }

    if (userData.uName.trim() === '') {
      newErrors.uName = 'Field Is Required';
    }

    if (userData.email.trim() === '') {
      newErrors.email = 'Field Is Required';
    }

    if (userData.phone.trim() === '') {
      newErrors.phone = 'Field Is Required';
    }

    if (!userData.check) {
      newErrors.check = 'Check this box if you want to proceed';
    }    

    // Update the errors state
    setErrors(newErrors);

    const resetForm = () => {
      setUserData({
        name: '',
        uName: '',
        email: '',
        phone: '',
        check: false,
      });
    };
    

    // Perform registration logic if no errors
    if ((Object.keys(newErrors).length === 0) && (userData.check===true)){
      localStorage.setItem('userData', JSON.stringify(userData));
      // Additional registration logic here
      setUserData({ name: '',
      uName: '',
      email: '',
      phone: '',
      check: false,});
      resetForm();
      navigate("/category");
    }
  };

  const handleOnChange = (e) => {
    const { name, value, type, checked } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: '', // Clear the error when the user makes a change
    }));
  };

  return (
    <>
      <div className={styles.registerBody}>
      <div className={styles.image}>
            <div className={styles.imgText}>
            Discover new things on Superapp
            </div>
        </div>

        <div className={styles.register}>
            <div className={styles.title}>
                <h1>Super app</h1>
                <h5>Create your new account</h5>
            </div>
        <div className={styles.formdiv}>
          <form onSubmit={handleUserSubmit}>
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={userData.name}
              onChange={handleOnChange}
              className={`${styles.input} ${errors.name && styles.error}`}
            />
            {errors.name && <div className={styles.errorText}>{errors.name}</div>}

            <input
              type="text"
              placeholder="UserName"
              name="uName"
              value={userData.uName}
              onChange={handleOnChange}
              className={`${styles.input} ${errors.uName && styles.error}`}
            />
            {errors.uName && <div className={styles.errorText}>{errors.uName}</div>}

            <input
              type="email"
              placeholder="Email"
              name="email"
              value={userData.email}
              onChange={handleOnChange}
              className={`${styles.input} ${errors.email && styles.error}`}
            />
            {errors.email && <div className={styles.errorText}>{errors.email}</div>}

            <input
              type="number"
              placeholder="Mobile"
              name="phone"
              value={userData.phone}
              onChange={handleOnChange}
              className={`${styles.input} ${errors.phone ? styles.error : ''}`}
            />
            {errors.phone && <div className={styles.errorText}>{errors.phone}</div>}

            <label>
              <input
                type="checkbox"
                onChange={handleOnChange}
                name="check"
                checked={userData.check}
              />
              Share my registration data with Superapp
            </label>
            {errors.check && <div className={styles.errorText}>{errors.check}</div>}

            <button className={styles.signBtn} type="submit">
              SIGN UP
            </button>
          </form>
        </div>
        <div className={styles.signUp}>
                
                <p className={styles.terms}>By clicking on Sign up. you agree to Superapp <span>Terms and Conditions of Use</span></p>
                <p className={styles.policy}>To learn more about how Superapp collects, uses, shares and protects your personal data please head Superapp <span>Privacy Policy</span></p>
            </div>
        </div>
      </div>
    </>
  );
}

export default Register;
