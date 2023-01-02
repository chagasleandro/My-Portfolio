import MainContent from './components/MainContent';
import './styles/components/app.sass';
import Sidebar from './components/sidebar';

function App() {
  return (
    <div id="portfolio">
      <h1>Leandro Chagas</h1>
      <Sidebar />
      <MainContent />
    </div>
  )
}

export default App;
