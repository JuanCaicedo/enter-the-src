import * as RadiusMath from './radius';

describe('directoryRadius', () => {
  describe('returns size for files if no directories', () => {
    it('1 file', () => {
      const children = [
        {
          type: 'file'
        }
      ];
      expect(RadiusMath.directoryRadius(children)).toEqual(1);
    });

    it('2 files', () => {
      const children = [
        {
          type: 'file'
        },
        {
          type: 'file'
        }
      ];
      const expected = 2;
      expect(RadiusMath.directoryRadius(children)).toEqual(expected);
    });
  });

  describe('returns size for subdirectories', () => {
    it('1 file', () => {
      const children = [
        {
          type: 'directory',
          children: [{ type: 'file' }]
        }
      ];
      const actual = RadiusMath.directoryRadius(children);
      const expected = 1;
      expect(actual).toEqual(expected);
    });

    it('2 files', () => {
      const children = [
        {
          type: 'directory',
          children: [
            {
              type: 'file'
            },
            {
              type: 'file'
            }
          ]
        }
      ];
      const expected = 2;
      expect(RadiusMath.directoryRadius(children)).toEqual(expected);
    });

    it('3 files', () => {
      const children = [
        {
          type: 'directory',
          children: [
            {
              type: 'file'
            },
            {
              type: 'file'
            },
            {
              type: 'file'
            }
          ]
        }
      ];
      const expected = 2.1547005383792497;
      expect(RadiusMath.directoryRadius(children)).toEqual(expected);
    });

    it('2 directories', () => {
      const children = [
        {
          type: 'directory',
          children: [{ type: 'file' }]
        },
        {
          type: 'directory',
          children: [{ type: 'file' }]
        }
      ];
      const actual = RadiusMath.directoryRadius(children);
      const expected = 2;
      expect(actual).toEqual(expected);
    });

    it('returns size only for directory children', () => {
      const children = [
        {
          type: 'file'
        },
        {
          type: 'directory',
          children: [
            {
              type: 'file'
            },
            {
              type: 'file'
            },
            {
              type: 'file'
            }
          ]
        }
      ];
      const expected = 2.1547005383792497;
      expect(RadiusMath.directoryRadius(children)).toEqual(expected);
    });
  });
});
