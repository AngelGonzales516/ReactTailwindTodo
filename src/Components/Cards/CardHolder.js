import './Cards.css';
const CardHolder = ({children}) => {

  return (
    <section className="CardHolder">
      {children}
    </section>
  );
}

export default CardHolder;
