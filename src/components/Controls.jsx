export default function Controls({ xProperty, yProperty, setXProperty, setYProperty }) {
  const property = ["sepal length", "sepal width", "petal length", "petal width"];
    return (
      <div>
      <div>
          <label id="x-select">x property</label>
          <select value={xProperty} onChange={(event)=> {setXProperty(event.target.value)}}>
            {property.map((p, i) => (
              <option key={i} value={p}>{p}</option>
            ))}
          </select>
        </div>
        <div>
          <label id="y-select">y property</label>
          <select value={yProperty} onChange={(event)=> {setYProperty(event.target.value)}}>
            {property.map((p, i) => (
              <option key={i} value={p}>{p}</option>
            ))}
          </select>
        </div>
      </div>
    );
}