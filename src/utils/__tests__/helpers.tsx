import { getInitials, preprocessText, truncateAfter } from '..'

describe('helpers', () => {
  describe('getInitials', () => {
    it('calculates the correct initials', () => {
      expect(getInitials('Colby Thomas')).toBe('CT')
      expect(getInitials('Kyle Alviani')).toBe('KA')
      expect(getInitials('Eli Brill')).toBe('EB')
      expect(getInitials('Christian Brink Westergaard')).toBe('CB')
    })
  })

  describe('preprocessText', () => {
    it('removes multiple new lines', () => {
      expect(preprocessText('Hi\n\n\n\n\n\n\nmy name is Colby')).toBe('Hi\n\nmy name is Colby')
      expect(preprocessText('That\n\n\n\n\n\nwas\n\n\n\nso\n\n\nclean')).toBe(
        'That\n\nwas\n\nso\n\nclean',
      )
    })
    it('applies no changes if text is already acceptable', () => {
      const acceptableText = 'This\nis\nfine'
      expect(preprocessText(acceptableText)).toBe(acceptableText)
    })
  })

  describe('truncateAfter', () => {
    it('truncates text correctly', () => {
      expect(truncateAfter('Hi my name is Colby', 10)).toBe('Hi my name...')
    })

    it('applies no changes if text does not need truncating', () => {
      expect(truncateAfter("So sketchy but I'll take it", 30)).toBe("So sketchy but I'll take it")
    })
  })
})
