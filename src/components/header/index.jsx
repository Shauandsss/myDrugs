import './header.css'
import myDrugsLogo from '../../images/logo.png'
import SearchIcon from '@mui/icons-material/Search';


export default function Header() {

    return (
        <div className='main-Header'> 
			<div className='Header-itens'>
				<img src={myDrugsLogo} alt='myDrugs logo' className='logo'/>
				<ul>
					<li>Home</li>
					<li>Economy</li>
					<li>Premium</li>
					<li>Party Packs</li>
					<li>Safety</li>
					<li>FAQ</li>
					<li>Contact</li>
				</ul>
				<SearchIcon className='Header-searchIcon'/>
				<button>
					 LOGIN 
				</button>
			</div>
        </div>
    )
}