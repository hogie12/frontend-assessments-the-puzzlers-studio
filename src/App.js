import Header from "./component/header/header";
import { Box } from "@theme-ui/components";
import Content from "./component/content/content";

function App() {
  return (
    <div className="App">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          background: "#FFF8EF",
        }}
      >
        <Box
          sx={{
            p: 3,
          }}
        >
          <Header />
        </Box>
        <Box>
          <Content />
        </Box>
      </Box>
    </div>
  );
}

export default App;
