export default function CountriesItem({ item }) {
  return (
    <li>
      <img src={item.flags.png} alt={item.flags.alt} />
      <h1>{item.name.common}</h1>
    </li>
  );
}
