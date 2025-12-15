import { useState } from 'react';
import { useForm } from '@formspree/react';
import PageLayout from '../components/PageLayout';
import Footer from '../components/Footer';
import Modal from '../components/Modal';
import { triggerConfetti } from '../utils/confetti';
import styles from '../styles/PageLayout.module.css';
import modalStyles from '../styles/Modal.module.css';
import data from '../data/data.json';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    type: 'success' | 'error' | null;
    title: string;
    message: string;
    details?: string;
  }>({
    isOpen: false,
    type: null,
    title: '',
    message: ''
  });

  const [state, handleSubmit] = useForm("mrbnyvlp");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const closeModal = () => {
    setModalState(prev => ({ ...prev, isOpen: false }));
    console.log(modalState.isOpen)
  };

  const handleFormSubmit = () => {
    if (state.succeeded) {
      setModalState({
        isOpen: true,
        type: 'success',
        title: 'Success!',
        message: '🎉 Thank you! Your message has been sent successfully! You will be contacted soon.'
      });
      triggerConfetti();
      setFormData({ name: '', email: '', subject: '', message: '' });
    } else if (state) {
      setModalState({
        isOpen: false,
        type: 'error',
        title: 'Error Sending Message',
        message: '⚠️ Failed to send message. Please try emailing directly.',
        details: JSON.stringify(state.errors, null, 2)
      });
    }
    console.log(state.succeeded)
  }

  return (
    <PageLayout>
      <div className={styles.contentWrapper}>
        <h1 className={styles.pageTitle}>Contact Me</h1>

        <div className={styles.contactLayout}>
          {/* Información de contacto */}
          <div className={styles.contactInfo}>
            <h2 className={styles.sectionTitle}>Connect with me</h2>
            <p className={styles.contactDescription}>
              I'm always interested in new opportunities, collaborations, and discussions about
              environmental engineering science. Feel free to reach out!
            </p>

            <div className={styles.contactDetails}>
              <div className={styles.contactItem}>
                <span className={styles.contactIcon}>📧</span>
                <div>
                  <h3 className={styles.contactLabel}>Email</h3>
                  <p className={styles.contactValue}>
                    <a href={`mailto:${data.contact.email}`}>{data.contact.email}</a>
                  </p>
                </div>
              </div>

              <div className={styles.contactItem}>
                <span className={styles.contactIcon}>📱</span>
                <div>
                  <h3 className={styles.contactLabel}>Phone</h3>
                  <p className={styles.contactValue}>
                    <a href={`tel:${data.contact.phone}`}>{data.contact.phone}</a>
                  </p>
                </div>
              </div>

              <div className={styles.contactItem}>
                <span className={styles.contactIcon}>📍</span>
                <div>
                  <h3 className={styles.contactLabel}>Location</h3>
                  <p className={styles.contactValue}>{data.contact.location}</p>
                </div>
              </div>

              <div className={styles.contactItem}>
                <span className={styles.contactIcon}>🔗</span>
                <div>
                  <h3 className={styles.contactLabel}>LinkedIn</h3>
                  <p className={styles.contactValue}>
                    <a href="https://www.linkedin.com/in/nicarao-delgado-458771106/" target="_blank" rel="noopener noreferrer">
                      {data.contact.linkedin}
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Formulario */}
          <div className={styles.contactForm}>
            <h2 className={styles.sectionTitle}>Send a Message</h2>

            <form onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.formLabel}>Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={styles.formInput}
                  required
                  disabled={state.submitting}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.formLabel}>Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={styles.formInput}
                  required
                  disabled={state.submitting}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="subject" className={styles.formLabel}>Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={styles.formInput}
                  required
                  disabled={state.submitting}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message" className={styles.formLabel}>Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={styles.formTextarea}
                  rows={6}
                  required
                  disabled={state.submitting}
                />
              </div>

              <button type="submit" className={styles.submitButton} disabled={state.submitting} onClick={handleFormSubmit}>
                {state.submitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>

      <Footer />

      {/* Modal */}
      <Modal isOpen={modalState.isOpen} onClose={closeModal}>
        <div style={{ textAlign: 'center' }}>
          <h1
            className={modalStyles.modalTitle}
            style={{
              color: modalState.type === 'error' ? '#ef4444' : '#10b981',
              marginBottom: '1rem'
            }}
          >
            {modalState.title}
          </h1>

          <p className={modalStyles.modalDescription}>
            {modalState.message}
          </p>

          {modalState.type === 'error' && modalState.details && (
            <div
              style={{
                marginTop: '2rem',
                padding: '1rem',
                background: '#f3f4f6',
                borderRadius: '8px',
                textAlign: 'left',
                overflow: 'auto',
                maxHeight: '200px'
              }}
            >
              <p style={{ fontWeight: 'bold', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Technical Details:</p>
              <pre style={{ fontSize: '0.8rem', whiteSpace: 'pre-wrap', wordBreak: 'break-all' }}>
                {modalState.details}
              </pre>
            </div>
          )}
        </div>
      </Modal>
    </PageLayout>
  );
}
