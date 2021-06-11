import Style from './petAdd.module.scss';

export default function PetAdd(){
    return(
        <>
        <div id="PetAdd" className={Style.petAdd}>
            <p className={Style.title}>Cases de UI/UX</p>
            <div className={Style.petAddContent}>
                <div className={Style.hero1}>
                    <p>Case de UX/UI Designer</p>
                    <img src="/img/petAdd.png" alt="Projeto Pet+" />
                </div>
                <div className={Style.hero2}>
                    <p>Pet+: Usando a tecnologia para unir um pet a um lar</p>
                    <p>Como usei Ux Designer para facilitar e promover a 
                    adoção de animais de estimação.</p>
                    <a target="blank_" href="https://pet-add-page.vercel.app">Ver Trabalho</a>
                </div>
            </div>
            <p className={Style.nextWork}><a href="#Role">Proximo trabalho <i className="fas fa-angle-right"></i></a></p>
            <p className={Style.nextWorkIcon}><a href="#Role"><i className="fas fa-arrow-down"></i></a></p>
        </div>
        </>
    )
}