import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { configure , shallow,pageMounted} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

test('renders test case one for hello word', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Hello word/i);
  expect(linkElement).toBeInTheDocument();
});


