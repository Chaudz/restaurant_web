import { BrowserRouter, Route, Routes } from "react-router-dom";
import screenUrls from "../constants/screenUrls";
import HomePage from "../pages/client/HomePage";
import PageWrapper from "../pages/PageWrapper";

const routerConfig = [
  {
    url: screenUrls.HOME,
    component: HomePage,
    title: "Trang chủ",
    isHeader: true,
    isFooter: true,
  },
];

const AppRouter = () => {
  console.log("===========+");
  return (
    <BrowserRouter>
      <Routes>
        {routerConfig.map((route, index) => {
          return (
            <Route
              key={index}
              path={route.url}
              element={
                <PageWrapper
                  title={route.title}
                  component={route.component}
                  isHeader={route.isHeader}
                  isFooter={route.isFooter}
                />
              }
            />
          );
        })}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
