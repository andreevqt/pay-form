import React from 'react';

const useCombinedRefs = (
  ...refs
) => {
  const targetRef = React.useRef(null);
  React.useEffect(() => {
    refs.forEach((ref) => {
      if (typeof ref === 'function') {
        ref(targetRef.current);
      } else if (ref != null) {
        ref.current = targetRef.current;
      }
    });
  }, [refs]);
  return targetRef;
}


export default useCombinedRefs;
