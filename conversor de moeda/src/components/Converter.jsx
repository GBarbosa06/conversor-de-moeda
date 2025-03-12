import { useEffect, useState } from "react";

function Converter () {
    const [value1, setValue1] = useState(1);
    const [value2, setValue2] = useState();
    const [rate, setRate] = useState();
    
    useEffect(() => {
        async function fetchRate() {
            const response = await fetch("https://v6.exchangerate-api.com/v6/c05a8744596ae21b69cd2e39/latest/USD");
            const data = await response.json();
            setRate(data.conversion_rates.BRL);
        }
        fetchRate();
        
    }, []);
    const convertCurrency = () => {
        if(rate) {
            setValue2(value1*rate)
        }
        else{
            console.log("Rate indisponível")
        }
    }

    return(
        <div className='bg-cyan-600 w-100 rounded-md text-center p-5' >
            <h1 className="">Conversor de moedas (USD) -{'>'} (BRL)</h1>
            <input 
            type="number" 
            value={value1} 
            onChange={(e) => setValue1(e.target.value)} placeholder="valor em R$" className="bg-slate-300"/>

            <button onClick={convertCurrency}>Converter</button>
            <h2>{value2 !== undefined ? `Valor em BRL: R$ ${value2.toFixed(2)}` : "Carregando..."}</h2>
        </div>
    )
}
            
export default Converter;
