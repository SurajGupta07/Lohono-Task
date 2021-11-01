import { Link } from "react-router-dom";
export const Header = () => {
    return (
        <div className="component-container" id="navbar">
            <nav className="navigation">
                <div className="nav-brand">Todo App</div>
                <ul className="non-bullet nav-pills">
                    <li className="list-item-inline">
                        <Link to="/" className="link">
                            Home
                        </Link>
                    </li>
                    <li className="list-item-inline">
                        <Link to="/list" className="link">
                            Add Todo
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};
