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
