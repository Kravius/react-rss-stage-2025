// import { render, screen, fireEvent } from '@testing-library/react';
// import { describe, expect, it, vi, beforeEach } from 'vitest';
// import PeopleList from './PeopleList';
// import { BrowserRouter } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import { configureStore } from '@reduxjs/toolkit';
// import { peopleSlice } from './people.slice';

// // Mock data
// const mockPeople = [
//   { id: '1', name: 'Luke Skywalker', img: 'luke.jpg' },
//   { id: '2', name: 'Darth Vader', img: 'vader.jpg' },
// ];

// // Mock store setup
// const createTestStore = () =>
//   configureStore({
//     reducer: {
//       people: peopleSlice.reducer,
//     },
//   });

// // Mocks
// const mockDispatch = vi.fn();
// vi.mock('../../store', () => ({
//   useAppDispatch: () => mockDispatch,
//   useAppSelector: () => ({ saveEntities: {} }),
// }));

// vi.mock('../../services/ThemeContex', () => ({
//   useTheme: () => ({ isDark: false }),
// }));

// // Test utils
// const renderWithProviders = (ui: React.ReactElement) => {
//   const testStore = createTestStore();
//   return render(
//     <Provider store={testStore}>
//       <BrowserRouter>{ui}</BrowserRouter>
//     </Provider>
//   );
// };

// describe('PeopleList Component', () => {
//   beforeEach(() => {
//     vi.clearAllMocks();
//   });

//   describe('Rendering', () => {
//     it('should render empty list when no people provided', () => {
//       renderWithProviders(<PeopleList people={[]} />);
//       const container = screen.getByTestId('list-container');
//       const list = container.querySelector('ul');
//       expect(list).toBeInTheDocument();
//       expect(list?.children.length).toBe(0);
//     });

//     it('should render all people in the list', () => {
//       renderWithProviders(<PeopleList people={mockPeople} />);
//       mockPeople.forEach((person) => {
//         expect(screen.getByText(person.name)).toBeInTheDocument();
//       });
//     });

//     it('should apply correct CSS classes', () => {
//       renderWithProviders(<PeopleList people={mockPeople} />);
//       const items = screen.getAllByRole('listitem');
//       items.forEach((item) => {
//         expect(item).toHaveClass('people_list');
//       });
//     });
//   });

//   describe('Theme Support', () => {
//     it('should apply light theme by default', () => {
//       renderWithProviders(<PeopleList people={mockPeople} />);
//       const container = screen.getByTestId('list-container');
//       expect(container).not.toHaveClass('dark');
//     });

//       renderWithProviders(<PeopleList people={mockPeople} />);
//       const container = screen.getByTestId('list-container');
//       expect(container).toHaveClass('dark');
//     });
//   });

//   describe('Checkbox Interactions', () => {
//     it('should dispatch putPersonToStored when checkbox is checked', () => {
//       renderWithProviders(<PeopleList people={mockPeople} />);
//       const checkbox = screen.getByLabelText(mockPeople[0].name);

//       fireEvent.click(checkbox);

//       expect(mockDispatch).toHaveBeenCalledWith(
//         expect.objectContaining({
//           type: 'people/putPersonToStored',
//           payload: expect.objectContaining({
//             id: mockPeople[0].id,
//             person: mockPeople[0],
//           }),
//         })
//       );
//     });

//     it('should dispatch removePersonFromStored when checkbox is unchecked', () => {
//       renderWithProviders(<PeopleList people={mockPeople} />);
//       const checkbox = screen.getByLabelText(mockPeople[0].name);

//       // Check and uncheck
//       fireEvent.click(checkbox);
//       fireEvent.click(checkbox);

//       expect(mockDispatch).toHaveBeenLastCalledWith(
//         expect.objectContaining({
//           type: 'people/removePersonFromStored',
//           payload: { id: mockPeople[0].id },
//         })
//       );
//     });

//     it('should show checked state for stored people', () => {
//       vi.mocked(vi.importActual('../../store')).mockImplementation(() => ({
//         useAppDispatch: () => mockDispatch,
//         useAppSelector: () => ({
//           saveEntities: { '1': mockPeople[0] },
//         }),
//       }));

//       renderWithProviders(<PeopleList people={mockPeople} />);
//       const checkbox = screen.getByLabelText(mockPeople[0].name);
//       expect(checkbox).toBeChecked();
//     });
//   });

//   describe('Navigation', () => {
//     it('should preserve search params in links', () => {
//       window.history.pushState({}, '', '?search=test');

//       renderWithProviders(<PeopleList people={mockPeople} />);

//       const links = screen.getAllByRole('link');
//       links.forEach((link) => {
//         expect(link.href).toContain('search=test');
//       });
//     });

//     it('should have correct navigation paths', () => {
//       renderWithProviders(<PeopleList people={mockPeople} />);

//       mockPeople.forEach((person) => {
//         const link = screen.getByText(person.name).closest('a');
//         expect(link?.getAttribute('href')).toBe(`/people/${person.id}`);
//       });
//     });
//   });
// });
