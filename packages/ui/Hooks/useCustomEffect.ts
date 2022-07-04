import { useEffect, useLayoutEffect } from 'react'

/**
 * This custom effect hook is necessasary because of ssr of nextjs.
 * The hook useLayoutEffect is not available on ssr.
 */
export const useCustomEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect
