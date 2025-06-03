// いったんxは"sepal length"、yは"sepal width"に固定して散布図をつくろう
import * as d3 from "d3";
import { useEffect } from "react";

export default function Contents ({data, xProperty, yProperty}) {
    const colors = {
        setosa: "green",
        versicolor: "purple",
        virginica: "orange"
    };
    const w = 800;
    const h = 800;

    const r = 5;

    useEffect(() => {

        console.log("xProperty:", xProperty);
        console.log("yProperty:", yProperty);
        console.log("sample data:", data[0]);
        console.log("value x:", data[0][xProperty]);
        console.log("value y:", data[0][yProperty]);

        var svg = d3.select("body")
                .append("svg")
                .attr("width", w)
                .attr("height", h);

        const xScale = d3.scaleLinear()
                        .domain([0, d3.max(data, d => d.sepalLength)])
                        .range([0, w]);
        
        const yScale = d3.scaleLinear()
                        .domain([0, d3.max(data, d => d.sepalWidth)])
                        .range([h, 0]);

        const circles = svg.selectAll("circle")
                            .data(data)
                            .enter()
                            .append("circle");
        
        circles.attr("cx", d => xScale(d.sepalLength))
                .attr("cy", d => yScale(d.sepalWidth))
                .attr("r", r)
                .attr("fill", d => colors[d.species]);

    }, [data, xProperty, yProperty]);
    

    return (
        <></>
    );
}