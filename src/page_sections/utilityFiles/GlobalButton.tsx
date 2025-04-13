import React from "react";
import GlobalButton from "../../styleSheets/global_button.module.scss"

type ButtonProp = {
    text: string;
    onClick?: ()=> void;
};

const PageButton: React.FC<ButtonProp> = ({text, onClick}) => {
    return (
      <>
      <div className={GlobalButton.form_button}>
        <button type = "submit" onClick={onClick}>
            {text}
        </button>
    </div>
      </>
    );
  };
  
  export default PageButton;