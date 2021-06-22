import React, { useEffect, useState} from 'react';


const TickerTape = props =>{
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
    useEffect(()=>{
        fetch('api/Stock/TIME_SERIES_DAILY/TSLA')
        .then(res => res.json())
        .then(data=>{
            firstDates = Object.keys(data["Time Series (Daily)"]);
            firstValues = Object.values(data["Time Series (Daily)"]);
            setData({date: firstDates[0].toString(),
                 open:firstValues[0]['1. open'],
                 high: firstValues[0]['2. high'],
                 low: firstValues[0]['3. low'],
                 close: firstValues[0]['4. close'],
                 volume: firstValues[0]['5. volume'],
                });
            console.log(stockData);
        }).catch(error=>console.log(error));
    },[]);
    return (
        <div>
            <table className='table'>
                <thead>
                    <th>Date</th>
                    <th>Open</th>
                    <th>High</th>
                    <th>Low</th>
                    <th>Close</th>
                    <th>Volume</th>
                </thead>
                <tbody>
                </tbody>
            </table>
        </div>
    );
}
export default TickerTape;
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