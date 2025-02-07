import {expect, test} from "vitest"
import sum from "../src/sum"

test('sum', () => {
    expect(sum(4, 7)).toBe(11)
})
