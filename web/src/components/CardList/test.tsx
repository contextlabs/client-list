import { render, screen } from '@testing-library/react';

import { CardList } from '.';

describe('<CardList />', () => {
  const props = {
    results: [
      {
        name: 'CardList Name',
        title: 'CardList Title',
        avatar: 'https://gravatar.com/4405735f6f3129e0286d9d43e7b460d0',
        nationality: 'Global',
        quote: 'Hello'
      }
    ],
    onClickNavigate: Function
  };

  it('should render the CardList as default', () => {
    const { container } = render(<CardList {...props} />);
    expect(container.firstChild).toMatchSnapshot();

    expect(
      screen.getByRole('heading', { name: /CardList Title/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /CardList Name/i })
    ).toBeInTheDocument();
  });
});
