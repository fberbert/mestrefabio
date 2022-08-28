import '../../css/Footer/Footer.css'

const Footer = () => (
  <section id="footer1">
    <footer>
      <div className="footer-push" />
      <div className="footer">
        <div className="container">

          <div className="row">
            <div className="col-md-2 md-margin-bottom-40 text-end">
              <img src="/favicon.png" width="100" className="opacity-75"/>
            </div>
            <div className="col-md-4 md-margin-bottom-40 text-end pt-3">
              Telefone: (22) 99978-0978<br/> Email: sou@mestrefabio.com
            </div>
            <div className="col-md-2 md-margin-bottom-40 text-end"></div>
            <div className="col-md-4 md-margin-bottom-40 text-start pt-3">
              2022 - MestreFabio.com<br/> Todos os direitos reservados.
            </div>
          </div>

        </div>
      </div>
    </footer>
  </section>
)

export default Footer
