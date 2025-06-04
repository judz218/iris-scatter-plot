import XAxis from "./chartParts/XAxis";
import Legend from "./chartParts/Legend";
import ScatterPlot from "./chartParts/ScatterPlot";
import YAxis from "./chartParts/YAxis";

export default function Main ({data, xProperty, yProperty}) {
    const w = 800;
    const h = 600;
    const colors = {
        setosa: "green",
        versicolor: "purple",
        virginica: "orange"
    };

    const plotW = 650;
    const padding = 50;

    const xScale = d3.scaleLinear()
                     .domain([d3.min(data, d => d[xProperty]), d3.max(data, d => d[xProperty])])
                     .range([padding, plotW-padding]);
    
    const yScale = d3.scaleLinear()
                     .domain([d3.min(data, d => d[yProperty]), d3.max(data, d => d[yProperty])])
                     .range([h-padding, padding]);

    return (
        <svg width={w} height={h}>
            <ScatterPlot
                data={data}
                xProperty={xProperty}
                yProperty={yProperty}
                xScale={xScale}
                yScale={yScale}
                colors={colors}
            />
            <XAxis xScale={xScale} height={h} />
            <YAxis yScale={yScale} />
            <Legend colors={colors} plotW={plotW}/>
        </svg>
        
    );
}
