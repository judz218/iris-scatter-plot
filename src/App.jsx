import Header from "./components/Header";
import Controls from "./components/Controls"
import Contents from "./components/Contents";

import {useState, useEffect} from "react";

function App() {
  const [xProperty, setXProperty] = useState("sepal lebgth");
  const [yProperty, setYProperty] = useState("sepal width");
  const [data, setData] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await fetch("https://s3-us-west-2.amazonaws.com/s.cdpn.io/2004014/iris.json");
      const json = await response.json();
      setData(json);
    })();
  }, []);

  if (!data) {
    return (
      <p>Loading</p>
    )
  }

  
  // 子から子への受け渡しには一度親を経由させる必要がある
  return (
    <div>
      <Header />
      <Controls 
        xProperty={xProperty}
        yProperty={yProperty}
        setXProperty={setXProperty}
        setYProperty={setYProperty}
      />
      <Contents
        data={data}
        xProperty={xProperty}
        yProperty={yProperty}
      />
    </div>
  );
}

export default App;