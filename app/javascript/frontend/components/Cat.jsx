import React from 'react';
import './styles/Cat.scss';
import { useSpring, animated } from 'react-spring';

const Cat = ({image, clicked}) => {

  const [propsAnimation, set] = useSpring(() => ({
    transform: 'scale(1)',
    boxShadow: '0px 0px 8px 0px rgb(80, 79, 79)',
    from: { 
        transform: 'scale(0.99)',
        boxShadow: '0px 0px 8px 0px rgb(80, 79, 79)'
    },
    config: { tension: 400, mass: 2, velocity: 0.2 }
  }));
  const updateHover = hovering => ({
    transform: `scale(${hovering ? 1.1 : 1})`,
    boxShadow: `0px 0px 9px 0px rgb(80, 79, 79)`
  });

  const handleMouseEnter = () => {
    set(updateHover(true));
  }
  const handleMouseLeave = () => {
    set(updateHover(false));
  }

  return (
    <animated.div 
      className='cat-card'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave} 
      style={{...propsAnimation}}
      onClick={clicked}
    >
      <img src={`${image}`} />
    </animated.div> 
  );
}

export default Cat;
