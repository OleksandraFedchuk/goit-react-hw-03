export default function Contact({ id, name, number }) {
  return (
    <li>
      <p>{id}</p>
      <p>Name:{name}</p>
      <p>Number:{number}</p>
    </li>
  );
}
