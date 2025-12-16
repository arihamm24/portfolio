import ActionButtons from './actionButtons'
import { Link } from 'react-router';

function Header() {
    return (
        <header>
        <Link to="/" style={
           {textDecoration: 'none', color:"#F5F5FA"}
        }><h1>Ari Hammond</h1></Link>
        <ActionButtons />
        </header>
    );
}
export default Header