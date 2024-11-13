export const useScrollToSection = (section) => {
  const scrollToSection = () => {
    section.current.scrollIntoView({ behavior: 'smooth' });
  };

  return { scrollToSection };
};