export default function Contato() {
  return (
    <section className="container content">
      <h1>Contato</h1>
      <p>Telefone: (xx) xxxx-xxxx</p>
      <p>E-mail: contato@acierj.org (exemplo)</p>
      <form className="contact-form" aria-label="Formulário de contato">
        <label>
          Nome
          <input name="nome" type="text" />
        </label>
        <label>
          E-mail
          <input name="email" type="email" />
        </label>
        <label>
          Mensagem
          <textarea name="mensagem" rows={4}></textarea>
        </label>
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
}
