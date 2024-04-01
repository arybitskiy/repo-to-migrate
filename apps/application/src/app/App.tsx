import styles from './App.module.css';

import { Route, Routes, Link, useLocation } from 'react-router-dom';

export function App() {
  const location = useLocation();

  return (
    <div className={styles.main} data-testid="main">
      <div className={styles.left} data-testid="left"></div>
      <div className={styles.right} data-testid="right"></div>
      <div className={styles.center} data-testid="center">
        <Routes>
          <Route
            path="/"
            element={
              <div>
                This is the generated root route.{' '}
                <Link to="/page-2">Click here for page 2.</Link>
              </div>
            }
          />
          <Route
            path="/page-2"
            element={
              <div>
                <Link to="/">Click here to go back to root page.</Link>
              </div>
            }
          />
        </Routes>
      </div>
      <div className={styles.navbar} data-testid="navbar">
        <ul className={styles.navigation}>
          <li className={location.pathname === '/' ? styles.active : undefined}>
            <Link to="/" data-testid="home-link">
              Home
            </Link>
          </li>
          <li
            className={
              location.pathname === '/page-2' ? styles.active : undefined
            }
          >
            <Link to="/page-2" data-testid="page-2-link">
              Page 2
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles.footer} data-testid="footer"></div>
    </div>
  );
}

export default App;
