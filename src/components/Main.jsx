import XAxis from "./chartParts/XAxis";
import Legend from "./chartParts/Legend";
import ScatterPlot from "./chartParts/ScatterPlot";
import YAxis from "./chartParts/YAxis";

import { useState } from "react";

//軸かくのにd3.axisBottomってのもあるらしい
export default function Main ({data, xProperty, yProperty}) {
    const w = 800;
    const h = 500;
    const colors = {
        setosa: "green",
        versicolor: "purple",
        virginica: "orange"
    };

    const plotW = 500;
    const padding = 50;

    const xScale = d3.scaleLinear()
                     .domain([d3.min(data, d => d[xProperty]), d3.max(data, d => d[xProperty])])
                     .range([padding, plotW-padding]);
    
    const yScale = d3.scaleLinear()
                     .domain([d3.min(data, d => d[yProperty]), d3.max(data, d => d[yProperty])])
                     .range([h-padding, padding]);
    
    const [isClicked, setIsClicked] = useState([false, false, false]);

    return (
        <svg width={w} height={h}>
            <ScatterPlot
                data={data}
                xProperty={xProperty}
                yProperty={yProperty}
                xScale={xScale}
                yScale={yScale}
                colors={colors}
                isClicked={isClicked}
            />
            <XAxis xScale={xScale} h={h} padding={padding}/>
            <YAxis yScale={yScale} padding={padding}/>
            <Legend colors={colors} plotW={plotW} isClicked={isClicked} setIsClicked={setIsClicked}/>
        </svg>
        
    );
}
