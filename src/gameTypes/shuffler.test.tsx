import renderer from 'react-test-renderer';
import Shuffler from './shuffler';
import CardAndPlayerInput from './shufflerComponents/CardAndPlayerInput';
import CardPeeker from './shufflerComponents/cardPeeker';


it('Shuffler Component is rendered correctly', () => {
  const tree = renderer
    .create(<Shuffler />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('CardAndPlayerInput component rendered correctly', () => {
  const setCardsMock = jest.fn();
  const setPlayersMock = jest.fn();

  const tree = renderer
    .create(
      <CardAndPlayerInput setCards={setCardsMock} setPlayers={setPlayersMock} />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

const mockTogglePeeker = jest.fn();

const mockDeck = [
  { value: 'A', suit: 'Hearts', rank: 1 },
  { value: '2', suit: 'Diamonds', rank: 2 },
  
];

it('renders correctly', () => {
  const tree = renderer
    .create(<CardPeeker deck={mockDeck} togglePeeker={mockTogglePeeker} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});