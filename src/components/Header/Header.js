import list_logo from "../../assets/list_logo.svg"
import './Header.css'

export function Header() {
    return <header>
        <div className="Header">
            <div><img src={list_logo} className='App-logo' alt="logo"/></div>
            <h1 className="HeaderH1"> To do list</h1>
        </div>
    </header>;
}
// div style="text-align:center;line-height:100px;height:100px;">Text Content</div>