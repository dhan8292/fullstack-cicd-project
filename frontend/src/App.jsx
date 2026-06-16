import './App.css'

function App() {

  return (
    <div className="dashboard">

      <h1>🚀 DevOps Dashboard</h1>

      <div className="cards">

        <div className="card">
          <h2>Users</h2>
          <p>100</p>
        </div>


        <div className="card">
          <h2>Status</h2>
          <p className="running">
            🟢 Running
          </p>
        </div>


        <div className="card">
          <h2>Deployment</h2>
          <p>
            Successful
          </p>
        </div>

      </div>


      <div className="pipeline">

        <h2>CI/CD Pipeline</h2>

        <p>✅ Code Commit</p>
        <p>✅ Build</p>
        <p>✅ Test</p>
        <p>✅ Docker Build</p>
        <p>✅ Deployment</p>

      </div>

    </div>
  )
}

export default App

