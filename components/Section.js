import styles from "./Section.module.css";

export default function Section({ id, title, children }) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className={styles.section}>
      <div className="container">
        <h2 id={`${id}-title`}>{title}</h2>
        <div className={styles.content}>{children}</div>
      </div>
    </section>
  );
}
