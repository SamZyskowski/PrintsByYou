import React from 'react';
import '../../index.css';

export default function App() {
  return (
    <div class="form-container5">
      <form class="register-form">
       
        <input
          id="Credit/Debit card number"
          class="form-field"
          type="text"
          placeholder="Credit/Debit card number"
          name="firstName"
        />
        
        <input
          id="last-name"
          class="form-field"
          type="text"
          placeholder="Expiration date (mm/yy)"
          name="lastName"
        />
        
        <input
          id="email"
          class="form-field"
          type="text"
          placeholder="Security Code (Ex: 123)"
          name="email"
        />
        
        <button class="form-field" type="submit">
          Continue
        </button>
      </form>
    </div>
  );
}


