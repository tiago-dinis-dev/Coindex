import KeyManager from '../../lib/KeyManager.js';
import CryptoAPI from '../../lib/CryptoAPI.js';

export const check = {
    async price(cmd) {
        const keyManager = new KeyManager(); 

        try {
            const api = new CryptoAPI(keyManager.get());
            const priceData = await api.getPriceData(cmd.coin);
            console.log(priceData);
        } catch (error) {
            console.error(error.message.red);
        }
    }
}