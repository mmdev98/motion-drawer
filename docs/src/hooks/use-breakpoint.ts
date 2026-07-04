import { useMemo } from "react";
import useMediaQuery, { Options } from "@/hooks/use-media-query";

const breakpointMap = {
  sm: "(min-width:640px)",
  md: "(min-width:768px)",
  lg: "(min-width:1024px)",
  xl: "(min-width:1280px)",
  "2xl": "(min-width:1536px)",
  "max-sm": "(max-width:640px)",
  "max-md": "(max-width:768px)",
  "max-lg": "(max-width:1024px)",
  "max-xl": "(max-width:1280px)",
  "max-2xl": "(max-width:1536px)"
};

/**
 * This hook use useMediaQuery under the hood and return true if breakpoint is match otherwise false.
 * By default, ssr is true and then returned value is always undefined for first call.
 *
 * @param breakpoint Tailwind CSS modifier utilities like sm, sm:max-lg, lg.
 * @param options
 */
export default function useBreakpoint(breakpoint: string, options?: Options) {
  const query = useMemo(() => {
    const breakpoints = breakpoint.split(":");
    return breakpoints
      .reduce<string[]>((previousValue, currentValue) => {
        return [
          ...previousValue,
          breakpointMap[currentValue as keyof typeof breakpointMap]
        ];
      }, [])
      .join(" and ");
  }, [breakpoint]);

  return useMediaQuery(query, options);
}
