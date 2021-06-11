import NavBar from '../../components/NavBar';
import Style from './header.module.scss';

export default function Header(){
    return(
        <>
        <div className={Style.header}>
            <NavBar />
            <div className={Style.headerContent}>
                <div className={Style.hero1}>
                    <img src="/img/heroHeader.svg" alt="Ilustração" />
                </div>
                <div className={Style.hero2}>
                    <p>Oi eu sou <span>Felipe Sena</span></p>
                    <p>UX/UI Designer</p>
                    <p>seja bem-vindo ao meu site!</p>
                    <a href="#PetAdd">Ver trabalhos</a>
                    <a href="mailto:felipesenaux@gmail.com">Fale Comigo</a>
                </div>
            </div>
            <div className={Style.headerFooter}>
                <div className={Style.icons}>
                    <a target="blank_" href="https://felipesenaux.medium.com/"><i className="fab fa-medium-m"></i></a>
                    <a target="blank_" href="https://www.linkedin.com/in/felipe-sena-85a379172/"><i className="fab fa-linkedin"></i></a>
                    <a target="blank_" href="https://www.behance.net/felipesenaUX"><i className="fab fa-behance"></i></a>
                </div>
            </div>
        </div>
        </>
    )
}