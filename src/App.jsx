import Header from "./components/Header";
import Controls from "./components/Controls"
import Contents from "./components/Contents";

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
  // 子から子への受け渡しには一度親を経由させる必要がある
  return (
    <div>
      <Header />
      <Controls />
      <Contents data={data}/>
    </div>
  );
}

export default App;