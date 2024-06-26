import { ButtonHTMLAttributes } from 'react';

import {
  BaseButton,
  InvertedButton,
  LoadingSpinner,
} from './button.styles';

export enum BUTTON_TYPE_CLASSES {
  base = 'base',
  inverted = 'inverted',
}

const getButton = (
  buttonType = BUTTON_TYPE_CLASSES.base
): typeof BaseButton =>
  ({
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
  }[buttonType]);

export type ButtonProps = {
  buttonType?: BUTTON_TYPE_CLASSES;
  isLoading?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({
  children,
  buttonType,
  isLoading = false,
  ...otherProps
}: ButtonProps) => {
  const CustomButton = getButton(buttonType);
  return (
    <CustomButton disabled={isLoading} {...otherProps}>
      {isLoading ? <LoadingSpinner /> : children}
    </CustomButton>
  );
};

export default Button;
