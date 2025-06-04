export default function XAxis({xScale, h, padding}) {
    const ticks = xScale.ticks(12);
    return (
        <g>
            <line
                x1={xScale.range()[0]}
                y1={h - padding}
                x2={xScale.range()[1]}
                y2={h - padding}
                stroke="black"
            />
        </g>
    );
}