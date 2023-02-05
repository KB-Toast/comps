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
  ...rest
}) {
  const classes = className(
    rest.className,
    "flex items-center px-3 py-1.5 border",
    {
      "border-blue-500 bg-blue-500 text-white": primary,
      "border-gray-900 bg-gray-900 text-white": secondary,
      "border-green-500 bg-green-500 text-white": success,
      "border-yellow-400 bg-yellow-400 text-white": warning,
      "border-red-500 bg-red-500 text-white": danger,
      "rounded-full": rounded,
      "bg-white": outline,
      "text-blue-500": outline && primary,
      "text-gray-900": outline && secondary,
      "text-green-500": outline && success,
      "text-yellow-400": outline && warning,
      "text-red-500": outline && danger,
    }
  );

  return (
    <button {...rest} className={classes}>
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
