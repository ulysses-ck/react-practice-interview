import { Kata1 } from "./components/kata-1";
import { Kata2 } from "./components/kata-2";
import { Kata3 } from "./components/kata-3";
import { Kata4 } from "./components/kata-4";
import { Kata5 } from "./components/kata-5";
import { Kata6 } from "./components/kata-6";
import { Kata7 } from "./components/kata-7";
import { Kata8 } from "./components/kata-8";
import { ThemeProvider } from "./providers/theme-provider";

function App() {
  return (
    <ThemeProvider>
      <div>
        {/* <Kata1 /> */}
        {/* <Kata2 /> */}
        {/* <Kata3 /> */}
        {/* <Kata4 /> */}
        {/* <Kata5 /> */}
        {/* <Kata6 /> */}
        {/* <Kata7 /> */}
        <Kata8 />
      </div>
    </ThemeProvider>
  );
}

export default App;
