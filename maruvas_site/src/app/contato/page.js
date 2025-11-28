'use client';
import { useState } from 'react';
import styles from './Contato.module.css';

export default function ContatoPage() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    assunto: '',
    mensagem: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implementar envio do formulário
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    setFormData({
      nome: '',
      email: '',
      telefone: '',
      assunto: '',
      mensagem: ''
    });
  };

  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <h1>Entre em Contato</h1>
            <p>Estamos aqui para ajudar! Fale conosco</p>
          </div>
        </div>
      </section>

      <section className={styles.content}>
        <div className="container">
          <div className={styles.grid}>
            <div className={styles.contactInfo}>
              <h2>Informações de Contato</h2>
              
              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div className={styles.contactText}>
                  <h3>Endereço</h3>
                  <p>Rua dos Brownies, 123<br />Jardim Chocolate<br />São Paulo - SP, 01234-567</p>
                </div>
              </div>

              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>
                  <i className="fas fa-phone"></i>
                </div>
                <div className={styles.contactText}>
                  <h3>Telefone</h3>
                  <p>(11) 9999-9999</p>
                  <p>(11) 8888-8888 (WhatsApp)</p>
                </div>
              </div>

              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>
                  <i className="fas fa-envelope"></i>
                </div>
                <div className={styles.contactText}>
                  <h3>Email</h3>
                  <p>contato@maruvas.com.br</p>
                  <p>vendas@maruvas.com.br</p>
                </div>
              </div>

              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>
                  <i className="fas fa-clock"></i>
                </div>
                <div className={styles.contactText}>
                  <h3>Horário de Funcionamento</h3>
                  <p>Segunda a Sexta: 9h às 18h</p>
                  <p>Sábado: 9h às 14h</p>
                  <p>Domingo: Fechado</p>
                </div>
              </div>

              <div className={styles.socialLinks}>
                <h3>Siga-nos</h3>
                <div className={styles.socialIcons}>
                  <a href="#" aria-label="Instagram">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="#" aria-label="Facebook">
                    <i className="fab fa-facebook"></i>
                  </a>
                  <a href="#" aria-label="WhatsApp">
                    <i className="fab fa-whatsapp"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className={styles.contactForm}>
              <h2>Envie uma Mensagem</h2>
              <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="nome">Nome Completo *</label>
                    <input
                      type="text"
                      id="nome"
                      name="nome"
                      value={formData.nome}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className={styles.formGroup}>
                    <label htmlFor="email">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="telefone">Telefone</label>
                    <input
                      type="tel"
                      id="telefone"
                      name="telefone"
                      value={formData.telefone}
                      onChange={handleChange}
                    />
                  </div>
                  
                  <div className={styles.formGroup}>
                    <label htmlFor="assunto">Assunto *</label>
                    <select
                      id="assunto"
                      name="assunto"
                      value={formData.assunto}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Selecione um assunto</option>
                      <option value="duvida">Dúvida</option>
                      <option value="pedido">Pedido Especial</option>
                      <option value="reclamacao">Reclamação</option>
                      <option value="sugestao">Sugestão</option>
                      <option value="outro">Outro</option>
                    </select>
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="mensagem">Mensagem *</label>
                  <textarea
                    id="mensagem"
                    name="mensagem"
                    rows="6"
                    value={formData.mensagem}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <button type="submit" className={`btn ${styles.submitBtn}`}>
                  Enviar Mensagem
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}