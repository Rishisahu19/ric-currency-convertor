import Freecurrencyapi from '@everapi/freecurrencyapi-js';

const freecurrencyapi = new Freecurrencyapi('fca_live_OuF0BNMBpfk39l6XIVJVpLvdqRtEvQk8Trdnevpf');


// async function convertCurrency(fromCurrency, toCurrency, units) {
//     const res = await freecurrencyapi.latest({
//         base_currency: fromCurrency,
//         currencies: toCurrency
//     });
//     // { data: { EUR: 0.9205901084 } }
//     const multiplier=res.data[toCurrency];
//     console.log(multiplier*units);
    
// }
// convertCurrency("INR","USD",7);

// freecurrencyapi.latest({
//     base_currency: 'USD',
//     currencies: 'EUR'
// }).then(response => {
//     console.log(response);
// });

///////////////////////////////////
export async function convertCurrency(fromCurrency, toCurrency, units) {
    const res = await freecurrencyapi.latest({
        base_currency: fromCurrency,
        currencies: toCurrency
    });
    
    const multiplier=res.data[toCurrency];
    return multiplier*units;
    
}
