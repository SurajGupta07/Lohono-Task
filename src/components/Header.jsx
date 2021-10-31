import { Link } from "react-router-dom";
export const Header = () => {
    return (
        <div className="component-container" id="navbar">
            <div className="nav-container">
                <nav className="navigation container">
                    <div className="nav-brand">Todo App</div>
                    <ul className="non-bullet nav-pills">
                        <li className="list-item-inline">
                            <Link to="/" className="link">
                                Home
                            </Link>
                        </li>
                        <li className="list-item-inline">
                            <Link to="/list" className="link">
                                Todo
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};
