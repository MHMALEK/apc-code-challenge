import BaseIcon from '.';
import { shallowWithTheme } from '../../../utils/test/test-helper';

describe('BaseIcon Componenent render', () => {
  const sampleName = 'sample-name';

  const BaseComponent = shallowWithTheme(<BaseIcon name={sampleName} />);

  it('it should match the SnappShot', () => {
    expect(BaseComponent).toMatchSnapshot();
  });
  it('it should renders the base html element', () => {
    expect(BaseComponent.html()).toContain('span');
  });

  it('it should renders the icon with correct icon or class name', () => {
    expect(BaseComponent.children().props().className).toEqual(
      `icon-${sampleName}`,
    );
  });
});
