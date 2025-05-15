import React, { useEffect } from "react";
import styled from "styled-components";
import { CgArrowLongDownC, CgArrowLongUpC } from "react-icons/cg";
import { BsSun, BsSnow2, BsPower } from "react-icons/bs";
import { BiSolidLeaf } from "react-icons/bi";
import RoomTempSelect from "./RoomTempSelect";

interface WrapperProps {
  status: "cooling" | "heating";
}

const RoomTemp = ({
  currentTemp,
  targetTemp,
}: {
  currentTemp: number;
  targetTemp: number;
}) => {
  const [status, setStatus] = React.useState<"cooling" | "heating">("heating");
  const [targetTempState, setTargetTempState] =
    React.useState<number>(targetTemp);

  useEffect(() => {
    const result: number = targetTempState - currentTemp;

    if (result > 0) {
      setStatus("heating");
    } else {
      setStatus("cooling");
    }
  }, [targetTempState]);

  return (
    <StyledWrapper status={status}>
      <div className="card h-full transition-all duration-300 hover:!bg-[#3b3b3baf]">
        <div className="heading sm:flex-row flex-col">
          <p className="text-xl sm:w-auto w-full font-black">CLIMATE</p>
          <RoomTempSelect />
        </div>
        <div className="flex flex-col justify-center items-center gap-6 w-full grow">
          <div className="w-full md:py-5 md:px-6 px-3 py-2.5">
            <h6 className="md:text-lg text-base text-right w-full text-neutral-300">
              Current Temp is {currentTemp}°
            </h6>
          </div>
          <div className="w-full md:py-5 py-2.5">
            <h1 className="md:text-9xl text-7xl text-center text-neutral-300">
              {targetTempState}°
            </h1>
          </div>
          <div>
            {status === "heating" ? (
              <p className="!text-red-500">heating</p>
            ) : (
              <p className="!text-blue-500">cooling</p>
            )}
          </div>
        </div>
        <div className="h-auto flex justify-between">
          <div
            className="flex justify-center items-center w-1/2 py-3 text-blue-500 text-4xl"
            onClick={() => setTargetTempState(targetTempState - 1)}
          >
            <CgArrowLongDownC />
          </div>
          <div
            className="flex justify-center items-center w-1/2 py-3 text-red-500 text-4xl"
            onClick={() => setTargetTempState(targetTempState + 1)}
          >
            <CgArrowLongUpC />
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex justify-center items-center w-1/4 py-4 text-4xl text-neutral-500">
            <BsPower />
          </div>
          <div className="flex justify-center items-center w-1/4 py-4 text-4xl text-red-500">
            <BsSun />
          </div>
          <div className="flex justify-center items-center w-1/4 py-4 text-4xl text-blue-500">
            <BsSnow2 />
          </div>
          <div className="flex justify-center items-center w-1/4 py-4 text-4xl text-emerald-500">
            <BiSolidLeaf />
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div<WrapperProps>`
  height: 100%;

  .card {
    position: relative;
    width: 100%;
    background: linear-gradient(-45deg, #8f8f8f8f 0%, #bdbdbdbf 100%);
    color: #81818144;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 30px;
    padding: 40px 14px;
    border-radius: 8px;
    cursor: pointer;
  }

  .card::before {
    content: "";
    position: absolute;
    inset: 0;
    left: 0;
    margin: auto;
    width: 100%;
    height: 101.3%;
    border-radius: 10px;
    background-color: ${({ status }) =>
      status === "cooling" ? "#0080ff80" : "#d8000080"};
    transition: background-color 0.8s ease-in-out, transform 0.8s ease-in-out;
    z-index: -10;
    pointer-events: none;
    transition: all 0.8s cubic-bezier(0.175, 0.95, 0.9, 1.275);
    box-shadow: 0px 20px 30px hsla(0, 0%, 0%, 0.521);
  }

  .heading {
    text-transform: capitalize;
    color: white;
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
  }

  .card p:last-child {
    color: #fa0000;
    font-weight: 900;
  }

  .card:hover::after {
    transition: all 0.2s cubic-bezier(0.175, 0.285, 0.82, 1.275);
  }

  .card:hover::before {
    transform: scaleX(1.02) scaleY(1.02);
    box-shadow: ${({ status }) =>
      status === "cooling"
        ? "0px 0px 30px 0px hsla(210, 100%, 50%, 0.5)"
        : "0px 0px 30px 0px hsla(0, 100%, 50%, 0.5)"};
  }
`;

export default RoomTemp;
