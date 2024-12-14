// src/App.js
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Navigation Bar */}
      <nav>
        <ul style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem 2rem' }}>
          <li><a href="#">Logo</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section id="hero" style={{ textAlign: 'center' }}>
        <h1>A Bridge to Holistic Learning</h1>
        <p>AI-powered SaaS for teachers, students, and parents.</p>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title="Hero Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </section>

      {/* Feature Section */}
      <section id="features">
        <h2 style={{ textAlign: 'center' }}>Features</h2>
        <div className="grid">
          <div className="p-6">
            <h3>For Teachers</h3>
            <p>Streamline daily tasks and focus on education.</p>
          </div>
          <div className="p-6">
            <h3>For Parents</h3>
            <p>Stay engaged and connected with your child's progress.</p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact">
        <h2 style={{ textAlign: 'center' }}>Get in Touch</h2>
        <form>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" placeholder="Enter your name" required />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="example@domain.com"
            pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
            required
          />

          <label htmlFor="phone">Phone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Enter 10-digit phone number"
            pattern="[0-9]{10}"
            required
          />

          <button type="submit">Submit</button>
        </form>
      </section>
    </div>
  );
}

export default App;
