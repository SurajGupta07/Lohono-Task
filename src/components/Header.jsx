import { Link } from "react-router-dom";
export const Header = () => {
    return (
        <div class="component-container" id="navbar">
            <div class="nav-container">
                <nav class="navigation container">
                    <div class="nav-brand">Todo App</div>
                    <ul class="non-bullet nav-pills">
                        <li class="list-item-inline">
                            <Link to="/" class="link">
                                Home
                            </Link>
                        </li>
                        <li class="list-item-inline">
                            <Link to="/list" class="link">
                                Todo
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};
