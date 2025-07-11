function App() {
  return (
    <Router>
      <div className="container-fluid p-0 min-vh-100" style={{ background: '#f0f8ff' }}>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow mb-4">
          <div className="container">
            <Link className="navbar-brand fw-bold" to="/">OctoFit Tracker</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/activities">Activities</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/leaderboard">Leaderboard</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/teams">Teams</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/users">Users</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/workouts">Workouts</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <main className="container py-4">
          <Routes>
            <Route path="/activities" element={<Activities />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/users" element={<Users />} />
            <Route path="/workouts" element={<Workouts />} />
            <Route path="/" element={<div className="text-center"><h1 className="display-4 fw-bold mb-4">Welcome to OctoFit Tracker</h1><p className="lead">Track your fitness, join teams, and compete on the leaderboard!</p></div>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
