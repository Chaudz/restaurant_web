import { BrowserRouter, Route, Routes } from "react-router-dom";
import screenUrls from "../constants/screenUrls";
import { HomePage, MenuPage, BookTablePage } from "../pages/client/index";
import PageWrapper from "../pages/PageWrapper";

const routerConfig = [
  {
    url: screenUrls.HOME,
    component: HomePage,
    title: "Trang chủ",
    isHeader: true,
    isFooter: true,
  },
  {
    url: screenUrls.MENU,
    component: MenuPage,
    title: "Thực đơn",
    isHeader: true,
    isFooter: true,
  },
  {
    url: screenUrls.BOOKING,
    component: BookTablePage,
    title: "Đặt bàn",
    isHeader: true,
    isFooter: true,
  },
];

const AppRouter = () => {
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
