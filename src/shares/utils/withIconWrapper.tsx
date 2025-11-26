import React from 'react';

type IconProps = {
  classes?: string;
  onClick?: () => void;
};

const withIconWrapper = (IconComponent: React.FC<IconProps>) => {
  const WrappedIcon = ({ classes, onClick }: IconProps) => (
    <span className={classes} onClick={onClick}>
      <IconComponent classes={classes} />
    </span>
  );

  // Set the display name for debugging purposes
  WrappedIcon.displayName = `withIconWrapper(${IconComponent.displayName || IconComponent.name || 'Component'})`;

  return WrappedIcon;
};

export default withIconWrapper;
