import css from "./Contact.module.css";

export default function Contact({ name, number }) {
  return (
    <div className={css.container}>
      <div className={css.wrap}>
        <p className={css.text}>{name}</p>
      </div>
      <div className={css.wrap}>
        <p className={css.text}>{number}</p>
      </div>
      <button className={css.button}>Delete</button>
    </div>
  );
}
