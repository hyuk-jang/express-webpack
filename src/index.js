import logMessage from './public/js/logger';
import './public/css/style.css';
// Log message to console
logMessage('Welcome to Expack!');

// Needed for Hot Module Replacement
if (typeof module.hot !== 'undefined') {
  module.hot.accept(); // eslint-disable-line no-undef
}
