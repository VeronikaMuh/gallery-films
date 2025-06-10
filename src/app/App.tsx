import { Route, Routes } from "react-router-dom";
import { MainPage, FavoritePage, MoviePage, NotFoundPage } from "@pages";
import { NavBar } from "@widgets/indes";
import { AppRoutes } from "@shared/routes";
import styles from "@shared/styles/global.module.scss";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className={styles.container}>
        <NavBar />
        <Routes>
          <Route path={AppRoutes.HOME} element={<MainPage />} />
          <Route path={AppRoutes.FAVORITE} element={<FavoritePage />} />
          <Route path={AppRoutes.MOVIE} element={<MoviePage />} />
          <Route path={AppRoutes.NOT_FOUND} element={<NotFoundPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
