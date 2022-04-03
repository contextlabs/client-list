import { render, screen } from '@testing-library/react';

import { SearchInput } from '.';

describe('<SearchInput />', () => {
  const props = {
    setSearchTerm: Function
  };

  it('should render the SearchInput as default', () => {
    const { container } = render(<SearchInput {...props} />);
    expect(container.firstChild).toMatchSnapshot();
    expect(
      screen.getByRole('textbox', { name: /SearchInput/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /SearchInputIcon/i })
    ).toBeInTheDocument();
  });
});
