using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

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

    }
}