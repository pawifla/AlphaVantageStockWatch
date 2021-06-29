import React, {useState, useEffect} from 'react';
import Overview from './StockOverview';
import TickerTape from './TickerTape';
import SymbolsAutoC from './SymbolsAutoC';
import StockHistory from './StockHistoryGraph';

const StockContainer = () =>{

    const defaultSymbolList = [{symbol:"AAPL"}];
    const [symbolList, setSymbolList] = useState(defaultSymbolList);
    //state for TickerTape
    const defaultTickerInfo = [{id: 0, companyName:"Company Name", price: 0, percentChange:0}]
    const [tickerInfo, setTickerInfo] = useState(defaultTickerInfo);
    //state for AutoC
    const defaultSymbol = ["AAPL"];
    const [loading, setLoading] = useState(false);
    const [symbols, setSymbols] = useState(defaultSymbol);

    //fetch data for ticker
    const GetTickerInfo = (symbol) =>{
         fetch(`./api/Stock/Ticker/${symbol}`)
        .then(res=> res.json())
        .then((data)=>{
            console.log(data);
            var info = data["quoteResponse"]["result"].map((i)=>({
                id: i.regularMarketTime,
                companyName: i.shortName,
                price: i.regularMarketPrice,
                percentChange: i.regularMarketChangePercent,
            }));
            setTickerInfo(info);
        })
        return <p>{tickerInfo.companyName}</p>
    };
    //fetch for AutoC
    const AutoC = async (symbol) =>{
        setLoading(true);
             await fetch(`./api/Stock/AutoC/${symbol}`)
        .then(res=> res.json())
        .then((items) => {
            const symbols = items["ResultSet"]["Result"].map((i)=>({
                id: i.symbol,
                symbol: i.symbol,
                companyName : i.name,
            }));
            setSymbols(symbols);
            setLoading(false);
        });
    };
    const TickerArray = (symbolList) =>{
        let result;
        for(const [key, value] of Object.entries(symbolList)){
            console.log(value.symbol);
           //result += GetTickerInfo(value);
        }
        //symbolList.map(symbol=>{
            //console.log(symbol.symbol);
            //GetTickerInfo(symbol.symbol);
        //});
        console.log(result);
        //return result
    }
    useEffect(()=>{
        TickerArray(symbolList);
    },[symbolList]);


    return(
        //Ticker at the top,
        //AutoComplete
        //Graph
        //Overview

        <div>
            <div>
            <TickerTape
            tickerInfo={tickerInfo}
            TickerArray={TickerArray}
            GetTickerInfo={GetTickerInfo}
            />
        </div>
            <div>
                <SymbolsAutoC
                GetTickerInfo = {GetTickerInfo}
                AutoC = {AutoC}
                symbols={symbols}
                setSymbols={setSymbols}
                symbolList={symbolList}
                setSymbolList={setSymbolList}
                loading={loading}
                TickerArray = {TickerArray}
                />
            </div>
        </div>
    )
}


export default StockContainer;