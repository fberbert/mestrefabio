import { Link } from 'react-router-dom'

const Contato = () => (
  <div className="container">
    <div className="breadcrumbs">
      <ul className="pull-right breadcrumb">
        <li className="breadcrumb-item"> <Link to="/">Home</Link> </li>
        <li className="active breadcrumb-item"> Contato</li>
      </ul>
    </div>

    <div className="headline"><h2>Contato</h2></div>

    <div>
      <strong>ATEN&Ccedil;&Atilde;O:</strong> D&uacute;vidas sobre Linux? Por favor, o local para envio de suas d&uacute;vidas sobre Linux &eacute; em nossa se&ccedil;&atilde;o de <a href="/perguntas">Perguntas</a>. Caso queira enviar alguma pergunta:  <a href="/contribuir/perguntas/index.php">enviar pergunta</a>.
      <br/><br/>
      <b>Quer contribuir com o site?</b> Se quiser enviar um artigo, dica,
      screenshot ou qualquer outro tipo de conte&uacute;do para o site e
      n&atilde;o sabe como, basta clicar no menu suspenso &quot;Enviar&quot;,
      situado no topo da tela.
      <br/><br/>
    </div>
  </div>
)

export default Contato
