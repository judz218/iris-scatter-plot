import { useEffect, useRef } from "react";
// useRefってなんだ
export default function Contents({ data, xProperty, yProperty }) {
    const colors = {
        setosa: "green",
        versicolor: "purple",
        virginica: "orange"
    };

    const w = 800;
    const h = 800;
    const r = 5;

    const svgRef = useRef(); // React が svg を管理

    useEffect(() => {
        const svg = d3.select(svgRef.current);

        // 前回の描画をクリア（毎回リセット）
        svg.selectAll("*").remove();

        const xScale = d3.scaleLinear()
            .domain([0, d3.max(data, d => d[xProperty])])
            .range([0, w]);

        const yScale = d3.scaleLinear()
            .domain([0, d3.max(data, d => d[yProperty])])
            .range([h, 0]);

        svg.selectAll("circle")
            .data(data)
            .enter()
            .append("circle")
            .attr("cx", d => xScale(d[xProperty]))
            .attr("cy", d => yScale(d[yProperty]))
            .attr("r", r)
            .attr("fill", d => colors[d.species]);

    }, [data, xProperty, yProperty]);

    return (
        <svg ref={svgRef} width={w} height={h}></svg>
    );
}
