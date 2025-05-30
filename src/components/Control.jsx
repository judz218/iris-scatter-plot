import {useState, useEffect} from "react";


export default function Control() {
    const [xProperty, setXProperty] = useState("sepal lebgth");
    const [yProperty, setYProperty] = useState("sepal width");
    return (
        <div>
          <label for="x-select">x property</label>
          <select value={xProperty} onChange={(event)=> {setXProperty(event.target.value)}}>
            <option value="sepal length">sepal length</option>
            <option value="sepal width">sepal width</option>
            <option value="petal length">petal length</option>
            <option value="petal width">petal width</option>
          </select>
        </div>
    );
}