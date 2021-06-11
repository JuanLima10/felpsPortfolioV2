import Style from './role.module.scss';

export default function Role(){
    return(
        <>
        <div id="Role" className={Style.role}>
            <p className={Style.title}>Interface</p>
            <div className={Style.roleContent}>
                <div className={Style.hero1}>
                    <p>Interface</p>
                    <img src="/img/role.png" alt="Projeto Rolê" />
                </div>
                <div className={Style.hero2}>
                    <p>Rolê: Descubra preço do seu Rolê sem complicação!</p>
                    <p>Interface feita para estudo de UI Design.</p>
                    <a target="blank_" href="https://juanlima10.github.io/role/index.html">Ver Trabalho</a>
                </div>
            </div>
            <p className={Style.nextWork}><a href="#SolarSystem">Proximo trabalho <i className="fas fa-angle-right"></i></a></p>
            <p className={Style.nextWorkIcon}><a href="#SolarSystem"><i className="fas fa-arrow-down"></i></a></p>
        </div>
        </>
    )
}