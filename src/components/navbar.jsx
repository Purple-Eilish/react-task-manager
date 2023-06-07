export default function Navbar(props) {
  const { siteProperties } = props;
  return (
    <nav>
      <header>
        <h2>{siteProperties.title}</h2>
      </header>
      <ul>
        <li>created by: {siteProperties.author}</li>
      </ul>
    </nav>
  );
}
