import css from './Form.module.scss';

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
