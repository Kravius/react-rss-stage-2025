import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom'; // Для работы с Link
import PeopleList from './PeopleList';
import { PersonToRender } from '../../layout/PeoplePage/type';

const mockPeople: PersonToRender[] = [
  { id: '1', name: 'Luke Skywalker', img: 'luke.jpg' },
  { id: '2', name: 'Darth Vader', img: 'vader.jpg' },
];

describe('PeopleList', () => {
  it('отображает указанное количество карточек', () => {
    render(
      <Router>
        <PeopleList people={mockPeople} />
      </Router>
    );

    const cards = screen.getAllByRole('listitem');
    expect(cards).toHaveLength(2);
  });

  it('каждая карточка содержит изображение и имя персонажа', () => {
    render(
      <Router>
        <PeopleList people={mockPeople} />
      </Router>
    );

    mockPeople.forEach((person) => {
      const image = screen.getByAltText(person.name);
      const name = screen.getByText(person.name);

      expect(image).toBeInTheDocument();
      expect(name).toBeInTheDocument();
    });
  });

  it('ссылки в карточках ведут на правильные URL', () => {
    render(
      <Router>
        <PeopleList people={mockPeople} />
      </Router>
    );

    mockPeople.forEach((person) => {
      const link = screen.getByRole('link', { name: person.name });
      expect(link).toHaveAttribute('href', `/people/${person.id}`);
    });
  });
});
