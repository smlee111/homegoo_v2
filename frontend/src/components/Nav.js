import { Link } from "react-router-dom";

export default function Nav() {
    return (
        <nav>
            <Link to="/">
                <p className="logo">로고</p>
            </Link>
            <ul className="menu">
                <li>
                    <Link to="/">메인</Link>
                </li>
                <li>
                    <Link to="/map">맵</Link>
                </li>
                <li>
                    <Link to="/dues">공과금</Link>
                </li>
                <li>
                    <Link to="/cost">월주거비</Link>
                </li>
                <li>
                    <Link to="/loan">대출</Link>
                </li>
                <li>
                    <Link to="/dashboard">대쉬보드</Link>
                </li>
            </ul>
        </nav>
    );
}