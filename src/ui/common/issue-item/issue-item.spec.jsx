/* eslint-disable jsx-a11y/anchor-is-valid */
import { shallow } from 'enzyme';
import convertIsoStringToDDMMYYYY from 'src/utils/date';
import CommonIssueItem from '.';

describe('CommonItem Componenent render', () => {
  const mockProps = {
    created_at: '2013-08-03T02:00:00Z',
    updated_at: '2013-08-03T02:00:00Z',
    url: 'https://google.com',
    user: 'Malek',
    id: '1',
  };
  const BaseComponent = shallow(<CommonIssueItem {...mockProps} />);

  it('it should match the SnappShot', () => {
    expect(BaseComponent).toMatchSnapshot();
  });
  it('it should renders the base html element', () => {
    expect(BaseComponent.find('a').props().href).toEqual(mockProps.url);
  });
});

describe('CommonItem shoud render props properly', () => {
  const mockProps = {
    created_at: '2013-08-03T02:00:00Z',
    updated_at: '2013-08-03T02:00:00Z',
    url: 'https://google.com',
    user: 'Malek',
    id: '1',
  };

  const convertedCreatedDate = convertIsoStringToDDMMYYYY(mockProps.created_at);
  const convertedUpdatedDate = convertIsoStringToDDMMYYYY(mockProps.updated_at);

  const BaseComponent = shallow(<CommonIssueItem {...mockProps} />);

  it('it should renders the  link element', () => {
    expect(BaseComponent.find('a').props().href).toEqual(mockProps.url);
  });

  it('it should renders the created_at date properly', () => {
    expect(
      BaseComponent.find('p.created_at').html().includes(convertedCreatedDate),
    ).toBeTruthy();
  });

  it('it should renders the created_at date properly', () => {
    expect(
      BaseComponent.find('p.created_at').html().includes(mockProps.created_at),
    ).toBeFalsy();
  });

  it('it should renders the created_at date properly', () => {
    expect(
      BaseComponent.find('p.updated_at').html().includes(convertedUpdatedDate),
    ).toEqual(true);
  });

  it('it should renders the update_at date properly', () => {
    expect(
      BaseComponent.find('p.updated_at').html().includes(mockProps.update_at),
    ).toEqual(false);
  });

  it('it should renders the user data properly', () => {
    expect(
      BaseComponent.find('p.user').html().includes(mockProps.user),
    ).toEqual(true);
  });


});
