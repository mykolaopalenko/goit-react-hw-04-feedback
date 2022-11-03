import PropTypes from 'prop-types';
import { SectionTitle, Block } from './Section.styled';

const Section = ({ title, children }) => {
  return (
    <Block>
      <SectionTitle>{title}</SectionTitle>
      {children}
    </Block>
  );
};

Section.propTypes = {
   title: PropTypes.string,
   children: PropTypes.node.isRequired,
 };
export default Section;
