import axios from 'axios';
import colors from 'colors';

export default class CryptoAPI {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseUrl = 'https://api.freecryptoapi.com/v1/getData';
  }

  async getPriceData(symbol) {
    try {
        const url = `${this.baseUrl}?symbol=${symbol}`;
        const config = {
            headers: {
                'Authorization': `Bearer ${this.apiKey}`
            }
        };
        
        const response = await axios.get(url, config);
        
        if (!response.data.status) {
            let error = new Error(response.data.error);
            error.response = { status: 401 };
            throw error;
        }

        if (!Array.isArray(response.data?.symbols) || response.data?.symbols.length === 0) {
            throw new Error('That Coin does not exist.');
        }

        let output = '';
        output += `\nDate: ${response.data.symbols[0].date.blue}\n\n`;

        response.data.symbols.forEach(item => {
            if (item.symbol && item.last && item.date) {
                const percentage = Number(item.daily_change_percentage).toFixed(3);

                output += `Coin: ${item.symbol.yellow} | Price: $${item.last.green} | Percentage: ${percentage}%\n`;
            }
        });

        return output || 'No price data available';

    } catch (error) {
        if (error.response){
            if (error.response.status === 401) {
                throw new Error('Your API key is invalid - Go to https://freecryptoapi.com to get a valid API key');
            } else if (error.response.status === 404) {
                throw new Error('Your API is not responding');
            } else {
                throw new Error('Something is not working');
            }
        } else {
            throw new Error(`Error: ${error.message}`);
        }
    }
  }
}