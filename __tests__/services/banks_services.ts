import fetchMock from 'fetch-mock';
import { getDataBanksApi } from '../../src/services/banksApi';

afterEach(() => {
    fetchMock.restore();
});

it('should fetch data from the API', async () => {
    const mockData = [
        {
          "description": "Banco Paga Todo es Para Todos",
          "age": 10,
          "url": "https://firebasestorage.googleapis.com/v0/b/stagingpagatodo-286214.appspot.com/o/Challenge%2Flogo-pagatodo.jpeg?alt=media&token=38b6ac4d-85ac-4288-bada-88eb5a0dec20",
          "bankName": "Paga Todo"
        },
        {
          "description": "BBVA Bancomer Creando Oportunidades",
          "bankName": "BBVA Bancomer",
          "age": 11,
          "url": "https://firebasestorage.googleapis.com/v0/b/stagingpagatodo-286214.appspot.com/o/Challenge%2Flogo-bbva.jpeg?alt=media&token=435ed70e-061b-4a80-a216-c69cea04f068"
        },
        {
          "description": "Scotiabank Creando Tú decides, Nosotros te Asesoramos",
          "bankName": "Scotiabank México",
          "age": 9,
          "url": "https://firebasestorage.googleapis.com/v0/b/stagingpagatodo-286214.appspot.com/o/Challenge%2Flogo.scotiabank.jpg?alt=media&token=1029cc0b-7bff-4f5c-90f7-d96ca60f9619"
        },
        {
          "description": "Citibanamex, lo mejor de México, lo mejor del mundo.",
          "bankName": "Citibanamex",
          "age": 7,
          "url": "https://firebasestorage.googleapis.com/v0/b/stagingpagatodo-286214.appspot.com/o/Challenge%2Flogo-citi.png?alt=media&token=da97f3ad-34b2-4f7d-ae59-3169238993c7"
        }
      ]

    fetchMock.getOnce('https://dev.obtenmas.com/catom/api/challenge/banks', mockData);

    const data = await getDataBanksApi();

    // Si data es una instancia de Error, haz que la prueba falle con un mensaje de error
    if (data instanceof Error) {
        throw data;
    }

    expect(data).toEqual(mockData);
});