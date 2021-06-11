import Style from './footer.module.scss';

export default function Footer(){
    return(
        <>
        <div className={Style.footer}>
            <p className={Style.nextWorkIcon}><a href="#"><i className="fas fa-arrow-up"></i></a></p>
            <div className={Style.footerContent}>
                <div className={Style.logo}>
                    <img src="/img/logo.svg" alt="Logo" />
                    <p>Felipe Sena <span>UX/UI</span></p>
                </div>
                <div className={Style.social}>
                    <a target="blank_" href="https://felipesenaux.medium.com/"><i className="fab fa-medium-m"></i></a>
                    <a target="blank_" href="https://www.linkedin.com/in/felipe-sena-85a379172/"><i className="fab fa-linkedin"></i></a>
                    <a target="blank_" href="https://www.behance.net/felipesenaUX"><i className="fab fa-behance"></i></a>
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