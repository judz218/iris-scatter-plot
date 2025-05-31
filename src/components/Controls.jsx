import {useState, useEffect} from "react";


export default function Controls({ xProperty, yProperty, setXProperty, setYProperty }) {

    return (
      <div>
      <div>
          <label id="x-select">x property</label>
          <select value={xProperty} onChange={(event)=> {setXProperty(event.target.value)}}>
            <option value="sepal length">sepal length</option>
            <option value="sepal width">sepal width</option>
            <option value="petal length">petal length</option>
            <option value="petal width">petal width</option>
          </select>
        </div>
        <div>
          <label id="y-select">y property</label>
          <select value={yProperty} onChange={(event)=> {setYProperty(event.target.value)}}>
            <option value="sepal length">sepal length</option>
            <option value="sepal width">sepal width</option>
            <option value="petal length">petal length</option>
            <option value="petal width">petal width</option>
          </select>
        </div>
      </div>
    );
}