import Axis from "./contents/Axis";
import Legend from "./contents/Legend";
import ScatterPlot from "./contents/ScatterPlot";

export default function Main ({data, xProperty, yProperty}) {
    return (
        <div>
            <ScatterPlot
                data={data}
                xProperty={xProperty}
                yProperty={yProperty}
            />
            <Legend/>
            <Axis/>
        </div>
        
    );
}
