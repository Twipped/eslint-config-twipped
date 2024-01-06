import React, { AriaAttributes } from 'react';
import MuiButton, { ButtonProps } from '@mui/material/Button';
import { PaletteColorOptions } from '@mui/material/styles/createPalette'
import LoadingButton from '@mui/lab/LoadingButton';

export const BUTTON_COLORS = [
  'Focus',
  'Peace',
  'PeaceAlt1',
  'Growth',
  'Energy',
  'EnergyAlt',
  'Wisdom',
  'Creativity',
  'Intuition'
] as const;
export type ZenButtonColors = typeof BUTTON_COLORS[number];

export type ZenButtonVariants = 'primary' | 'secondary' | 'ghost' | 'contained' | 'outlined' | 'text';

export type ZenButtonIconPosition = 'left' | 'right' | 'center' | 'only';
export type MUILoadingButtonloadingPosition = 'start' | 'end' | 'center';

export interface ZenButtonProps extends ButtonProps, AriaAttributes {
  color?: ZenButtonColors;
  variant: ZenButtonVariants,
  rounded?: boolean,
  icon?: string;
  iconPosition?: ZenButtonIconPosition;
  text?: string;
  loading?: boolean;
  /**
   * @deprecated
   */
  btnStyle?: object;
}

// TODO: Replace with <Icon /> component
interface ZenIconProps {
  src?: string;
}
// TODO: Replace with <Icon /> component
const Icon = ({ src }: ZenIconProps) => (<img src={src} alt="icon" />);

const Button = React.forwardRef<HTMLButtonElement, ZenButtonProps>(
  function Button(props, btnRef): JSX.Element {
    const {
      variant,
      fullWidth,
      rounded,
      color,
      icon,
      iconPosition,
      text,
      size,
      className,
      loading,
      href,
      type,
      sx,
      btnStyle,
      children,
      ...addProps
    } = props;

    const loadingIconPositionMap: Record<ZenButtonIconPosition, MUILoadingButtonloadingPosition> = {
      'center': 'center',
      'right': 'end',
      'left': 'start',
      'only': 'center'
    }

    // Large: 20x20
    // MD/SM: 16x16

    // TODO: Revisit loading button with design
    return loading ? (
      <LoadingButton
        disableElevation
        disableRipple
        loading
        loadingPosition={iconPosition && loadingIconPositionMap[iconPosition] || 'center'}
        color={color as keyof PaletteColorOptions}
        fullWidth={fullWidth}
        ref={btnRef}
        variant={variant || type}
        sx={sx}
        size={size}
      >{children || text}</LoadingButton>
    ) : (
      <MuiButton
        disableElevation
        disableRipple
        href={href}
        className={`${iconPosition === 'center' || iconPosition === 'only' ? 'only' : ''} ${className || ''
          }`}
        color={color as keyof PaletteColorOptions}
        fullWidth={fullWidth}
        ref={btnRef}
        variant={variant}
        size={size}
        role={href ? 'link' : 'button'}
        sx={{
          ...btnStyle,
          ...sx,
          ...(!rounded && { borderRadius: 0 })
        }}
        {...(iconPosition === 'left' || iconPosition === 'center' || iconPosition === 'only'
          ? { startIcon: <Icon src={icon} /> }
          : {})}
        {...(iconPosition === 'right' ? { endIcon: <Icon src={icon} /> } : {})}
        /* TODO: prop spread will be deprecated eventually (v6) */
        {...addProps}
      >
        {children || text}
      </MuiButton>
    );
  }
);

Button.defaultProps = {
  variant: 'primary',
  color: 'Focus',
  size: 'medium',
  fullWidth: true,
  rounded: true
}

Button.displayName = 'Button';

export default Button;
