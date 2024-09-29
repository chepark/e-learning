import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import MyCoursePage from "./pages/MyCoursePage";
import { UIDataContextProvider } from "./context/UIDataContext";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <UIDataContextProvider>
          <Router>
            <Routes>
              <Route path="/e-learning" element={<Layout />}>
                <Route path="" element={<HomePage />} />
                <Route path="mycourses" element={<MyCoursePage />} />
              </Route>
            </Routes>
          </Router>
        </UIDataContextProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
