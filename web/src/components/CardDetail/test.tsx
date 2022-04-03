import { render, screen } from '@testing-library/react';

import { CardDetail } from '.';

const noop = () => {};

describe('<CardDetail />', () => {
  const props = {
    name: 'CardDetail Name',
    title: 'CardDetail Title',
    avatar: 'https://gravatar.com/4405735f6f3129e0286d9d43e7b460d0',
    nationality: 'Global',
    quote: 'Hello'
  };

  it('should render the CardDetail as default', () => {
    const { container } = render(<CardDetail {...props} />);
    expect(container.firstChild).toMatchSnapshot();

    expect(screen.getByRole('heading', { name: /CardDetail Title/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /CardDetail Name/i })).toBeInTheDocument();
  });
});
