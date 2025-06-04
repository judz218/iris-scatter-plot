export default function Legend({colors, plotW, isClicked, setIsClicked}) {
    const wh = 15;
    console.log(isClicked);
    return (
        <g transform={`translate(${plotW}, 50)`}>
            {Object.entries(colors).map(([species, color], i) => (
                <g 
                    key={species}
                    transform={`translate(0, ${i*20})`}
                    onClick={() => {
                        setIsClicked(prev => ({
                            ...prev,
                            [species]: !prev[species]
                        }))
                    }}
                >
                    <rect x="0" y="0" width={wh} height={wh} fill={color}/>
                    <text x={wh+4} y={wh/2} dominantBaseline="middle">{species}</text>
                </g>
            ))}
        </g>
    );
}