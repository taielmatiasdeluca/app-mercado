import './Header.css';

function Header() {
    return (
        <header>
            <div className="logo">
                App Mercado
            </div>
            <div className="seacher">
                <input type="text" placeholder='Buscar Productos' />
                <span class="material-symbols-outlined">
                    search
                </span>
            </div>

        </header>
    );
  }
  
export default Header;
  