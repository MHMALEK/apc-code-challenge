import { shallow } from 'enzyme';

import BaseInput from '.';

describe('BaseInput Componenent render', () => {
  const sampleName = 'sample-name';
  const BaseComponent = shallow(<BaseInput />);
  const BaseComponentWithNameProps = shallow(<BaseInput name={sampleName} />);
  const BaseComponentWithValueProps = shallow(
    <BaseInput value={sampleName} name={sampleName} />,
  );

  it('it should match the SnappShot', () => {
    expect(BaseComponent).toMatchSnapshot();
  });
  it('it should renders the input html element', () => {
    expect(
      BaseComponent.find('input').containsMatchingElement(<input />),
    ).toEqual(true);
  });

  it('it should renders the input with correct name props', () => {
    expect(BaseComponentWithNameProps.find('input').props().name).toEqual(
      sampleName,
    );
  });


  it('it should renders the input with correct value props', () => {
    expect(BaseComponentWithValueProps.find('input').props().value).toEqual(
      sampleName,
    );
  });

  it('it should renders the correct value when onChange handler triggered', () => {
    const onChangeMock = jest.fn();
    const event = {
      preventDefault() {},
      target: { value: 'the-value' },
    };
    const component = shallow(<BaseInput onChange={onChangeMock} />);
    component.find('input').simulate('change', event);
    expect(onChangeMock).toBeCalled();
  });
});
