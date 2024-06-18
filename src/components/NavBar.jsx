import NavButton from '../components/NavButton';
import { CarullaContext } from '../context/CarullaContext';
import styles from './NavBar.module.css';
import { faCartShopping, faCar } from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from 'react';



function NavBar() {
    // esto es un estado "" string vacio
    const [textoBusqueda, setTextoBusqueda] =useState("");
    //console.log(textoBusqueda);
    const {getAllCarulla} = useContext(CarullaContext);

    return <>
        <header>
            <div className={styles['headertotal']}>

                <div className={styles['headeruno']}>
                    <NavButton icon={faCar} href="#" />
                    <NavButton icon={faCar} href="#" />
                </div>
                <div>
                    <input type="text" value={textoBusqueda} onChange={(ev)=>{setTextoBusqueda(ev.target.value)}} />
                    <button onClick={()=>{getAllCarulla(textoBusqueda)}}>buscar </button>
                </div>
                <div className={styles['headerdos']}>
                    <NavButton icon={faCar} href="#" />
                    <NavButton icon={faCar} href="#" />
                    <NavButton icon={faCar} href="#" />
                    <NavButton icon={faCar} href="#" />
                    <NavButton icon={faCartShopping} href="/carrito" />
                </div>
                
            </div>

        </header>

    </>
}

export default NavBar;