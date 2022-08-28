import { Link } from 'react-router-dom'

const Privacidade = () => (
  <div className="container">
    <div className="breadcrumbs">
      <ul className="pull-right breadcrumb">
        <li className="breadcrumb-item"> <Link to="/">Home</Link> </li>
        <li className="active breadcrumb-item"> Política de privacidade</li>
      </ul>
    </div>

    <div className="headline"><h2>Política de privacidade</h2></div>

    <div>
      <h1>Dados de sua conta</h1>
      Quando você cria uma conta uma página pública com alguns de seus dados
      é criada. Veja um <Link to="/~fabio">exemplo de página de perfil</Link>.
      Ao efetuar login, no <Link to="/minhaConta">painel de controle</Link> da
      sua conta é possível evitar com que seus dados sejam indexados em serviços
      de busca, basta clicar na opção &quot;<strong>Preferências</strong>&quot;.
      <br/><br/>
      Se você prefere ainda maior privacidade, nada o impede de se registrar usando
      apenas seu primeiro nome ou algum apelido.
      <br/><br/>
      Não usamos seu endereço de e-mail para fins comerciais. Todos os e-mails enviados
      pelo VOL são de notificações internas quanto às suas colaborações, como por exemplo,
      um aviso de que um tópico seu foi respondido. É possível cancelar o recebimento das
      notificações a qualquer momento usando o link de subscrição situado no final de cada
      e-mail enviado.
      <br/><br/>
      Em seu <Link to="/minhaConta">painel de controle</Link> também é possível remover sua
      conta a qualquer momento, bastando apenas confirmar tua senha.
      <br/><br/>

      <h1>Política de privacidade</h1>

      Todas as suas informações pessoais recolhidas serão usadas para o ajudar a tornar a
      sua visita no nosso site o mais produtiva e agradável possível.
      <br/><br/>
      A garantia da confidencialidade dos dados pessoais dos utilizadores do nosso site é
      importante para o Viva o Linux.
      <br/><br/>

      O uso do Viva o Linux pressupõe a aceitação deste acordo de privacidade. A equipe do
      Viva o Linux reserva-se ao direito de alterar este acordo sem aviso prévio. Deste modo,
      recomendamos que consulte a nossa política de privacidade com regularidade de forma a
      estar sempre atualizado.
      <br/><br/>

      <h1>Os anúncios</h1>

      Tal como muitos outros websites, nossos anúncios são fornecidos por terceiros, como
      o <strong>Google Adsense</strong> e <strong>AdChoices</strong>. Tais programas fazem
      um tracking de seus interesses através do uso de cookies.
      <br/><br/>

      Com o uso destes cookies o Google pode exibir anúncios com base nas visitas que o leitor
      fez a outros websites na Internet.
      <br/><br/>

      <h1>Links externos</h1>

      O Viva o Linux possui links para outros sites, os quais, a nosso ver, podem conter
      informações/ferramentas úteis para os nossos visitantes. A nossa política de privacidade
      não é aplicada a sites de terceiros. Não nos responsabilizamos pela política de privacidade
      ou conteúdo presente nestes mesmos sites.
    </div>
  </div>
)

export default Privacidade
