import css from './Section.module.scss';

const Section = ({ children }) => {
  return <div className={css.section}>{children}</div>;
};

export default Section;
