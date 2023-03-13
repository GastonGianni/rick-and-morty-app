import Card from './Card';

export default function Cards(props) {
  const { characters } = props;
  return (
    <div className="flex gap-5 mt-3 items-center justify-center">
      {characters.map((character) => (
        <Card
          key={character.id}
          name={character.name}
          species={character.species}
          gender={character.gender}
          image={character.image}
          onClose={() => window.alert('Emulamos que se cierra la card')}
        ></Card>
      ))}
    </div>
  );
}
