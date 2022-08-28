import { Link } from 'react-router-dom'

const QuemSomos = () => (
  <div className="container">
    <div className="breadcrumbs">
      <ul className="pull-right breadcrumb">
        <li className="breadcrumb-item"> <Link to="/">Home</Link> </li>
        <li className="active breadcrumb-item"> Quem Somos</li>
      </ul>
    </div>

    <div className="headline"><h2>Quem Somos</h2></div>

    <div>
      <blockquote>

        <span className="float-start p-3"><img src="//img.vivaolinux.com.br/imagens/vux-medium.png" width="200" height="199" alt="Mascote do Viva o Linux" /><br/><em><small>Vux - mascote do Viva o Linux</small></em></span>

        <strong>Viva o Linux</strong>, ou simplesmente <strong>VOL</strong>, é uma comunidade
        livre composta de aficionados por tecnologia da informação. Os principais temas
        abordados no site são: GNU/Linux, Software Livre, Redes de Computadores e Linguagens
        de Programação.
        <br/><br/>
        O site não possui equipe de produção de conteúdo. Quem cria os artigos, dicas, scripts
        e demais publicações são seus próprios usuários e frequentadores.
        <br/><br/>
        O VOL possui sim, uma capacitada <Link to="/equipe">equipe de moderadores</Link> cujo
        papel principal é filtrar o conteúdo produzido pelos membros. Todos os
        artigos recebidos passam por filtragem de qualidade antes de sua publicação,
        que consiste em verificação de autoria (contra plágio), qualidade de português e
        veracidade técnica. Em seguida o conteúdo passa por formatação HTML com nossos
        próprios padrões de notação, a fim de manter uma didática homogênea e finalmente
        é publicado, se tornando acessível ao público.
        <br/><br/>
        A primeira versão oficial do site foi lançada em novembro de 2002 como projeto
        pessoal de <Link to="/~fabio">Fábio Berbert de Paula</Link> e até hoje o site é mantido
        por ele como pessoa física.
        <br/><br/>
        Todo o conteúdo do site é distribuído sob os termos da licença
        pública <a href="http://www.gnu.org/licenses/gpl-3.0.html" target="_blank" rel="noreferrer">GNU General Public License v3</a>.
        <br/><br/>
        Atualmente o Viva o Linux está consolidado como a maior comunidade de usuários
        GNU/Linux da América Latina!
      </blockquote>
      <br/><br/>
    </div>

  </div>
)

export default QuemSomos
