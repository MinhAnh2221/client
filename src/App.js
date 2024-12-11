import React, { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { routes } from "./routes";
import DefaultComponent from "./components/DefaultComponent/DefaultComponent";
import { jwtTranslate } from "./ultilis";
import NotFound from "./page/NotFound";

function App() {
  const accessToken = localStorage.getItem("access_token");
  let isAdmin = false;

  if (accessToken) {
    try {
      const decodedToken = jwtTranslate(accessToken);
      isAdmin = decodedToken?.isAdmin; // Lấy thông tin isAdmin từ token
    } catch (error) {
      console.error("Invalid token", error);
    }
  }
  return (
    <div>
        <Router>
          <Routes>
            {routes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={
                  // Kiểm tra nếu route yêu cầu đăng nhập và người dùng chưa đăng nhập
                  route.isPrivate && !accessToken ? (
                    <Navigate to="/" replace />
                  ) :
                    // Kiểm tra nếu route yêu cầu quyền admin và người dùng không phải admin
                    route.isAdmin && !isAdmin ? (
                      <Navigate to="/" replace />
                    ) : (
                      <Fragment>
                        {route.isShowHeader && <DefaultComponent />}
                        <route.page />
                      </Fragment>
                    )
                }
              />
            ))}
            <Route path="*" element={<NotFound/>}></Route>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
