import Header from "./components/Header";
import Controls from "./components/Controls"
import Main from "./components/Main";

import {useState, useEffect} from "react";

function App() {
  const [xProperty, setXProperty] = useState("sepalLength");
  const [yProperty, setYProperty] = useState("sepalWidth");
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

  return (
    <div>
      <Header />
      <Controls 
        xProperty={xProperty}
        yProperty={yProperty}
        setXProperty={setXProperty}
        setYProperty={setYProperty}
      />
      <Main
        data={data}
        xProperty={xProperty}
        yProperty={yProperty}
      />
    </div>
  );
}

export default App;