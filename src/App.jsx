import {
  Link,
  Redirect,
  BrowserRouter as Router,
  Route,
  useParams,
  Switch,
} from 'react-router-dom';

import styles from './App.css';

function RGB() {
  // 🚨 Get values for r, g, and b from params
  const { r, g, b } = useParams();
  // 🚨 Uncomment next lines after importing
  return (
    <div
      className={styles.fill}
      style={{ background: `rgb(${r}, ${g}, ${b})` }}
    >
      <p>{`rgb(${r},${g},${b})`}</p>
    </div>
  );
}

function ScreenColor() {
  return (
    <Switch>
      <Route path="/rgb/:r/:g/:b"></Route>
    </Switch>
  );
}

export default function App() {
  return (
    <Router>
      <header>
        <Route exact path="/">
          <Redirect to="/rgb/192/192/192" />
        </Route>
        <ul>
          <Link to="/rgb/192/192/192">Silver</Link>
          <Link to="/rgb/220/20/60">Crimson</Link>
          <Link to="/rgb/147/112/219">Purple</Link>
        </ul>
      </header>

      <ScreenColor />
    </Router>
  );
}
