import "../css/Header.Module.css"

function Header () {

    return (
        <header>
            <div className="logo">
                <h1>LuppoTW</h1>
            </div>
            <div className="container-search">
                <img src={require("../../../images/lupa-preta.png")} alt="Icon" className="search" />
                <input type="search" />
            </div>
        </header>
    )
}
export default Header