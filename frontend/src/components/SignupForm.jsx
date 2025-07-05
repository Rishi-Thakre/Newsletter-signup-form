import React, { useState } from 'react';
import axios from 'axios';

const SignupForm = () => {
  const [form, setForm] = useState({ name: '', email: '' });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://127.0.0.1:5000/api/subscribe', form);
      setMessage(res.data.message);
      setForm({ name: '', email: '' });
    } catch (err) {
  console.log(err); // ← add this
  setMessage(err.response?.data?.message || 'Something went wrong');
}

  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Your Name" value={form.name} onChange={handleChange} required />
      <input type="email" name="email" placeholder="Your Email" value={form.email} onChange={handleChange} required />
      <button type="submit">Subscribe</button>
      {message && <p>{message}</p>}
    </form>
  );
};

export default SignupForm;
