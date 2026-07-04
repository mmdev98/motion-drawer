import { useState, useRef, useEffect } from "react";

type MediaQueryCallback = (event: { matches: boolean; media: string }) => void;

/**
 * Older versions of Safari (shipped withCatalina and before) do not support addEventListener on matchMedia
 * https://stackoverflow.com/questions/56466261/matchmedia-addlistener-marked-as-deprecated-addeventlistener-equivalent
 * */
function attachMediaListener(
  query: MediaQueryList,
  callback: MediaQueryCallback
) {
  try {
    query.addEventListener("change", callback);
    return () => query.removeEventListener("change", callback);
  } catch {
    query.addListener(callback);
    return () => query.removeListener(callback);
  }
}

function getInitialValue(query: string, ssr?: boolean) {
  if (
    !(ssr || ssr === undefined) ||
    (typeof window !== "undefined" && "matchMedia" in window)
  ) {
    return window.matchMedia(query).matches;
  }

  return false;
}

export type Options = {
  ssr?: boolean;
};

/**
 * use-media-query hook allows to subscribe to media queries.
 * By default SSR is true.
 * @param query
 * @param options
 */
export default function useMediaQuery(query: string, options?: Options) {
  const [matches, setMatches] = useState(getInitialValue(query, options?.ssr));
  const queryRef = useRef<MediaQueryList | undefined>(undefined);

  useEffect(() => {
    if ("matchMedia" in window) {
      queryRef.current = window.matchMedia(query);
      setMatches(queryRef.current.matches);
      return attachMediaListener(queryRef.current, (event) =>
        setMatches(event.matches)
      );
    }

    return undefined;
  }, [query]);

  return matches;
}
