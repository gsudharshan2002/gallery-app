
import './App.css';
import Gallery from './Gallery';
import Footer from './Footer';

function App() {
  const s={fontSize:'60px' }
  return (
    <>
        <div 
          style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'lightcyan',
          borderRadius: '12px',
          width: '100%',
          height: '180px',
          boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.8)', }}
        
        >
        <h1 style={s} ><span style={{color:'red',transform:'scale(1.1)'}}>I</span>mage Gallery</h1></div>

      <Gallery/>
      <Footer/>

    </>
  );
}

export default App;
