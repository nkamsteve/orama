// Copyright 2018 Kensho Technologies, LLC.

const isBrowser = typeof document === 'object'

// a shared, cached offscreen canvas
const ctx = isBrowser && document.createElement('canvas').getContext('2d')

export default function withCachedContext(fn) {
  if (!ctx) return fn()
  ctx.save()
  const result = fn(ctx)
  ctx.restore()
  return result
}
