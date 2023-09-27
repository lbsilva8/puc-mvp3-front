import style from './Header.module.css';
import { CgProfile } from 'react-icons/cg';
import { useState } from 'react';
import imagemPrincipal from '../../assets/imagemPrincipal.png'
import { Link } from "react-router-dom"


export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className={style.background}>
      <div className={style.menu}>
        <ul>
          <li className={style.item}>
            <Link to="/">HOME</Link>
          </li>
          <li className={style.item}>
            <Link to="/novaserie">Novo Cadastro</Link>
          </li>
          <li className={style.item}>
            <Link to="/series">Ver Wishlist</Link>
          </li>
          <li className={style.item}>
            <Link to="/procuraranime">Buscar Anime</Link>
          </li>
          <li className={style.item}>
            <Link to="/animes">Lista Animes</Link>
          </li>
          </ul>
      </div>
      <div className={style.titulo}>
       <h1>O que você está assistindo em 2023?</h1>
      <div className={style.image}>
        <img src={imagemPrincipal} alt="banner principal"></img>
      </div>
      </div>
      <div className={style.profile}>
        <div className={style.dropdown} onClick={() => setOpen(!open)}>
          <CgProfile size={18} />
          <span>Perfil</span>
        </div>
      </div>
    </header>
  );
}