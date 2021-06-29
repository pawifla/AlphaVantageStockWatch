import React, {useEffect, useState, Fragment} from 'react';
import Ticker from 'react-ticker';
import './TickerTape.css';

const TickerTape = props =>{
    return(
        <div className="Tape">
        <Ticker offset="run-in" >
            {()=>
            <p>asdf</p>
            }
        </Ticker>
        </div>
    );
};
export default TickerTape;

            //{()=>(
                //<div className="Tape">
                    //{(props.tickerInfo[0])? (
                    //<tr>
                        //<td className="coName"><h3>{props.tickerInfo[0].companyName}</h3></td>
                                //<td className="price"><h4>${props.tickerInfo[0].price.toFixed(2)}{"  "}</h4></td>
                                //<td className="percentage">
                                    //<h4>
                                    //{(props.tickerInfo[0].percentChange >= 0 )
                                        //?
                                        //<span className="posPercentage">+{props.tickerInfo[0].percentChange.toFixed(2)}%{"  "}</span>
                                        //:
                                        //<span className="negPercentage">{props.tickerInfo[0].percentChange.toFixed(2)}%{"  "}</span>
                                    //}
                                    //</h4>
                                //</td>
                        //<td>
                            //&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        //</td>
                    //</tr>
                    //):(
                        //<div>Nothing</div>
                    //)}
                    
                //</div>
            //)}