export default function Controls({ xProperty, yProperty, setXProperty, setYProperty }) {
  const propertyName = ["sepal length", "sepal width", "petal length", "petal width"];
  const propertyVal = ["sepalLength", "sepalWidth", "petalLength", "petalWidth"];
  return (
    <div>
      <div>
        <label id="x-select">x property</label>
        <select value={xProperty} onChange={(event)=> {setXProperty(event.target.value)}}>
          {propertyName.map((p, i) => (
            <option key={i} value={propertyVal[i]}>{p}</option>
          ))}
        </select>
      </div>
      <div>
        <label id="y-select">y property</label>
        <select value={yProperty} onChange={(event)=> {setYProperty(event.target.value)}}>
          {propertyName.map((p, i) => (
            <option key={i} value={propertyVal[i]}>{p}</option>
          ))}
        </select>
      </div>
    </div>
  );
}