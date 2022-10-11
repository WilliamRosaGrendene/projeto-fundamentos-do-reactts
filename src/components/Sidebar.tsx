import {PencilLine} from 'phosphor-react'
import { Avatar } from './Avatar'

import Styles from './Sidebar.module.css'


export function Siderbar(){
    return(
        <aside className={Styles.sidebar}>
            
            <img className={Styles.cover} src="https://images.unsplash.com/photo-1604964432806-254d07c11f32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"/>
           
            <div className={Styles.profile}>

            {/* hasBorder propriedade que chama a borda no componente Avatar.module.css */}
            <Avatar hasBorder src="https://avatars.githubusercontent.com/u/114080002?v=4" />

                <strong>William Rosa</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20}/>
                    Eitar seu perfil</a>
            </footer>
        </aside>
    )
}