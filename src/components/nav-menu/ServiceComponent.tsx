import styles from '../../styles/services.module.css'

export default function ServiceComponent() {
  return (
    <div className={styles.servicesBox}>
      <div className={styles.serviceTab}>Environmental and Industrial Biotechnology</div>
      <div className={styles.serviceTab}>Water and Wastewater Treatment</div>
      <div className={styles.serviceTab}>Soil and Sediment Bioremediation</div>
      <div className={styles.serviceTab}>Environmental Modeling and Analysis</div>
      <div className={styles.serviceTab}>Environmental Impact Assessment and Disaster Risk Management</div>
      <div className={styles.serviceTab}>Water Resources Management</div>
    </div>
  )
}
