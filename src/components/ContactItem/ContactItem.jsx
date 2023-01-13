import PropTypes from 'prop-types';
import { ListBtn, ListItem } from './ContactItem.Styled';
export const ContactItem = ({ id, name, number, onClick }) => {
  return (
    <ListItem key={id}>
      <p>
        {name}: {number}
      </p>
      <ListBtn
        type="button"
        onClick={() => {
          onClick(id);
        }}
      >
        Delete
      </ListBtn>
    </ListItem>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
