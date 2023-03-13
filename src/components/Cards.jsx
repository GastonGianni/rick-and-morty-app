import Card from './Card';

export default function Cards(props) {
  const { characters } = props;
  return characters.map((character) => (
    <Card
      key={character.id}
      name={character.name}
      species={character.species}
      gender={character.gender}
      image={character.image}
      onClose={() => window.alert('Emulamos que se cierra la card')}
    ></Card>
  ));
}
