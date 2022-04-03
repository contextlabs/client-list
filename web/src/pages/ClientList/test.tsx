import { render } from '@testing-library/react';
import { Client } from '../../types/client.types';
import { ClientList } from '.';
import * as api from '../../api/client.api';
import { AxiosResponse } from 'axios';
import { act } from 'react-dom/test-utils';
const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate
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

describe('<ClientList />', () => {
  it('should render the ClientList as default', async () => {
    jest.spyOn(api, 'getClients').mockResolvedValue(MOCK_DATA);
    jest.spyOn(api, 'getClientByFilter').mockResolvedValue(MOCK_DATA);
    const { container } = render(<ClientList />);
    await act(async () => {
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});
