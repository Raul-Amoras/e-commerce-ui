import { Avatar } from './Avatar.js'
import styles from './Sidebar.module.css'
import { PencilLine } from 'phosphor-react'

export function Sidebar(){
    return (
        <>
        <aside className={styles.sidebar}>
            <img className={styles.cover} src="https://images.unsplash.com/photo-1566977744263-79e677f4e7cf?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=500&q=50" alt="img" />

            <div className={styles.profile}>
                <Avatar hasBorder={true} src="https://github.com/raul-amoras.png" />
                <strong>Name User</strong>
                <span>Web Developer</span>
            </div>
            <footer>
                <a href="#">
                    <PencilLine size={20}/>
                     editar seu perfil
                </a>
            </footer>
        </aside>
        </>
    )
}