import express from 'express';
import fetch from 'node-fetch';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/api/exchangerates_data/latest', async (req, res) => {
  const apiKey = 'd468e25f57a2ef2a05d27ee3919375c9'; // Substitua com sua chave de API da ExchangeRate-API
  const url = `https://api.apilayer.com/exchangerates_data/latest`;

  try {
    const response = await fetch(url, {
      headers: {
        'Api-Key': apiKey
      }
    });

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao buscar dados de câmbio.' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor proxy rodando na porta ${PORT}`);
});
