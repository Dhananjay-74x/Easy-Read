import logo  from '../assets/logo.png';



const Hero = () => {
  return (
    <header className = "w-full flex  justify-center items-center flex-col">
      <nav className = "flex justify-evenly items-center w-full mb-12 pt-5">
  {/* <img src = {logo} alt ="EasyRead_logo" className = "w-28 object-contain"/> */}

      <button 
        type = "button"
        onClick={()=> window.open('https://github.com')}
        className = 'black_btn'>
          Developed by Dhananjay Gaur
        </button>
      </nav>

      <h1 className = "head_text">
        
        <span className = "blue_gradient">EasyRead </span>
        AI <br className="max-md:hidden"/> 
        

      </h1>

      <h1 className = "mid_text">
        Article Summarizer
        <br />

      </h1>

      <h2 className = "desc">Simplify your reading with EasyRead, an online platform that redefines the way you consume written content. It utilizes advanced natural language processing algorithms to provide concise and comprehensive summaries of any article, empowering you to extract key information swiftly and efficiently.</h2>
    </header>
  )
}

export default Hero