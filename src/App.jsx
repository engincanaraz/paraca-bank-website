import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./components/pages/Home";
import Blog from "./components/pages/Blog";
import BlogPost from "./components/pages/BlogPost";
import Login from "./components/pages/Login";
// Header ve Footer içeren layout bileşeni
const MainLayout = ({ children }) => (
  <div className="flex flex-col min-h-screen">
    <Header />
    <main className="flex-grow">{children}</main>
    <Footer />
  </div>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout>
              <Home />
            </MainLayout>
          }
        />
        <Route
          path="/blog"
          element={
            <MainLayout>
              <Blog />
            </MainLayout>
          }
        />
        <Route
          path="/blog/:id"
          element={
            <MainLayout>
              <BlogPost />
            </MainLayout>
          }
        />
        <Route path="/signin" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
