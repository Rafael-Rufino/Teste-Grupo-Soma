import { BrowserRouter as Router } from "react-router-dom";

import { Layout } from "./Layout/layout";
import Routes from "./routes";

function App() {
  return (
    <Router>
      <Layout />
      <Routes />
    </Router>
  );
}

export default App;
