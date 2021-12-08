

const Header = (props) => {
    return <header>
        <h2>Forum</h2>
        <input onChange={props.search} value={props.keyWord} className="search-bar" placeholder="Search posts"></input>
    </header>
}


export default Header;