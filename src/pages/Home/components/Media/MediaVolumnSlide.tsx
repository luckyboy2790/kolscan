import styled from "styled-components";
import { FaMinus, FaPlus } from "react-icons/fa";
import { IoVolumeMute } from "react-icons/io5";

const MediaVolumnSlide = () => {
  return (
    <StyledWrapper>
      <div className="flex items-center">
        <IoVolumeMute className="text-2xl text-white" />
      </div>
      <div className="flex justify-between items-center gap-5 grow">
        <FaMinus className="text-white text-xl" />
        <label className="slider">
          <input type="range" className="level" min="0" max="100" />
        </label>
        <FaPlus className="text-white text-xl" />
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  width: 100%;
  gap: 30px;

  .slider {
    flex-grow: 1;
    --slider-width: 100%;
    --slider-height: 8px;
    --slider-bg: rgb(255, 255, 255, 0.8);
    --slider-border-radius: 999px;
    --level-color: #00e8ff75;
    --level-transition-duration: 0.1s;
    --icon-margin: 15px;
    --icon-color: var(--slider-bg);
    --icon-size: 25px;
  }

  .slider {
    cursor: pointer;
    display: inline-flex;
    flex-direction: row-reverse;
    align-items: center;
  }

  .slider .level {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    width: var(--slider-width);
    height: var(--slider-height);
    background: var(--slider-bg);
    overflow: hidden;
    border-radius: var(--slider-border-radius);
    transition: height var(--level-transition-duration);
    cursor: inherit;
  }

  .slider .level::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 0;
    height: 0;
    box-shadow: -400px 0 0 400px var(--level-color);
  }

  .slider:hover .level {
    height: calc(var(--slider-height) * 1.5);
  }
`;

export default MediaVolumnSlide;
