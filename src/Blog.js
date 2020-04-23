import React, { Component } from "react";
 
class Blog extends Component {
  render() {
    return (
        
      <div>
          
        <h5>April 23rd 2020</h5>
        <h2>Weather Forecasting</h2>

        <p>Weather forecasts are made by collecting as much data as possible about the current state of the atmosphere (particularly the temperature, humidity and wind) and using understanding of atmospheric processes (through meteorology) to determine how the atmosphere evolves in the future.

However, the chaotic nature of the atmosphere and incomplete understanding of the processes mean that forecasts become less accurate as the range of the forecast increases.

Traditional observations made at the surface of atmospheric pressure, temperature, wind speed, wind direction, humidity, precipitation are collected routinely from trained observers, automatic weather stations or buoys.

During the data assimilation process, information gained from the observations is used in conjunction with a numerical model's most recent forecast for the time that observations were made to produce the meteorological analysis.

Numerical weather prediction models are computer simulations of the atmosphere.

They take the analysis as the starting point and evolve the state of the atmosphere forward in time using understanding of physics and fluid dynamics.

The complicated equations which govern how the state of a fluid changes with time require supercomputers to solve them.

The output from the model provides the basis of the weather forecast.</p>

       <p>Weather APIs are Application Programming Interfaces that allow you to connect to large databases of weather forecast and historical information.

Thanks to APIs and smartphones with built-in GPS, we have access to mobile applications that provide hour-by-hour forecasts, severe weather alerts, and other relevant weather information for just about every place we go.</p>

<p>This blog will give accurate weather forcasting using weather API. click on "API"</p>


<footer>
     <center>Copyright &copy; weatherforcast</center>
     </footer>
      </div>
    );
  }
}
 
export default Blog;