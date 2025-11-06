import { NavigateFunction } from 'react-router-dom';

export const scrollToSection = (sectionId: string, navigate: NavigateFunction, currentPath: string) => {
  const goToSection = () => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (currentPath !== '/') {
    navigate('/', { replace: true });
    // Wait for navigation to complete before scrolling
    setTimeout(goToSection, 100);
  } else {
    goToSection();
  }
};