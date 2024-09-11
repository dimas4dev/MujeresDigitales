import { BrowserRouter } from 'react-router-dom'
import './App.css'
import { Header } from './components/Header'
import { Layout } from './components/Layout'
import { CardImage } from './components/CardImage'

function App() {


  return (
    <BrowserRouter>
      <Header />
      <Layout>
        <CardImage />
      </Layout>
    </BrowserRouter>
  )
}

export default App
