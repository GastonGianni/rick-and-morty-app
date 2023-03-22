import Card from './Card';

export default function Cards(props) {
  const { characters } = props;
  return (
    <section>
      {characters.length < 1 && <h1 className="text-center text-2xl font-semibold mt-4 text-violet-500">BUSCA UN PERSONAJE POR ID</h1>}
      <div className="flex gap-5 mt-3 items-center justify-center flex-wrap">
        {characters.map((character) => (
          <Card
            id={character.id}
            key={character.id}
            name={character.name}
            species={character.species}
            gender={character.gender}
            image={character.image}
            onClose={props.onClose}
          ></Card>
        ))}
      </div>
    </section>
  );
}
