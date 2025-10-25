import KeyManager from '../../lib/KeyManager.js';
import { isRequired } from '../../utils/validation.js';
import inquire from 'inquirer';
import colors from 'colors';

export const key = {
  async set() {
    const keyManager = new KeyManager();
    const key = keyManager.set(process.env.API_KEY);

    if (key) {
      console.log('API Key set successfully.'.blue);
    }
  },

  show() {
    try {
      const keyManager = new KeyManager();
      const key = keyManager.get();

      console.log('Current API Key: ', key.yellow);

      return key;
    } catch (err) {
      console.log(err.message.red);
    }
  },

  remove() {
    try {
      const keyManager = new KeyManager();
      console.log('Removing API Key: ', keyManager.get().yellow);

      keyManager.remove();
      console.log('API Key removed successfully.'.green);
      return;
      
    } catch (err) {
      console.log(err.message.red);
    }
  }
};