import XAxis from "./chartParts/XAxis";
import Legend from "./chartParts/Legend";
import ScatterPlot from "./chartParts/ScatterPlot";
import YAxis from "./chartParts/YAxis";

export default function Main ({data, xProperty, yProperty}) {
    const w = 800;
    const h = 800;
    const colors = {
        setosa: "green",
        versicolor: "purple",
        virginica: "orange"
    };

    const xScale = d3.scaleLinear()
                     .domain([0, d3.max(data, d => d[xProperty])])
                     .range([0, w]);
    
    const yScale = d3.scaleLinear()
                     .domain([0, d3.max(data, d => d[yProperty])])
                     .range([h, 0]);

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
            <Legend colors={colors}/>
        </svg>
        
    );
}
