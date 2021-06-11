import Style from './navBar.module.scss';

export default function NavBar(){
    return(
        <>
        <div className={Style.navBar}>
            <div className={Style.navBarContent}>
                <div className={Style.logo}>
                    <img src="/img/logo.svg" alt="Logo" />
                    <p>Felipe Sena <span>UX/UI</span></p>
                </div>
                <div className={Style.buttons}>
                    <a href="#PetAdd">Trabalhos</a>
                    <a href="mailto:felipesenaux@gmail.com">Fale Comigo</a>
                </div>
            </div>
        </div>
        </>
    )
}