export default function Legend({colors, plotW}) {
    const wh = 15;
    return (
        <g transform={`translate(${plotW}, 50)`}>
            {Object.entries(colors).map(([species, color], i) => (
                <g key={species} transform={`translate(0, ${i*20})`}>
                    <rect x="0" y="0" width={wh} height={wh} fill={color}/>
                    <text x={wh+4} y={wh/2} dominantBaseline="middle">{species}</text>
                </g>
            ))}
        </g>
    );
}