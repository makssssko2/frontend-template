import React from 'react';
import type { ReactElement } from 'react';
import './button.scss';

interface ButtonProps {
  disabled?: boolean;
  className?: string;
  onClick: () => void;
  custom?: boolean;
  style?: 'primary' | 'secondary';
  children: ReactElement | string;
}
const Button: React.FC<ButtonProps> = ({ ...props }) => {
  const {
    style = 'primary',
    custom = false,
    className,
    disabled = false,
    onClick,
    children,
  } = props;

  return (
    <button
      className={`button button_${style} ${custom ? 'button_custom' : ''} ${className || ''}`}
      onClick={onClick}
      disabled={disabled}
    >
      {typeof children === 'string' ? <p>{children}</p> : children}
    </button>
  );
};

export default Button;
