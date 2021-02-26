import { FC } from 'react';
// import storyStyles from '../../styles/story.module.css';

type ButtonProps = {
  className?: string;
  id?: string;
  onClick?: () => void;
};

const Button: FC<ButtonProps> = (props) => {
  const {className, id, onClick} = props;
  return <>
    <button
      id={id}
      className={`transition-all duration-150 ease-in-out outline-none border border-primary-default bg-dark-default hover:bg-primary-default py-2 px-6 rounded font-semibold focus:outline-none transform active:scale-105 ${className}`}
      onClick={onClick}
    >
      {props.children}
    </button>
  </>;
};

export default Button;