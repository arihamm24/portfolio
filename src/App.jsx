import Header from './components/header'
import Sidebar from './components/sidebar'
import Main from './components/mainBody'
import Footer from './components/footer'
import "./styles.css"

function App() {
  return (
    <>
      <Header />
      <div id="gridContainer">
        <Sidebar />
        <Main />
      </div>
      <Footer />
    </>
  );
}

export default App
