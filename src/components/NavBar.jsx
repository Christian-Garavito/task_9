import NavButton from '../components/NavButton';
import styles from './NavBar.module.css';
import { faCartShopping, faCar } from "@fortawesome/free-solid-svg-icons";


function NavBar() {

    return <>
        <header>
            <div className={styles['headertotal']}>

                <div className={styles['headeruno']}>
                    <NavButton icon={faCar} href="#" />
                    <NavButton icon={faCar} href="#" />
                </div>
                <div>
                    <input type="hola" />
                </div>
                <div className={styles['headerdos']}>
                    <NavButton icon={faCar} href="#" />
                    <NavButton icon={faCar} href="#" />
                    <NavButton icon={faCar} href="#" />
                    <NavButton icon={faCar} href="#" />
                    <NavButton icon={faCartShopping} href="#" />
                </div>
                
            </div>

        </header>

    </>
}

export default NavBar;