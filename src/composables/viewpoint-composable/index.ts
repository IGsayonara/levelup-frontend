import { ref } from 'vue';

export const bootstrapBreakpoints = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1400,
};

export const useViewpoint = () => {
  const sortedEntries = Object.entries(bootstrapBreakpoints).sort(
    ([_aKey, aValue], [_bKey, bValue]) => bValue - aValue
  );
  const getBreakpoint = (width: number) => {
    for (const [key, value] of sortedEntries) {
      if (width > value) return key;
    }
  };

  const currentBreakpoint = ref(getBreakpoint(window.innerWidth));

  window.addEventListener('resize', () => {
    currentBreakpoint.value = getBreakpoint(window.innerWidth);
  });

  return {
    currentBreakpoint,
    getBreakpoint,
  };
};
