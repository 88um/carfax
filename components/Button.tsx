'use client';

import Image from 'next/image';

interface ButtonProps {
    title: string;
    containerStyles?: string;
    btnType? : "button" | "submit";
    textStyles? : string;
    handleClick? : () => void;
    rightIcon?: string;
    isDisabled? : boolean;
}

const Button: React.FC<ButtonProps> = ({title, containerStyles, btnType, handleClick,textStyles, rightIcon, isDisabled}) => {
  return (
    <button
    disabled={isDisabled}
    type={btnType || "button"}
    className={`custom-btn ${containerStyles}`}
    onClick={handleClick}
  >
    <span className={`flex-1 ${textStyles}`}>{title}</span>
    {rightIcon && (
      <div className="relative w-6 h-6">
        <Image
          src={rightIcon}
          alt="arrow_left"
          fill
          className="object-contain"
        />
      </div>
    )}
  </button>
  );
};

export default Button;