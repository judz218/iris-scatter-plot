import '../../../style.css';

export default function ScatterPlot({data, xProperty, yProperty, xScale, yScale, colors, isClicked}) {
    const r = 5;
    return (
        <g>
            {data.map((d, i) => (
                <circle 
                    key={i}
                    className="dot"
                    cx={xScale(d[xProperty])}
                    cy={yScale(d[yProperty])}
                    r={r}
                    fill={colors[d.species]}
                    opacity={isClicked[d.species] ? "0":"1"}
                />
            ))}
        </g>
    );
}