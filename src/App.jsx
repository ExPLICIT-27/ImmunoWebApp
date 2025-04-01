import "./App.css";

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <div className="nav-brand">ImmunoProfile</div>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <main>
        <section className="hero">
          <h1>Personalized Immune Profiling</h1>
          <p className="gradient-text">
            Revolutionizing SLE Treatment Through AI-Driven Solutions
          </p>
        </section>

        <section className="features">
          <div className="feature-card">
            <h3>Immune Profiling</h3>
            <p>
              Advanced analysis of your unique immune system characteristics
            </p>
          </div>
          <div className="feature-card">
            <h3>Genomic Integration</h3>
            <p>
              Comprehensive genetic background analysis for targeted treatment
            </p>
          </div>
          <div className="feature-card">
            <h3>AI-Powered Insights</h3>
            <p>
              Machine learning algorithms for precise treatment recommendations
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
