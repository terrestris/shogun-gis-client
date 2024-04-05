import * as React from 'react';

import './index.less';

interface DefaultProps {
  alignment: 'horizontal' | 'vertical';
}

export interface BaseProps extends Partial<DefaultProps> {
  className?: string;
}

export type ToolbarProps = BaseProps & React.HTMLAttributes<HTMLDivElement>;

const Toolbar: React.FC<ToolbarProps> = ({
  alignment = 'horizontal',
  className = '',
  children,
  ...passThroughProps
}) => {
  const baseClassName = 'toolbar';
  const finalClassName = className
    ? `${className} ${baseClassName}`
    : baseClassName;

  return (
    <div
      className={`${finalClassName} ${alignment}-toolbar`}
      role="toolbar"
      {...passThroughProps}
    >
      {children}
    </div>
  );
};

export default Toolbar;
