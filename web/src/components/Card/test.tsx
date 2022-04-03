import { render, screen } from '@testing-library/react';

import { Card } from '.';

const noop = () => {};

describe('<Card />', () => {
  const props = {
    name: 'Card Name',
    title: 'Card Title',
    onClickNavigate: noop,
    avatar: 'https://gravatar.com/4405735f6f3129e0286d9d43e7b460d0'
  };

  it('should render the Card as default', () => {
    const { container } = render(<Card {...props} />);

    expect(container.firstChild).toHaveClass(
      'sm:flex-row sm:my-8 flex flex-col mx-10 my-16 shadow-md rounded-md justify-between bg-white m-4 p-4 border-l-4 border-teal-500 border-solid'
    );

    expect(container.firstChild).toMatchSnapshot();

    expect(screen.getByRole('heading', { name: /Card Title/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Card Name/i })).toBeInTheDocument();
    
  });
});
