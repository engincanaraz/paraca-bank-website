import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import Home from "./components/pages/Home";
import Blog from "./components/pages/Blog";
import BlogPost from "./components/pages/BlogPost";
import Login from "./components/pages/Login";

/**
 * Ana uygulama bileşeni
 * Rotalama yapısını ve sayfa bileşenlerini tanımlar
 * @returns {JSX.Element} Ana uygulama bileşeni
 */
function App() {
  // Tüm rotaları tanımlayan yapı
  const routes = [
    { path: "/", element: <Home />, layout: true },
    { path: "/blog", element: <Blog />, layout: true },
    { path: "/blog/:id", element: <BlogPost />, layout: true },
    { path: "/signin", element: <Login />, layout: false },
  ];

  return (
    <Router>
      <Routes>
        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={
              route.layout ? (
                <MainLayout>{route.element}</MainLayout>
              ) : (
                route.element
              )
            }
          />
        ))}
      </Routes>
    </Router>
  );
}

export default App;
