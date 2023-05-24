import css from './Form.module.scss';
import PropTypes from 'prop-types';

const Form = ({ submitHandler, inputHandler, inputValue }) => {
  return (
    <form className={css.form} onSubmit={submitHandler}>
      <input className={css.input} value={inputValue} onChange={inputHandler} />
      <button className={css.submitBtn} type="submit">
        Search
      </button>
    </form>
  );
};

export default Form;

Form.propTypes = {
  submitHandler: PropTypes.func,
  inputHandler: PropTypes.func,
  inputValue: PropTypes.string,
};
