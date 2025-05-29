function App() {
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
          <select name="x" id="x property">
            <option value="sepal length">sepal length</option>
            <option value="sepal width">sepal width</option>
            <option value="petal length">petal length</option>
            <option value="petal width">petal width</option>
          </select>
        </div>
        <div>
          <label for="y-select">y property</label>
          <select name="y" id="y property">
            <option value="sepal length">sepal length</option>
            <option value="sepal width">sepal width</option>
            <option value="petal length">petal length</option>
            <option value="petal width">petal width</option>
          </select>
        </div>
        <div>
          
        </div>

      </main>
    </div>
  );
}

export default App;