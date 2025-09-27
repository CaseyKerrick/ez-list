import { fireEvent, render, screen } from '@testing-library/react';
import Button from './Button';


const createTestProps = (values: any) => {
  return {
    title: values?.title || 'testTitle',
    onClick: values?.onChange || jest.fn(),
    id: 'testId',
  };
};

it('should properly display title', () => {
  const props = createTestProps({});
  render(<Button {...props} />);

  const title = screen.getByText('testTitle');

  expect(title).toBeInTheDocument();
});

it('should call onClick handler on click event', () => {
  const props = createTestProps({ onClick: jest.fn() });
  render(<Button {...props} />);

  const button = screen.getByTestId('testId');
  fireEvent.click(button);

  expect(button).toBeInTheDocument();
  expect(props.onClick).toHaveBeenCalledTimes(1);
});
