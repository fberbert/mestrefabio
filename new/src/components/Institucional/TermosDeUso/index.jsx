import { Link } from 'react-router-dom'

const TermosDeUso = () => (
  <div className="container">
    <div className="breadcrumbs">
      <ul className="pull-right breadcrumb">
        <li className="breadcrumb-item"> <Link to="/">Home</Link> </li>
        <li className="active breadcrumb-item"> Termos de uso</li>
      </ul>
    </div>

    <div className="headline"><h2>Termos de uso</h2></div>

    <div>
      <h1>Pirataria e casos ilegais</h1>

      Viva o Linux é contra a pirataria.
      <br/><br/>
      O usuário solicitando ajuda com software se compromete a não usar uma versão
      pirata. Também é proibido aos membros fornecer ou pedir qualquer ajuda sobre
      como obter soluções alternativas para burlar proteções implementadas por outros
      sites ou fabricantes de software.
      <br/><br/>

      Por exemplo, o YouTube não permite que façam download de seus vídeos, tal atividade
      é considerada pirataria (download de conteúdo sem a permissão do detentor de seus
      direitos). Logo qualquer tópico sobre o assunto é expressamente proibido.
      <br/><br/>

      Outros casos ilegais (como pornografia, racismo ou pedofilia) também são proibidos.
      <br/><br/>

      <h1>Responsabilidades</h1>

      Mesmo participando ativamente na gestão de qualidade do conteúdo publicado no site,
      o Viva o Linux não se responsabiliza por qualquer dano gerado ao seu computador ao
      executar comandos ou rotinas aqui sugeridas.
      <br/><br/>

      <h1>Conteúdo publicado</h1>

      Qualquer um que tentar postar conteúdo malicioso no site (instaladores ou malwares)
      está sujeito a banimento permanente sem aviso prévio.
      <br/><br/>
      Ao postar conteúdo no site, você concorda que ele está licenciado sob
      a <a href="http://www.gnu.org/licenses/gpl-3.0.html" target="_blank" rel="noreferrer">GNU General Public License v3</a>, a menos que seja explicitamente especificado por você.
      <br/><br/>
      A equipe do Viva o Linux se reserva o direito de excluir qualquer conteúdo no site.
      <br/><br/>

      <h1>Educação e cortesia</h1>

      O conteúdo do Viva o Linux é 100% produzido pela comunidade, com base voluntária. Os
      membros do site estão dispostos a auxiliar os demais usuários em seu tempo livre, por
      isso é possível que você nem sempre obtenha suas respostas imediatamente (ou até mesmo
      nem obtenha resposta).
      <br/><br/>
      Consequentemente, é desaconselhável o lançamento de um &quot;up&quot; em um problema dentro de
      24 horas após o envio da última mensagem.
      <br/><br/>
      Você deve respeitar regras básicas de educação.  &quot;Olá&quot; no início do assunto e um
      agradecimento ao ser respondido fomenta a boa vontade de nossos membros em ajudá-lo.
      <br/><br/>
      Insultos são proibidos no site.
      <br/><br/>
      Se você sanou sua dúvida ou resolveu um problema a partir de um tópico criado, é
      extremamente recomendável que acesse o tópico e marque-o como &quot;RESOLVIDO&quot;. E mais
      recomendável ainda que você eleja como melhor resposta a que mais lhe ajudou.
      <br/><br/>

      <h1>Antes de postar</h1>

      Você deve fazer uma pesquisa antes de pedir ajuda. Por exemplo, você deve garantir
      que não há nenhum outro tópico (solucionado) sobre o problema antes de postar.
      <br/><br/>

      <h1>Divulgação de eventos e cursos</h1>

      Divulgação de eventos de tecnologia e cursos são permitidos. Certifique-se de divulgar
      o curso apenas uma vez. O flooding de tópicos em diversas comunidades não é permitido.
    </div>

  </div>
)

export default TermosDeUso
