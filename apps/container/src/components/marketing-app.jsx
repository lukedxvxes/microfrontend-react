import React from 'react';
import { mount } from 'marketing/Marketing';
import { useEffect, useRef } from 'react';

export const MarketingApp = () => {
  const marketingRoot = useRef(null);

  useEffect(() => {
    mount(marketingRoot.current);
  }, []);

  return (
    <div>
      <div ref={marketingRoot}></div>
    </div>
  );
};
