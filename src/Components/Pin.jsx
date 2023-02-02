import React, {forwardRef} from "react";
import PropTypes from "prop-types";

export const Pin = forwardRef(({ maxChar ,backSpaceHandler , handleFocus}, ref) => {
  const keyHandler = (e) => {
    e.keyCode === 8?backSpaceHandler(e) :handleFocus(e);
  }

  return (
   <input
    ref = {ref}
    data-testid="pin-input"
    maxLength={maxChar}
    onKeyUp = {(e)  =>keyHandler(e)} 
    />);
 }
);

Pin.propTypes = {
  maxChar : PropTypes.number.isRequired,
}
// Check maxChar prop here
