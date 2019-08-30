import * as RadiusMath from './radius';

describe('directoryRadius', () => {
  describe('returns size for files if no directories', () => {
    it('1 file', () => {
      const contents = [
        {
          type: 'file'
        }
      ];
      expect(RadiusMath.directoryRadius(contents)).toEqual(1);
    });

    it('2 files', () => {
      const contents = [
        {
          type: 'file'
        },
        {
          type: 'file'
        }
      ];
      const expected = 2;
      expect(RadiusMath.directoryRadius(contents)).toEqual(expected);
    });
  });

  describe('returns size for subdirectories', () => {
    it('1 file', () => {
      const contents = [
        {
          type: 'directory',
          contents: [{ type: 'file' }]
        }
      ];
      const actual = RadiusMath.directoryRadius(contents);
      const expected = 1;
      expect(actual).toEqual(expected);
    });

    it('2 files', () => {
      const contents = [
        {
          type: 'directory',
          contents: [
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
      expect(RadiusMath.directoryRadius(contents)).toEqual(expected);
    });

    it('3 files', () => {
      const contents = [
        {
          type: 'directory',
          contents: [
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
      expect(RadiusMath.directoryRadius(contents)).toEqual(expected);
    });

    it('2 directories', () => {
      const contents = [
        {
          type: 'directory',
          contents: [{ type: 'file' }]
        },
        {
          type: 'directory',
          contents: [{ type: 'file' }]
        }
      ];
      const actual = RadiusMath.directoryRadius(contents);
      const expected = 2;
      expect(actual).toEqual(expected);
    });

    it('returns size based on largest child', () => {
      const directoryContents = [
        {
          type: 'file'
        },
        {
          type: 'file'
        },
        {
          type: 'file'
        }
      ];
      const contents = [
        {
          type: 'file'
        },
        {
          type: 'directory',
          contents: directoryContents
        }
      ];
      expect(RadiusMath.directoryRadius(contents)).toEqual(
        2 * RadiusMath.directoryRadius(directoryContents)
      );
    });
  });
});
