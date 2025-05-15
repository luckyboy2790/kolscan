import { useState } from "react";
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { IoIosArrowDown } from "react-icons/io";

const rooms = ["Master Bedroom", "Living Room", "Guest Room", "Kitchen"];

const RoomTempSelect = () => {
  const [selectedRoom, setSelectedRoom] = useState(rooms[0]);

  return (
    <div className="relative text-white z-10 sm:w-45 w-full">
      <Listbox
        value={selectedRoom}
        onChange={(value) => {
          setSelectedRoom(value);
        }}
      >
        <ListboxButton className="flex items-center justify-between gap-2 px-4 py-2 text-sm bg-[#57575799] rounded-md w-full whitespace-nowrap">
          <span>{selectedRoom}</span>
          <IoIosArrowDown className="text-[#42424299]" />
        </ListboxButton>
        <ListboxOptions className="absolute mt-2 w-full bg-[#57575799] text-white rounded-md shadow-lg">
          {rooms.map((room, index) => (
            <ListboxOption
              key={index}
              value={room}
              className="px-4 py-2 cursor-pointer text-sm hover:bg-[#57575799]"
            >
              {room}
            </ListboxOption>
          ))}
        </ListboxOptions>
      </Listbox>
    </div>
  );
};

export default RoomTempSelect;
