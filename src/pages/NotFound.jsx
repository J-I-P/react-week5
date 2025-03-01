import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div>
            <h1>找不到頁面</h1>
            <Link to="/">回首頁</Link>
        </div>
    );
}