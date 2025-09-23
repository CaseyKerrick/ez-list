import { fireEvent, render, screen } from '@testing-library/react';
import Checklist from './Checklist';


const createTestProps = (values: any) => {
  return {
    title: values.title || 'testTitle',
    checklistItems: values.checklistItems || ['a', 'b', 'c'],
    value: values.value || ['a'],
    onChange: values.onChange || jest.fn(),
    required: !!values.required,
    disabled: !!values.disabled,
    id: values.id || 'testId',
  };
};

it('should display an asterisk when Checklist is required', () => {
  const props = createTestProps({ required: true });
  render(<Checklist {...props} />);
  const title = screen.getByText('testTitle*');

  expect(title).toBeInTheDocument();
});

it('should not display an asterisk when Checklist is not required', () => {
  const props = createTestProps({ required: false });
  render(<Checklist {...props} />);
  const title = screen.getByText('testTitle');

  expect(title).toBeInTheDocument();
});

it('should display checked items', () => {
  const props = createTestProps({ value: ['a', 'c'] });
  render(<Checklist {...props} />);

  const a = screen.getByTestId(`${props.id}_a`);
  const b = screen.getByTestId(`${props.id}_b`);
  const c = screen.getByTestId(`${props.id}_c`);

  expect(a).toBeChecked();
  expect(b).not.toBeChecked();
  expect(c).toBeChecked();
});

it('should call onChange with the right parameters when Checklist item is clicked', () => {
  const props = createTestProps({ value: ['a'], onChange: jest.fn() });
  render(<Checklist {...props} />);
  const bSpan = screen.getByTestId(`${props.id}_span_b`);

  fireEvent.click(bSpan);

  expect(props.onChange).toHaveBeenCalledWith(['a', 'b']);
});

it('should not call onChange when Checklist is disabled', () => {
  const props = createTestProps({ disabled: true, onChange: jest.fn() });
  render(<Checklist {...props} />);
  const bSpan = screen.getByTestId(`${props.id}_span_b`);

  fireEvent.click(bSpan);

  expect(props.onChange).toHaveBeenCalledTimes(0);
});
