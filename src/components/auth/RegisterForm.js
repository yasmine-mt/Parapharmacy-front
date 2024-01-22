import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../utils/hooks/useUser';

function Register() {
  const navigate = useNavigate();
  const { registerUser, login } = useUser();
  const [showModal, setShowModal] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm();

  const handleRegistration = async (registerData) => {
    try {
      const { firstName, lastName, email, phone, password, address, postalCode, city } = registerData;
      const simplifiedRegisterData = {
        firstName,
        lastName,
        email,
        phone,
        password,
        address,
        postalCode,
        city,
      };

      console.log('Register Data:', simplifiedRegisterData);
      await registerUser(simplifiedRegisterData);
      console.log('User registration successful');

      // Show the modal after successful registration
      setShowModal(true);
    } catch (error) {
      console.error('Error during registration:', error);
    }
  };

  const closeModal = () => {
    // Close the modal and navigate to another page if needed
    setShowModal(false);
    navigate('/'); // You can change the destination URL
  };

  const onSubmit = async (registerData) => {
    await handleRegistration(registerData);
  };


  return (
    <div className='register'>
      <h1>Register</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="divider">
          <label className='input-label'>
            First Name <span>*</span>
            <div className='input-wrapper'>
              <input type="text" {...register("firstName", { required: true })} />
            </div>
          </label>
          {errors.firstName && <span>This field is required</span>}
          <label className='input-label'>
            Last Name <span>*</span>
            <div className='input-wrapper'>
              <input type="text" {...register("lastName", { required: true })} />
            </div>
          </label>
          {errors.lastName && <span>This field is required</span>}
        </div>
        <label className='input-label'>
          Email <span>*</span>
          <div className='input-wrapper'>
            <input type="email" {...register("email", { required: true })} />
          </div>
        </label>
        {errors.email && <span>This field is required</span>}
        <label className='input-label'>
          Phone <span>*</span>
          <div className='input-wrapper'>
            <input type="tel" {...register("phone", { required: true })} />
          </div>
        </label>
        {errors.phone && <span>This field is required</span>}
        <label className='input-label'>
          Password <span>*</span>
          <div className='input-wrapper'>
            <input type="password" {...register("password", { required: true, minLength: 8, maxLength: 20 })} />
          </div>
        </label>
        {errors.password?.type === 'required' && <span>Password is required</span>}
        {errors.password?.type === 'minLength' && <span>Password must be at least 8 characters long</span>}
        {errors.password?.type === 'maxLength' && <span>Password must be at most 20 characters long</span>}

      
        <label className='input-label'>
          Address <span>*</span>
          <div className='input-wrapper'>
            <input type="text" {...register("address")} />
          </div>
        </label>
        {errors.address && <span>This field is required</span>}

        <label className='input-label'>
          Postal Code <span>*</span>
          <div className='input-wrapper'>
            <input type="text" {...register("postalCode")} />
          </div>
        </label>
        {errors.postalCode && <span>This field is required</span>}

        <label className='input-label'>
          City <span>*</span>
          <div className='input-wrapper'>
          <input type="text" {...register("city")} />

          </div>
        </label>
        {errors.city && <span>This field is required</span>}

        <button type="submit">REGISTER</button>
      </form>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <p>Thank you for registering with our parapharmacy!</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Register;

