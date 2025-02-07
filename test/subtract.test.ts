import {expect, test} from 'vitest'
import subtract from "../src/subtract"

test('subtract', () => {
    expect(subtract(10, 7)).toBe(3)
})
