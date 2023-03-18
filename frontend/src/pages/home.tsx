import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <p>aaa</p>
      <h1>home</h1>
      <ul>
        <li>
          <Link to="/todo">TODO</Link>
        </li>
      </ul>
    </div>
  );
}

export default Home;
