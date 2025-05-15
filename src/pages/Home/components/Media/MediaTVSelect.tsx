import { useState } from "react";
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { IoIosArrowDown } from "react-icons/io";

const rooms = ["Upstairs TV Room"];

const MediaTVSelect = () => {
  const [selectedRoom, setSelectedRoom] = useState(rooms[0]);

  return (
    <div className="relative text-white z-10 sm:w-50 w-full">
      <Listbox
        value={selectedRoom}
        onChange={(value) => {
          setSelectedRoom(value);
        }}
      >
        <ListboxButton className="flex w-full items-center justify-between gap-2 px-4 py-2 text-sm bg-[#57575799] rounded-md">
          <span>{selectedRoom}</span>
          <IoIosArrowDown className="text-[#42424299]" />
        </ListboxButton>
        <ListboxOptions className="absolute mt-2 w-full bg-[#57575799] text-white rounded-md shadow-lg">
          {rooms.map((room, index) => (
            <ListboxOption
              key={index}
              value={room}
              className="px-4 py-2 cursor-pointer text-sm hover:bg-gray-700"
            >
              {room}
            </ListboxOption>
          ))}
        </ListboxOptions>
      </Listbox>
    </div>
  );
};

export default MediaTVSelect;
