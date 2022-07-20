import React from 'react';

export default function useQueryParams() {
  const {
    search
  } = window.location;
  return React.useMemo(() => new URLSearchParams(search), [search]);
}
