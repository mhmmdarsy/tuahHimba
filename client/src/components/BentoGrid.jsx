import { useMemo, useEffect, useRef, useState } from 'react'

// Simple media query hook to know active column count
const useMedia = (queries, values, defaultValue) => {
  const get = () =>
    values[queries.findIndex(q => matchMedia(q).matches)] ?? defaultValue
  const [value, setValue] = useState(get)
  useEffect(() => {
    const handler = () => setValue(get)
    queries.forEach(q => matchMedia(q).addEventListener('change', handler))
    return () =>
      queries.forEach(q => matchMedia(q).removeEventListener('change', handler))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [queries])
  return value
}

// Default repeating pattern for 6-col grid
const defaultPattern = [
  { c: 3, r: 26 },
  { c: 3, r: 26 },
  { c: 2, r: 20 },
  { c: 2, r: 20 },
  { c: 2, r: 20 },
  { c: 4, r: 24 },
  { c: 2, r: 24 },
  { c: 3, r: 20 },
  { c: 3, r: 20 },
]

export default function BentoGrid({
  items = [],
  pattern = defaultPattern,
  rowUnit = 8, // px per auto-row
  hoverScale = 0.97,
  overlay = true,
  overlayClassName = 'bg-gradient-to-tr from-pink-500/40 to-sky-500/40',
  overlayHoverOpacityClass = 'group-hover:opacity-50', // tailwind opacity class on hover
}) {
  // Responsive column count (1,2,3,4,6)
  const columns = useMedia(
    [
      '(min-width:1280px)',
      '(min-width:1024px)',
      '(min-width:640px)',
      '(min-width:420px)',
    ],
    [6, 4, 3, 2],
    1,
  )

  const spans = useMemo(
    () => items.map((_, i) => pattern[i % pattern.length]),
    [items, pattern],
  )

  return (
    <div className="grid gap-4 auto-rows-[8px] grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
      {items.map((it, i) => {
        const shape = spans[i]
        const colSpan = Math.max(1, Math.min(shape.c, columns))
        const rowSpan = shape.r
        return (
          <div
            key={it.id ?? i}
            className="group relative overflow-hidden rounded-[10px] shadow-[0px_10px_50px_-10px_rgba(0,0,0,0.2)]"
            style={{
              gridColumn: `span ${colSpan} / span ${colSpan}`,
              gridRow: `span ${rowSpan} / span ${rowSpan}`,
            }}
          >
            <a
              href={it.url || it.img}
              target="_blank"
              rel="noopener"
              className="block w-full h-full"
            >
              <div
                className={`w-full h-full bg-cover bg-center transition-transform duration-300 ${
                  hoverScale !== 1 ? 'group-hover:scale-95' : ''
                }`}
                style={{ backgroundImage: `url(${it.img})` }}
              >
                {overlay && (
                  <div
                    className={`absolute inset-0 ${overlayClassName} opacity-0 transition-opacity duration-300 pointer-events-none ${overlayHoverOpacityClass}`}
                  />
                )}
              </div>
            </a>
          </div>
        )
      })}
    </div>
  )
}
