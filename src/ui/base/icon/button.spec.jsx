import { StyledButton } from './style';
import { shallowWithTheme } from '../../../utils/test/test-helper';

describe('BaseButton Componenent render', () => {
  const sampleName = 'sample-name';

  const BaseComponent = shallowWithTheme(
    <StyledButton>{sampleName}</StyledButton>,
  );

  it('it should match the SnappShot', () => {
    expect(BaseComponent).toMatchSnapshot();
  });
  it('it should renders the base html element', () => {
    expect(BaseComponent.html()).toContain('button');
  });

  it('it should renders the button with correct child props', () => {
    expect(BaseComponent.find('button').props().children).toEqual(sampleName);
  });
});
