import { PencilLine } from "phosphor-react";
import { Avatar } from "../Avatar";
import styles from "./styles.module.css";

export function Sidebar() {
  return (
    <aside className={styles.container}>
      <img
        className={styles.cover}
        src="https://plus.unsplash.com/premium_photo-1663047716627-e0b6c878761e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8ZGV2ZWxvcGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=50"
      />
      <div className={styles.profile}>
        <Avatar src="https://github.com/thyago608.png" />
        <strong>Thyago Ribeiro</strong>
        <span>Web Developer</span>
      </div>
      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
