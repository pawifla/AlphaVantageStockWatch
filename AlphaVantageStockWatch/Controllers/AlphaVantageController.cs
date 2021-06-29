using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json.Linq;

namespace AlphaVantageStockWatch.Controllers
{
    [Route("api")]
    [ApiController]
    public class AlphaVantageController : ControllerBase
    {
        
        string apiKey = "YLBVVSLVDOQI6233";
        string ticker = "AMZN";
        string timeSeries = "TIMES_SERIES_DAILY";
        [HttpGet]
        [Route("Stock/{timeSeries}/{ticker}")]
        public string GetStockInfos(string ticker, string timeSeries)
        {

            HttpClient http = new HttpClient();
            var data = http.GetAsync($"https://www.alphavantage.co/query?function={timeSeries}&symbol={ticker}&apikey={apiKey}")
                                    .Result.Content.ReadAsStringAsync().Result;
            return data;
        }
        [HttpGet]
        [Route("Stock/AutoC/{ticker}")]
        public JObject SymbolsAutoComplete(string ticker)
        {

            HttpClient http = new HttpClient();
            var data = http.GetAsync($"http://d.yimg.com/autoc.finance.yahoo.com/autoc?query={ticker}&region=1&lang=en&callback=YAHOO.Finance.SymbolSuggest.ssCallback")
                                    .Result.Content.ReadAsStringAsync().Result;
            //fix this replace to get a normal json object
            string replaceBegin = "YAHOO.Finance.SymbolSuggest.ssCallback("; 
            data= data.Replace(replaceBegin, "").Replace(");","");
            JObject o = JObject.Parse(data);
            return o;
        }
        [HttpGet]
        [Route("Stock/Ticker/{ticker}")]
        public JObject tickerInfo(string ticker)
        {//this will grab current price and day % change for the ticker

            HttpClient http = new HttpClient();
            var data = http.GetAsync($"https://query1.finance.yahoo.com/v7/finance/quote?&symbols={ticker}")
                                    .Result.Content.ReadAsStringAsync().Result;
            //fix this replace to get a normal json object
            JObject o = JObject.Parse(data);
            return o;
        }

    }
}