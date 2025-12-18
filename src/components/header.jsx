import ActionButtons from './buttons/actionButtons'
import { Link } from 'react-router';
import { IoMenu } from 'react-icons/io5';
function Header() {
    return (
        <header>
        <Link to="/" style={
           {textDecoration: 'none', color:"#F5F5FA", alignSelf:"center"}
        }><h1>Ari Hammond</h1></Link>
        <ActionButtons />
        </header>
    );
}
export default Header;