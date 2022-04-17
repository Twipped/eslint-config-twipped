/* eslint-disable import/no-extraneous-dependencies */
import PropTypes from 'prop-types';
import { useMemo } from 'react';

export default function MyComponent({
  children,
  className
}) {
  const classes = useMemo(
    () => [
      className,
      'my-component'
    ].filter(Boolean).join(' '),
    [className]
  );

  return (
    <span className={classes}>{children}</span>
  );
}

MyComponent.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};
