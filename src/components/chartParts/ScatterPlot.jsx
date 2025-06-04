export default function ScatterPlot({data, xProperty, yProperty, xScale, yScale, colors}) {
    const r = 5;
    return (
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
    );
}