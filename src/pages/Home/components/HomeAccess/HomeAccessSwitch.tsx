import styled from "styled-components";
import { FaLock, FaLockOpen } from "react-icons/fa";

const HomeAccessSwitch = ({
  selectedValue,
  onChange,
  groupName,
}: {
  selectedValue: string;
  onChange: (value: string) => void;
  groupName: string;
}) => {
  return (
    <StyledWrapper>
      <div className="radio-inputs">
        <label>
          <input
            className="radio-input"
            type="radio"
            name={groupName}
            checked={selectedValue === "lock"}
            onChange={() => onChange("lock")}
          />
          <span className="radio-tile">
            <FaLock className="text-xl" />
          </span>
        </label>
        <label>
          <input
            className="radio-input"
            type="radio"
            checked={selectedValue === "unlock"}
            name={groupName}
            onChange={() => onChange("unlock")}
          />
          <span className="radio-tile">
            <FaLockOpen className="text-xl" />
          </span>
        </label>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  .radio-inputs {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .radio-inputs > * {
    margin: 6px;
    width: 50%;
  }

  .radio-input:checked + .radio-tile {
    border-color: #fff;
    box-shadow: 0 5px 10px rgba(255, 255, 255, 0.1);
    color: #ffffff;
  }

  .radio-input:checked + .radio-tile:before {
    transform: scale(1);
    opacity: 1;
    background-color: #fff;
    border-color: #fff;
  }

  .radio-input:checked + .radio-tile .radio-icon svg {
    fill: #fff;
  }

  .radio-input:checked + .radio-tile .radio-label {
    color: #fff;
  }

  .radio-input:focus + .radio-tile {
    border-color: #fff;
    // box-shadow: 0 5px 10px rgba(255, 255, 255, 0.1), 0 0 0 4px #3a6abf;
  }

  .radio-input:focus + .radio-tile:before {
    transform: scale(1);
    opacity: 1;
  }

  .radio-tile {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-height: 60px;
    border-radius: 0.5rem;
    border: 2px solid #73737399;
    background-color: #73737399;
    // box-shadow: 0 5px 10px rgba(255, 255, 255, 0.05);
    transition: 0.15s ease;
    cursor: pointer;
    position: relative;
  }

  .radio-tile:before {
    content: "";
    position: absolute;
    display: block;
    width: 0.75rem;
    height: 0.75rem;
    border: 2px solid #73737399;
    background-color: #73737399;
    border-radius: 50%;
    top: 0.25rem;
    left: 0.25rem;
    opacity: 0;
    transform: scale(0);
    transition: 0.25s ease;
  }

  .radio-tile:hover {
    border-color: #73737399;
  }

  .radio-tile:hover:before {
    transform: scale(1);
    opacity: 1;
  }

  .radio-icon svg {
    width: 2rem;
    height: 2rem;
    fill: #fff;
  }

  .radio-label {
    color: #8f8f8f;
    transition: 0.375s ease;
    text-align: center;
    font-size: 13px;
  }

  .radio-input {
    clip: rect(0 0 0 0);
    -webkit-clip-path: inset(100%);
    clip-path: inset(100%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  }
`;

export default HomeAccessSwitch;
