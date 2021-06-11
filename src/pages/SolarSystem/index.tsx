import Style from './solarSystem.module.scss';

export default function SolarSystem(){
    return(
        <>
        <div id="SolarSystem" className={Style.solarSystem}>
            <p className={Style.title}>Interface</p>
            <div className={Style.solarSystemContent}>
                <div className={Style.hero1}>
                    <p>Interface</p>
                    <img src="/img/solarSystem.png" alt="Projeto Rolê" />
                </div>
                <div className={Style.hero2}>
                    <p>Solar System: Conheça mais sobre o sistema solar.</p>
                    <p>Interface feita para estudo de UI Design.</p>
                    <a target="blank_" href="https://www.behance.net/gallery/120367785/Interface-Solar-System">Ver Trabalho</a>
                </div>
            </div>
            <p className={Style.nextWork}><a href="#About">Mais sobre mim <i className="fas fa-angle-right"></i></a></p>
            <p className={Style.nextWorkIcon}><a href="#About"><i className="fas fa-arrow-down"></i></a></p>
        </div>
        </>
    )
}