import React from 'react';

import { Avocado } from 'src/components/SVGIcons';

type AnimatedHeaderProps = {
  visible: boolean;
  onClick: () => void;
  onComplete: () => void;
};

const AnimatedHeader = ({
  visible,
  onClick,
  onComplete,
}: AnimatedHeaderProps) => (
  <h1 className="flex items-center justify-center text-3xl font-semibold">
    Platzi
    <Avocado size="58px" />
    Avo
  </h1>
);

export default AnimatedHeader;
