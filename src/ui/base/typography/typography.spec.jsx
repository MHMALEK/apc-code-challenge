import BaseTypography from '.';
import { shallowWithTheme } from '../../../utils/test/test-helper';

describe('BaseIcon Componenent render', () => {
  const sampleName = 'h2';

  const BaseComponent = shallowWithTheme(<BaseTypography variant={sampleName} />);

  it('it should match the SnappShot', () => {
    expect(BaseComponent).toMatchSnapshot();
  });
  it('it should renders the base html element', () => {
    expect(BaseComponent.html()).toContain('h2');
  });
});
