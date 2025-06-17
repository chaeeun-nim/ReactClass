import Home from "@pages/Home";
import Page1 from "@pages/Page1";
import Page2 from "@pages/Page2";
import { useEffect, useState } from "react";

function App() {
  // 현재 URL을 상태로 관리
  const [currentPath, setCurretPath] = useState(location.pathname);

  useEffect(() => {
    // URL이 변경되면 컴포넌트를 교체한다.
    const handleLocationChange = () => {
      console.log(location.pathname);
      setCurretPath(location.pathname);
    };

    window.addEventListener("popstate", handleLocationChange);
    return () => {
      window.removeEventListener("popstate", handleLocationChange);
    };
  }, []); //최초 마운트/언마운트 될때 만 호출

  const renderComponents = () => {
    switch (currentPath) {
      case "/":
      case "/home":
        return <Home />;
      case "/page1":
        return <Page1 />;
      case "/page2":
        return <Page2 />;
      default:
        return <p>404에러</p>;
    }
  };
  return <>{renderComponents()}</>;
}

export default App;
