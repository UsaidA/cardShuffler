import renderer from 'react-test-renderer';
import Navbar from './navBar';
import PlayingCard from './Playingcard';

it('Navbar Component is rendered correctly', () => {
  const tree = renderer
    .create(<Navbar />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly', () => {
    const tree = renderer
      .create(<PlayingCard cardNumber="A" cardSuit="Hearts" />)
      .toJSON();
  
    expect(tree).toMatchSnapshot();
  });