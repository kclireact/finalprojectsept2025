const { BrowserRouter, Routes, Route, Link, useParams } = ReactRouterDOM;

function Home() {
  return (
    <div>
      <h1>🏞️ Welcome to Park Restaurant Voting</h1>
      <ul>
        <li><Link to="/vote/pizza">Pizza Place</Link></li>
        <li><Link to="/vote/sushi">Sushi Spot</Link></li>
        <li><Link to="/vote/burger">Burger Barn</Link></li>
      </ul>
    </div>
  );
}

function Vote() {
  const { name } = useParams();
  return (
    <div>
      <h2>You voted for: {name}! 🍴</h2>
      <Link to="/">Go Home</Link>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vote/:name" element={<Vote />} />
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);