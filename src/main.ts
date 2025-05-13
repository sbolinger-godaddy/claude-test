import './style.css';
import { setupCounter } from './counter';

document.addEventListener('DOMContentLoaded', () => {
  const counterElement = document.getElementById('counter');
  const incrementButton = document.getElementById('increment');
  
  if (counterElement && incrementButton) {
    setupCounter(counterElement, incrementButton);
  }
});
