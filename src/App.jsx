import MainContent from './componnts/MainContent'
import './styles/components/app.sass'
import Sidebar from './componnts/sidebar';

function App() {
  return (
    <div id="portfolio">
      <h1>Leandro Chagas</h1>
      <Sidebar />
      <MainContent />
    </div>
  )
}

export default App
