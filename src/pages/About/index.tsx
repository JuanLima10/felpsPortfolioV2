import Style from './about.module.scss';

export default function About(){
    ano_aniversario = 2002
    mes_aniversario = 9
    dia_aniversario = 15

    var d = new Date,
        ano_atual = d.getFullYear(),
        mes_atual = d.getMonth() + 1,
        dia_atual = d.getDate(),

        ano_aniversario = +ano_aniversario,
        mes_aniversario = +mes_aniversario,
        dia_aniversario = +dia_aniversario,

        quantos_anos = ano_atual - ano_aniversario;

    if (mes_atual < mes_aniversario || mes_atual == mes_aniversario && dia_atual < dia_aniversario) {
        quantos_anos--;
    }

    let result = quantos_anos < 0 ? 0 : quantos_anos;

    return(
        <>
        <div id="About" className={Style.about}>
            <p className={Style.title}>Sobre Mim</p>
            <div className={Style.aboutContent}>
                <div className={Style.perfil}>
                    <img src="/img/perfil.png" alt="Foto de Perfil" />
                    <p>Felipe Sena</p>
                    <a href="/img/curriculo.pdf" download="Currículo Felipe Sena"><i className="fas fa-download"></i></a>
                    <p>Baixar Currículo</p>
                    <div className={Style.btnSocial}>
                        <a target="blank_" href="https://felipesenaux.medium.com/"><i className="fab fa-medium-m"></i></a>
                        <a target="blank_" href="https://www.linkedin.com/in/felipe-sena-85a379172/"><i className="fab fa-linkedin"></i></a>
                        <a target="blank_" href="https://www.behance.net/felipesenaUX"><i className="fab fa-behance"></i></a>
                    </div>
                </div>
                <div className={Style.more}>
                    <p>Um pouco sobre mim</p> 
                        <p>Idade:</p>
                        <li>{ result } anos</li>
                        <p>Como cheguei ao UX:</p>
                        <li>Pintura</li>
                        <li>Designer gráfico</li>
                        <li>UX/UI Designer</li>
                    <p>Uma coisa que aprendi com UX/UI é que 
                    <span> os erros são extremamente importantes
                    para moldar uma melhor experiência para o 
                    usuário!</span></p>
                    <p>-Faculdade Designer Gráfico<br/>
                    -Curso Especialização UX/UI Design</p>
                </div>
                <div className={Style.skills}>
                    <p>Habilidades</p>
                    <li>Usability</li>
                    <li>UI Designer</li>
                    <li>UX Strategy</li>
                    <li>UX Research</li>
                    <li>Designer Thinking</li>
                    <div className={Style.icons}>
                        <img src="/img/SoftwareIcons/figma.png" alt="Figma" />
                        <img src="/img/SoftwareIcons/Marvel.png" alt="Marvel" />
                        <img src="/img/SoftwareIcons/Miro.png" alt="Miro" />
                        <img src="/img/SoftwareIcons/xd.png" alt="Xd" />
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}