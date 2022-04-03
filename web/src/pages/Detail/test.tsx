import { render } from '@testing-library/react';
import { Client } from '../../types/client.types';
import { Detail } from '.';
import * as api from '../../api/client.api';
import { AxiosResponse } from 'axios';
import { act } from 'react-dom/test-utils';
const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => mockedUsedNavigate
}));

const MOCK_DATA: AxiosResponse<Client[]> = {
  data: [
    {
      name: 'CardDetail Name',
      title: 'CardDetail Title',
      avatar: 'https://gravatar.com/4405735f6f3129e0286d9d43e7b460d0',
      nationality: 'Global',
      quote: 'Hello'
    }
  ],
  status: 0,
  statusText: '',
  headers: {},
  config: {}
};

describe('<Detail />', () => {
  it('should render the Detail as default', async () => {
    jest.spyOn(api, 'getClientByName').mockResolvedValue(MOCK_DATA);
    const { container } = render(<Detail />);
    await act(async () => {
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});
