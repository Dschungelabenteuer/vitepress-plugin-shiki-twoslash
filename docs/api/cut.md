---
description: ''
title: 'Cut'
---

# Cut

```ts twoslash
// @module: esnext
// @filename: maths.ts
export function absolute(num: number) {
  if (num < 0) return num * -1
  return num
}
// @filename: index.ts
// ---cut---
import { absolute } from './maths'
const value = absolute(-1)
//    ^?
```
