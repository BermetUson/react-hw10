import React from "react";
import styled from "styled-components";

const Switch = ({ value, onChange }) => {
  return (
    <DivContainer>
      <>
        <input
          className="react-switch-checkbox"
          id={`react-switch-new`}
          type="checkbox"
          checked={value}
          onChange={onChange}
        />
        <label className="react-switch-label" htmlFor={`react-switch-new`}>
          <span className={`react-switch-button`} />
        </label>
      </>
    </DivContainer>
  );
};

export default Switch;

const DivContainer = styled.div`
.react-switch-checkbox {
    height: 0;
    width: 0;
    visibility: hidden;
}

.react-switch-label {
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    width: 100px;
    height: 50px;
    margin-left: 100px;
    background: white;
    border-radius: 100px;
    position: relative;
    transition: background-color 0.2s;
}

.react-switch-label .react-switch-button {
    content: "";
    position: absolute;
    top: 2px;
    left: 2px;
    width: 45px;
    height: 45px;
    border-radius: 45px;
    transition: 0.2s;
    background: #334d67;
    box-shadow: 0 0 2px 0 rgba(10, 10, 10, 0.29);
}

.react-switch-checkbox:checked + .react-switch-label .react-switch-button {
    left: calc(100% - 2px);
    transform: translateX(-100%);
}

.react-switch-label:active .react-switch-button {
    width: 60px;
}
`;