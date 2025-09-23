import { fireEvent, render, screen } from '@testing-library/react';
import Button from './Button';


const createProps = (values: any) => {
  return {
    title: values?.title || 'test',
    onClick: values?.onChange || jest.fn(),
    id: 'testId',
  };
};

it('should properly display title', () => {
  const props = createProps({});
  render(<Button {...props} />);

  const title = screen.getByText('test');

  expect(title).toBeInTheDocument();
});

it('should call onClick handler on click event', () => {
  const props = createProps({ onClick: jest.fn() });
  render(<Button {...props} />);

  const button = screen.getByTestId('testId');
  fireEvent.click(button);

  expect(button).toBeInTheDocument();
  expect(props.onClick).toHaveBeenCalledTimes(1);
});
