// export default function Contents ({data, xProperty, yProperty}) {
//     console.log(xProperty)
//     const colors = {
//         setosa: "green",
//         versicolor: "purple",
//         virginica: "orange"
//     };
//     const w = 800;
//     const h = 800;

//     const r = 5;

//     useEffect(() => {
//         var svg = d3.select("body")
//                 .append("svg")
//                 .attr("width", w)
//                 .attr("height", h);

//         const xScale = d3.scaleLinear()
//                         .domain([0, d3.max(data, d => d[xProperty])])
//                         .range([0, w]);
        
//         const yScale = d3.scaleLinear()
//                         .domain([0, d3.max(data, d => d[yProperty])])
//                         .range([h, 0]);

//         const circles = svg.selectAll("circle")
//                             .data(data)
//                             .enter()
//                             .append("circle");
        
//         circles.attr("cx", d => xScale(d[xProperty]))
//                 .attr("cy", d => yScale(d[yProperty]))
//                 .attr("r", r)
//                 .attr("fill", d => colors[d.species]);

//     }, [data, xProperty, yProperty]);
    

//     return (
//         <></>
//     );
// }

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

    return (
        <svg width={w} height={h}>
            {data.map((d, i) => (
                <circle 
                    key={i}
                    cx={xScale(d[xProperty])}
                    cy={yScale(d[yProperty])}
                    r={r}
                    fill={colors[d.species]}
                />
            ))}
            {/* 点(0,0)の位置 */}
            <circle cx="0" cy="0" r="10" fill="red" /> 
        </svg>
    );
}
