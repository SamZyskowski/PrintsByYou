import React from 'react';
import '../../App.css';



export default function SignUp() {
  return (
    <div class="form-container5">
      <form class="register-form">
       
        <input
          id="Credit/Debit card number"
          class="form-field"
          type="text"
          placeholder="Username/Email"
          name="firstName"
        />
        
        <input
          id="last-name"
          class="form-field"
          type="text"
          placeholder="Password"
          name="lastName"
        />
      
        
        <button class="form-field" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}

