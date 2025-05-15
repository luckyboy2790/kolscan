import styled from "styled-components";
import WeatherPart from "./WeatherPart";
import TimePart from "./WeatherTimePart";

const WeatherCard = () => {
  return (
    <StyledWrapper>
      <div className="cardContainer">
        <div className="card transition-all duration-300 hover:!bg-[#47474799] shadow-2xl hover:scale-[1.02] hover:shadow-indigo-500/20">
          <WeatherPart />
          <TimePart />
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  height: 100%;

  .cardContainer {
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .card {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 20px;
    border-radius: 10px;
    gap: 20px;
    backdrop-filter: blur(30px);
    background-color: rgba(191, 191, 191, 0.9);
    border: 1px solid rgba(255, 255, 255, 0.089);
    cursor: pointer;
  }

  .city {
    font-weight: 700;
    font-size: 0.7em;
    letter-spacing: 1.2px;
    color: white;
  }

  .weather {
    font-weight: 500;
    font-size: 0.4em;
    letter-spacing: 1.2px;
    color: rgb(255, 255, 255);
  }

  .temp {
    font-size: 1em;
    color: white;
  }

  .minmaxContainer {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .min,
  .max {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    padding: 0px 20px;
    gap: 4px;
  }

  .max {
    align-items: flex-start;
    border-left: 2px solid white;
  }

  .maxHeading,
  .minHeading {
    font-size: 0.5em;
    font-weight: 600;
    color: white;
  }

  .maxTemp,
  .minTemp {
    font-size: 0.4em;
    font-weight: 500;
    color: rgb(255, 255, 255);
  }
`;

export default WeatherCard;
