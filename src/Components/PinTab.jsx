import React from "react";
import { useRef , useState } from "react";
import PropTypes from "prop-types";
import {Pin} from "./Pin";


export const PinTab = ({ length, maxChar, setOtp }) => {

  const [pinlength] = useState(new Array(length).fill(""));
  let inputRef = useRef([]);
  const [otpValue] = useState(new Array(length).fill(""));

  //focus
 const handleFocus = (e,index) => {
  otpValue[index] = e.target.value;
  if(e.target.value.length === maxChar && index < length -1 ){
    inputRef.current[index + 1].focus();

  }
  setOtp(otpValue.join(" "));
 }

 //BackspaceHandler
 const backSpaceHandler = (e,index) => {
  otpValue[index] = e.target.value;
  if(e.target.value.length === 0 && index > 0){
    inputRef.current[index - 1].focus();

  }
  setOtp(otpValue.join(" "));

 }

 //Paster
 const pasteHandler = (e) => {
  const data = e.clipboardData.getData("Text").split("").filter((_,index) => {
    return index < length ;
  })
 data.forEach((el,index) => {
  otpValue[index] = el;
  inputRef.current[index].value = el;
  if(e.target.value.length === maxChar && index < length -1 ){
    inputRef.current[index + 1].focus();

  }
  setOtp(otpValue.join(" "));
   })
 }
 
return (
  <div
   onPaste ={pasteHandler}
   data-testid="pin-tab">
    {pinlength.map((_ , index ) => {
      return(
        <Pin
        ref ={(e) => {
          inputRef.current[index] = e ;

        }}
        key = {index}
        maxChar ={maxChar}
        backSpaceHandler = {(e) =>backSpaceHandler(e,index)}
        handleFocus = {(e) => handleFocus(e,index)}
        />
      );
    })}
    
    {/* Add Pin component here  */}
    </div>
  )
};
PinTab.propTypes ={
  length : PropTypes.number.isRequired,
  maxChar : PropTypes.number.isRequired,
}
// Check length and maxChar props here
