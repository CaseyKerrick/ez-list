import { fireEvent, render, screen } from '@testing-library/react';
import Toggle from './Toggle';


const createProps = (values: any) => {
  return {
    title: values?.title || 'test',
    required: !!values?.required,
    disabled: !!values?.disabled,
    value: !!values.value,
    onChange: values?.onChange || jest.fn(),
    id: values?.id || 'test',
  };
};

it('should display an asterisk when Toggle is required', () => {
  const props = createProps({ required: true });
  render(<Toggle {...props} />);

  const title = screen.getByText('test*');

  expect(title).toBeInTheDocument();
});

it('should not display an asterisk when Toggle is not required', () => {
  const props = createProps({ required: false });
  render(<Toggle {...props} />);

  const title = screen.getByText('test');

  expect(title).toBeInTheDocument();
});

it('should allow clicking when Toggle is enabled', () => {
  const props = createProps({ disabled: false, onChange: jest.fn(), value: false });
  render(<Toggle {...props} />);

  const checkbox = screen.getByTestId('test');
  fireEvent.click(checkbox);

  expect(checkbox).toBeInTheDocument();
  expect(props.onChange).toHaveBeenCalledTimes(1);
  expect(checkbox).toBeChecked();
});

it('should not allow clicking when Toggle is disabled', () => {
  const props = createProps({ disabled: true, onChange: jest.fn(), value: true });
  render(<Toggle {...props} />);

  const checkbox = screen.getByTestId('test');
  fireEvent.click(checkbox);

  expect(checkbox).toBeInTheDocument();
  expect(props.onChange).toHaveBeenCalledTimes(0);
  expect(checkbox).toBeChecked();
});
