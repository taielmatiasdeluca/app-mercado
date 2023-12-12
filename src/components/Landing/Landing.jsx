function Landing() {
    const logged = localStorage.getItem('logged') == 'true'
    console.log(logged);
    return (
        <div className="landing">
          {logged && ( 
            <h2>Bienvenido al panel, Usuario</h2>
          )}
            
        </div>
    );
  }
  
export default Landing;
  