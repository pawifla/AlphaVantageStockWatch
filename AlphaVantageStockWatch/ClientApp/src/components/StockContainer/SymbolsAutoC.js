import React, {useState, Fragment} from 'react';
import {AsyncTypeahead, MenuItem} from 'react-bootstrap-typeahead';

const SymbolsAutoC = props =>{


// Bypass client-side filtering by returning `true`. Results are already
// filtered by the search endpoint, so no need to do it again. 

    const newSymbol = async (symbol)=>{
        console.log(symbol);
        //console.log(Object.fromEntries(props.symbolList));
        try{
            await props.setSymbolList(props.symbolList.push({"symbol": symbol}));
            console.log(props.symbolList);
            props.TickerArray(props.symbolList);
        }catch(e){
            return (e) => console.log(e);
        }
    }
    const filterBy =() => true;
    return(
            <AsyncTypeahead
            filterBy={filterBy}
            id="autoC-symbols"
            isLoading={props.loading}
            labelKey={(option)=> `${option.companyName} ${option.symbol} `}
            minLength={2}
            onSearch={props.AutoC}
            options={props.symbols}
            placeholder = "Search stocks"
            renderMenuItemChildren={(option, props, indx)=>(
             <Fragment> 
                <button onClick={() => newSymbol(option.symbol)}>{option.companyName} <b>{option.symbol}</b></button>
             </Fragment>   

            )} 
        />
    );
};
export default SymbolsAutoC;
                 //<props.GetTickerInfo symbol = {option.symbol}/>
