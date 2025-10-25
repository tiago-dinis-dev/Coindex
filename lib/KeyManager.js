import Configstore from 'configstore';
import { readFile } from 'fs/promises';

const pkg = JSON.parse(
  await readFile(new URL('../package.json', import.meta.url))
);

class KeyManager {
  constructor() {
    this.conf = new Configstore(pkg.name);
  }

  set(key) {
    this.conf.set('apiKey', key);
    return key;
  }

  get() {
    const key = this.conf.get('apiKey');
    if (!key) {
      throw new Error('No API Key Found - Get a key at https://freecryptoapi.com');
    }
    
    return key;
  }

  remove() {
    const key = this.conf.get('apiKey');
    if (!key) {
      throw new Error('No API Key Found to remove.');
    }
    this.conf.delete('apiKey');
    return;
  }
}

export default KeyManager;