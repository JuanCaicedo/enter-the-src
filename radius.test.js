import * as RadiusMath from './radius';

describe('directoryRadius', () => {
  describe('returns size for files if no directories', () => {
    it('1 file', () => {
      const children = [
        {
          type: 'file'
        }
      ];
      const fileRadius = 1;
      expect(RadiusMath.directoryRadius(fileRadius, children)).toEqual(
        fileRadius
      );
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
      const fileRadius = 1;
      const expected = 2;
      expect(RadiusMath.directoryRadius(fileRadius, children)).toEqual(
        expected
      );
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
      const fileRadius = 1;
      const actual = RadiusMath.directoryRadius(fileRadius, children);
      const expected = fileRadius;
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
      const fileRadius = 1;
      const expected = 2;
      expect(RadiusMath.directoryRadius(fileRadius, children)).toEqual(
        expected
      );
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
      const fileRadius = 1;
      const expected = 2.154700538;
      expect(RadiusMath.directoryRadius(fileRadius, children)).toEqual(
        expected
      );
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
      const fileRadius = 1;
      const actual = RadiusMath.directoryRadius(fileRadius, children);
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
      const fileRadius = 1;
      const expected = 2.154700538;
      expect(RadiusMath.directoryRadius(fileRadius, children)).toEqual(
        expected
      );
    });
  });
});
