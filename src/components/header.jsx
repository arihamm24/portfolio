import ActionButtons from './actionButtons'
import { Link } from 'react-router';

function Header() {
    return (
        <header>
        <div>
        <Link to="/" style={
           {textDecoration: 'none', color:"#F5F5FA", alignSelf:"center"}
        }><h1>Ari Hammond</h1></Link>
        </div>
        <ActionButtons />
        </header>
    );
}
export default Header