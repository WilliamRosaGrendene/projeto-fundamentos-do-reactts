import styles from './Header.module.css'

import igniteLogo from '../assets/logo_ignite.svg'

export function Header(){
    return(
        //ClassName seria a class do css, {styles.header} de onde o style está importando o css e .header é a class no css
        <header className={styles.header}>
            <strong><img src={igniteLogo} alt="Logotipo do Ignite"/> Projeto Ignite</strong>
        </header>
    )
}