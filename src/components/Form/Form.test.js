import { render, screen, fireEvent } from '@testing-library/react';
import Form from './Form';

describe('name and password have no initial values', () => {
  test('name has no initial values', () => {
    render(<Form isShow />);
    const name = screen.getByLabelText(/name/i);
    expect(name).toHaveValue('');
  });

  test('password has no initial values', () => {
    render(<Form isShow />);
    const password = screen.getByLabelText(/password/i);
    expect(password).toHaveValue('');
  });
});

// describe('<LoginForm />', () => {
//   it('renders email input', () => {
//     const { getByPlaceholderText } = render(
//       <LoginForm onSubmit={() => null} />
//     );
//     const email = getByPlaceholderText(/@test.com$/);
//     expect(email).toBeInTheDocument();
//   });

//   it('password input has not value', () => {
//     const { getByLabelText } = render(<LoginForm onSubmit={() => null} />);
//     const password = getByLabelText('비밀번호');
//     expect(password).toHaveValue('');
//   });

//   it('enables button when both email and password are entered', () => {
//     const { getByText, getByLabelText } = render(
//       <LoginForm onSubmit={() => null} />
//     );

//     const button = getByText('로그인');
//     const email = getByLabelText('이메일');
//     const password = getByLabelText('비밀번호');

//     expect(button).toBeDisabled();

//     fireEvent.change(email, { target: { value: 'user@test.com' } });
//     fireEvent.change(password, { target: { value: 'Test1234' } });

//     expect(button).toBeEnabled();
//   });

//   it('submits form when buttion is clicked', () => {
//     const obSubmit = jest.fn();
//     const { getByText, getByLabelText } = render(
//       <LoginForm onSubmit={obSubmit} />
//     );

//     const button = getByText('로그인');
//     const email = getByLabelText('이메일');
//     const password = getByLabelText('비밀번호');

//     fireEvent.change(email, { target: { value: 'user@test.com' } });
//     fireEvent.change(password, { target: { value: 'Test1234' } });

//     fireEvent.click(button);

//     expect(obSubmit).toHaveBeenCalledTimes(1);
//   });
// });
