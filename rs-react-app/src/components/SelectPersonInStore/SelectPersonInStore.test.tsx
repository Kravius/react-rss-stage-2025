// // SelectPersonInStore.test.tsx
// import { render, screen, fireEvent } from '@testing-library/react';
// import { Provider } from 'react-redux';
// import { store } from '@store/store'; // Предположим, что у вас есть store
// import SelectPersonInStore from './SelectPersonInStore'; // Путь к компоненту
// import { describe, expect, it, Mock, vi } from 'vitest';

// // Мокаем useAppSelector и useAppDispatch
// vi.mock('@store/store', () => ({
//   useAppDispatch: vi.fn(),
//   useAppSelector: vi.fn(),
// }));

// describe('SelectPersonInStore', () => {
//   it('renders correctly when there are selected people', () => {
//     // Мокаем selected people
//     (useAppSelector as Mock).mockReturnValue({
//       saveEntities: {
//         1: { id: 1, name: 'Person 1' },
//         2: { id: 2, name: 'Person 2' },
//       },
//     });

//     render(
//       <Provider store={store}>
//         <SelectPersonInStore />
//       </Provider>
//     );

//     // Проверяем, что отображаются кнопки
//     expect(screen.getByText('Download')).toBeInTheDocument();
//     expect(screen.getByText('Cancel All')).toBeInTheDocument();
//   });

//   it('alerts if there are no selected people for download', () => {
//     // Мокаем пустое хранилище
//     useAppSelector.mockReturnValue({ saveEntities: {} });

//     const alertSpy = vi.fn();

//     global.alert = alertSpy; // Мокаем alert

//     render(
//       <Provider store={store}>
//         <SelectPersonInStore />
//       </Provider>
//     );

//     // Проверяем, что отображается кнопка и происходит alert
//     fireEvent.click(screen.getByText('Download'));

//     expect(alertSpy).toHaveBeenCalledWith(
//       'Нет выбранных людей для скачивания!'
//     );
//   });

//   it('calls removeAllPersonFromStored when cancel all button is clicked', () => {
//     const dispatchMock = vi.fn();

//     // Мокаем dispatch
//     useAppDispatch.mockReturnValue(dispatchMock);

//     useAppSelector.mockReturnValue({
//       saveEntities: {
//         1: { id: 1, name: 'Person 1' },
//       },
//     });

//     render(
//       <Provider store={store}>
//         <SelectPersonInStore />
//       </Provider>
//     );

//     // Проверяем, что кнопка Cancel All вызывает dispatch
//     fireEvent.click(screen.getByText('Cancel All'));

//     expect(dispatchMock).toHaveBeenCalledWith(removeAllPersonFromStored());
//   });
// });
