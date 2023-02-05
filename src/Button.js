import PropTypes from "prop-types";
import className from "classnames";
// preference from Stephen, default is 'import classnames'

function Button({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
}) {
  return (
    <button className="px-3 py-1.5 border border-blue-600 bg-blue-500 text-white">
      {children}
    </button>
  );
}

Button.propTypes = {
  // custom validator
  checkVariationValue: ({ primary, secondary, success, warning, danger }) => {
    // "fancy" js, Number(true) is 1, Number(!!undefined) is 0. Only 1 at a time so we can't have anything greater than 1
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!success) +
      Number(!!warning) +
      Number(!!danger);

    if (count > 1) {
      return new Error(
        "Only one of primary, secondary, success, warning, danger can be true"
      );
    }
  },
};

// underlying element, <button> wrapped inside component
// instead of passing text as props, we can use children "inside" <Button>
// using "npm prop-types" to double check that we don't have both "primary" and "secondary".
// "prop-types" used to be very popular, nowadays people are mostly using typescript
// probably best to learn "basic" dev skills first, will use typescript in the future :)

export default Button;
