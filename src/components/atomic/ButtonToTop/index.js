import { useEffect, useState } from 'react'
import { FiChevronsUp } from 'react-icons/fi'
import { ButtonToTopContainer, Button } from './styles';

export function ButtonToTop() {
  const [animateHeader, setAnimateHeader] = useState(false);

  useEffect(() => {
    const listener = () => {
      if (window.scrollY > 300) {
        setAnimateHeader(true);
        return;
      }
      setAnimateHeader(false);
    };
    window.addEventListener('scroll', listener);
    return () => {
      window.removeEventListener('scroll', listener);
    };
  }, []);

  return (
      <ButtonToTopContainer
        animateHeader={animateHeader}
        onClick={() => window.scrollTo(0, 0)}
      >
        <FiChevronsUp 
          size={32}
        /> 
      </ButtonToTopContainer>
  );
}
