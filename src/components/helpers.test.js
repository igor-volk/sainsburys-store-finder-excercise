import { formatDistance, formatStoreName } from './helpers';

describe('helpers', () => {
  it('should format distance correctly', () => {
    const result = formatDistance('1.567');
    expect(result).toEqual('1.57 mi');
  });

  it('should format store name correctly', () => {
    const result = formatStoreName('Fetta Cheese Lane');
    expect(result).toEqual('fetta-cheese-lane');
  });
});
