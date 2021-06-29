import React, { useEffect, useState} from 'react';


const Overview = props =>{
    //    const [data, setData] = useState([])
    const defaultData = [{
    "Meta Data": {
        "1. Information": "",
        "Symbol": "",
        "3. Last Refreshed": "",
        "4. Output Size": "",
        "5. Time Zone": ""},
    "Time Series (Daily)": {
        "":{
            "1. open": "",
            "2. high": "",
            "3. low": "",
            "4. close": "",
            "5. volume": ""
        },
    }
    }];
    const timeSeriesObject = [{date:" ",open: " ", high:" " , low:" ",close:" ",volume:" "}];
    const [stockData, setData] = useState(timeSeriesObject);
 
    let firstDates = stockData['Time Series (Daily)'];
    let firstValues = [{}];
    const getStockInfo = ()=>{
        fetch('api/Stock/TIME_SERIES_DAILY/TSLA')
        .then(res => res.json())
        .then(data=>{
            console.log("this should be the date"+data);
            console.log(data["Meta Data"]["2. Symbol"]);
            console.log(data["Meta Data"][1]);
            firstDates = Object.keys(data["Time Series (Daily)"]);
            firstValues = Object.values(data["Time Series (Daily)"]);
            //create a loop for all or figure a better way
            //forEach(g in data){
            //setData({date: g["Times Series (Daily)"][0].toString(),
            //     open:g["Times Series (Daily)"]['1. open'],
            //     high: g["Times Series (Daily)"]['2. high'],
            //     low: g["Times Series (Daily)"]['3. low'],
            //     close: g["Times Series (Daily)"]['4. close'],
            //     volume: g["Times Series (Daily)"]['5. volume'],
            //    });
            //}
            setData({date: firstDates[0].toString(),
                 open:firstValues[0]['1. open'],
                 high: firstValues[0]['2. high'],
                 low: firstValues[0]['3. low'],
                 close: firstValues[0]['4. close'],
                 volume: firstValues[0]['5. volume'],
                });
            console.log(stockData);
        }).catch(error=>console.log(error));
    };
    const getData = async (stockData) =>{
        try{
            await getStockInfo(stockData)
        }catch(e){
            return (e)=>console.log(e);
        }
    }
    if(stockData == timeSeriesObject ){
    getData();
    }
    console.log(stockData);
    return (
        <div>
            <table className='table'>
                <thead>
                    <tr>
                    <th>Date</th>
                    <th>Open</th>
                    <th>High</th>
                    <th>Low</th>
                    <th>Close</th>
                    <th>Volume</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{stockData.date}</td>
                        <td>{stockData.open}</td>
                        <td>{stockData.high}</td>
                        <td>{stockData.low}</td>
                        <td>{stockData.close}</td>
                        <td>{stockData.volume}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
export default Overview;
                    //if(stockData){
                    //stockData.map(data =>(
                    //    <tr key={data.date}>
                    //        <td>{data.date}</td>
                    //        <td>{data.open}</td>
                    //        <td>{data.high}</td>
                    //        <td>{data.low}</td>
                    //        <td>{data.close}</td>
                    //        <td>{data.volume}</td>
                    //    </tr>
                    //))
                    //}