import XAxis from "./chartParts/XAxis";
import Legend from "./chartParts/Legend";
import ScatterPlot from "./chartParts/ScatterPlot";
import YAxis from "./chartParts/YAxis";

export default function Main ({data, xProperty, yProperty}) {
    return (
        <div>
            <ScatterPlot
                data={data}
                xProperty={xProperty}
                yProperty={yProperty}
            />
            <Legend/>
            <XAxis/>
            <YAxis/>
        </div>
        
    );
}
