import { render, screen } from '@testing-library/react';
import DisplayText from './DisplayText';


const createTestProps = (values: any) => {
  return {
    title: values.title || 'testTitle',
    value: values.value || 'test content',
    parseHtml: !!values.parseHtml,
    width: values.width || 100,
    id: values.id || 'testId',
  };
};

it('should display title and content', () => {
  const props = createTestProps({});
  render(<DisplayText {...props} />);
  const title = screen.getByText('testTitle');
  const content = screen.getByText('test content');

  expect(title).toBeInTheDocument();
  expect(content).toBeInTheDocument();
});

it('should display HTML tags when parseHtml is false', () => {
  const html = '<div>test test test</div>';
  const props = createTestProps({ parseHtml: false, value: html});
  render(<DisplayText {...props} />);
  const content = screen.getByTestId(props.id);

  expect(content).toEqual(html);
});

it('should interpret HTML tags when parseHtml is true', () => {
  const html = '<div>test test test</div>';
  const props = createTestProps({ parseHtml: true, value: html});
  render(<DisplayText {...props} />);
  const content = screen.getByTestId(props.id);

  expect(content).toEqual(html);
});
