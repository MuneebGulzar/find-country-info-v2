import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Form from './components/Form';
import Footer from './components/Footer';

function App() {


  return (
    <>
      <Form />
      <Footer />
    </>
  );
}

export default App;
