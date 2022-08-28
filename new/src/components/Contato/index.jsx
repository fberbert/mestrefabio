import emailjs from '@emailjs/browser'

const handleSubmit = (e) => {
  e.preventDefault()
  emailjs.sendForm(
    'service_x38yr29',
    'template_uff42ag',
    e.target,
    'eA2ej4AvnrwwLwiym'
  )
  .then( res => {
    console.log('email enviado')
  })

}

const Contato = () => (
  <div>
    <section id="contato" className="">

    <div className="content-wrap">
      <div className="container">

        <div className="row gutter-40 col-mb-80">
          <div className="postcontent col-lg-12">

            <h3>Entre em contato</h3>

            <div className="form-widget">

              <div className="form-result"></div>

                <form className="mb-0" id="template-contactform" name="template-contactform" method="post" noValidate="novalidate" onSubmit={handleSubmit}>

                  <div className="form-process">
                    <div className="css3-spinner">
                      <div className="css3-spinner-scaler"></div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-4 form-group">
                      <label htmlFor="nome">Nome <small>*</small></label>
                      <input type="text" id="nome" name="nome" className="sm-form-control" />
                    </div>

                    <div className="col-md-4 form-group">
                      <label htmlFor="email">Email <small>*</small></label>
                      <input type="email" id="email" name="email" className="sm-form-control" />
                    </div>

                    <div className="col-md-4 form-group">
                      <label htmlFor="telefone">Telefone</label>
                      <input type="text" id="telefone" name="telefone" className="sm-form-control" />
                    </div>

                  <div className="w-100"></div>

                  <div className="col-md-12 form-group">
                    <label htmlFor="assunto">Assunto <small>*</small></label>
                    <input type="text" id="assunto" name="assunto" className="sm-form-control" />
                  </div>

                  <div className="w-100"></div>

                  <div className="col-12 form-group">
                    <label htmlFor="mensagem">Mensagem <small>*</small></label>
                    <textarea className="sm-form-control" id="mensagem" name="mensagem" rows="6" cols="30"></textarea>
                  </div>

                  <div className="col-12 form-group d-none">
                    <input type="text" id="template-contactform-botcheck" name="template-contactform-botcheck" className="sm-form-control" />
                  </div>

                  <div className="col-12 form-group">
                    <button className="button button-3d m-0" type="submit" id="template-contactform-submit" name="template-contactform-submit" value="submit">Enviar mensagem</button>
                  </div>
                </div>

                <input type="hidden" name="prefix" value="template-contactform-" />

              </form>
            </div>

          </div>

        </div>

      </div>
    </div>
    </section>
  </div>
)

export default Contato
