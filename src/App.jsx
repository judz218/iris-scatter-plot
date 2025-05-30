import {useState, useEffect} from "react";

function App() {
  const [xProperty, setXProperty] = useState("sepal lebgth");
  const [yProperty, setYProperty] = useState("sepal width");

  useEffect(() => {
    (async () => {
      const response = await fetch("https://s3-us-west-2.amazonaws.com/s.cdpn.io/2004014/iris.json");
      const data = await response.json();
      console.log(data);
    })();
  }, []);

  return (
    <div>
      <header className="hero is-info is-small ">
        <div className="hero-body"> 
            <h1 className="has-text-white">scatter plot of iris data</h1>
        </div>
      </header>
      <main>
        <div>
          <label for="x-select">x property</label>
          <select value={xProperty} onChange={(event)=> {setXProperty(event.target.value)}}>
            <option value="sepal length">sepal length</option>
            <option value="sepal width">sepal width</option>
            <option value="petal length">petal length</option>
            <option value="petal width">petal width</option>
          </select>
        </div>
        <div>
          <label for="y-select">y property</label>
          <select value={yProperty} onChange={(event)=> {setYProperty(event.target.value)}}>
            <option value="sepal length">sepal length</option>
            <option value="sepal width">sepal width</option>
            <option value="petal length">petal length</option>
            <option value="petal width">petal width</option>
          </select>
        </div>
        <div>
          content
        </div>

      </main>
    </div>
  );
}

export default App;