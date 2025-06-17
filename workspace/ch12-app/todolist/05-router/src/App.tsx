import { RouterProvider } from "react-router";
import router from "./routes.tsx";

function App() {
  return (
    <>
      <RouterProvider router={router} />
      {/* <Header />
      <div className="main"></div>
      <Footer /> */}
    </>
  );
}

export default App;
