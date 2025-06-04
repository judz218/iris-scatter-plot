export default function Contents ({data, xProperty, yProperty}) {
    const colors = {
        setosa: "green",
        versicolor: "purple",
        virginica: "orange"
    };
    const w = 800;
    const h = 800;
    const r = 5;

    const xScale = d3.scaleLinear()
                     .domain([0, d3.max(data, d => d[xProperty])])
                     .range([0, w]);
    
    const yScale = d3.scaleLinear()
                     .domain([0, d3.max(data, d => d[yProperty])])
                     .range([h, 0]);

    const xAxis = d3.axisBottom()
                    .scale(xScale);

    return (
        <svg width={w} height={h}>
            <g>
                <g>
                    {data.map((d, i) => (
                        <circle 
                            key={i}
                            cx={xScale(d[xProperty])}
                            cy={yScale(d[yProperty])}
                            r={r}
                            fill={colors[d.species]}
                        />
                    ))}
                </g>
                <line/>
                
            </g>
            
            {/* 点(0,0)の位置 */}
            <circle cx="0" cy="0" r="10" fill="red" /> 
        </svg>
    );
}
