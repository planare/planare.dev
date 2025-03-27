export function checkBreakpoint(): { isPhone: boolean } {
  return {
    isPhone: typeof window !== 'undefined' && window.innerWidth <= 980,
  };
} 