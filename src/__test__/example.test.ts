console.clear()

/***************************************
 * Preparando el entorno con Jest
 ***************************************/

describe('Strings', () => {
   const mystring = 'this is a string'

   it('should contain a string', () => {
      expect(mystring).toMatch(/string/)
   })

   it('should be equal', () => {
      expect(mystring).toEqual(mystring)
   })
})

/***************************************
 * Boolean, arrays and number
 ***************************************/

describe('Arrays', () => {
   const fruits = ['apples', 'grapes', 'watermelon']

   it('should contain apples', () => {
      expect(fruits).toContain('apples')
   })

   it("shouldn't contain bananas", () => {
      expect(fruits).not.toContain('bananas')
   })
})

describe('Numbers', () => {
   const eight = 8
   const five = 5

   it('should be greater than 0', () => {
      expect(eight).toBeGreaterThan(0)
   })

   it('five should be less than 8', () => {
      expect(five).toBeLessThan(eight)
   })
})

describe('Booleans', () => {
   const TRUE = true
   const FALSE = false

   it('should be truthy', () => {
      expect(TRUE).toBeTruthy()
   })

   it("shouldn't be truthy", () => {
      expect(FALSE).not.toBeTruthy()
   })
})

/***************************************
 * Promises, callbacks and Async / Await
 ***************************************/

const mypromise = (string: string): Promise<Error | string> => {
   return new Promise((resolve, reject) => {
      if (!string) {
         reject(new Error('Must have a string'))
      }
      setTimeout(() => {
         resolve(string.split('').reverse().join(''))
      }, 100)
   })
}

describe('Promises', () => {
   it('should resolve with aloh', (done) => {
      const myword = 'hola'

      mypromise(myword).then((word) => {
         expect(word).toBe('aloh')
         done()
      })
   })

   it('should resolve with angelo', (done) => {
      const myword = 'olegna'

      mypromise(myword).then((word) => {
         expect(word).toBe('angelo')
         done()
      })
   })
})

describe('Callbacks', () => {
   const mycallback = (string: string, callback: (string: string) => void) => {
      setTimeout(() => {
         callback(string.split('').reverse().join(''))
      }, 100)
   }

   it('should be 1234567890', (done) => {
      mycallback('0987654321', (str) => {
         expect(str).toBe('1234567890')
         done()
      })
   })

   it("shouldn't be equal", (done) => {
      mycallback('angelo', (str) => {
         expect(str).not.toBe('angelo')
         done()
      })
   })
})

describe('Async / Await', () => {
   it('should be reverse', async () => {
      const myword = 'ser'
      const reverseword = await mypromise(myword)

      expect(reverseword).toBe('res')
   })

   it("shouldn't be equal", async () => {
      const myword = 'asdasd'
      const reverseword = await mypromise(myword)

      expect(reverseword).not.toBe(myword)
   })
})

/***************************************
 * before and after
 ***************************************/

// afterAll(() => console.log('after all'))
// afterEach(() => console.log('after each'))
// beforeAll(() => console.log('before each'))
// beforeEach(() => console.log('before each'))
