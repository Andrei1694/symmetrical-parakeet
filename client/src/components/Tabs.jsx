import { Tab } from "@headlessui/react";
import { useState } from "react";
import Pill from "./Pill";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function IntrestCard() {
  return (
    <div className="w-[295px] h-[88px] flex justify-center items-center">
      <div className="flex w-full">
        <div className="flex justify-center items-center shadow rounded-[10px] mr-4 p-3">
          <img
            src="https://images.unsplash.com/photo-1516980907201-943c13a8d03c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            alt=""
            className="max-w-[59px] max-h-[59px]"
          />
        </div>
        <div className="flex flex-col justify-center itemns-center w-full">
          <h5 className="text-gray-150 leading-6">"Awaken, My Love!"</h5>
          <div className="flex justify-start items-center font-lato">
            <span className="text-gray-150 font-extrabold mr-2">$19.99</span>
            <span className="font-bold text-gray-40 text-xs line-through mr-auto">
              $39.99
            </span>
            <Pill>50% OFF</Pill>
          </div>
        </div>
      </div>
    </div>
  );
}
export default function Tabs() {
  const renderTabs = () => {
    const tabs = [1, 2, 3];
    return tabs.map((tab) => (
      <Tab
        className={({ selected }) =>
          classNames(
            "mr-10",
            selected
              ? "text-black font-extrabold font-lato leading-5 border-b-[2px] border-black"
              : "text-gray-40 leading-6"
          )
        }
      >
        Music
      </Tab>
    ));
  };
  return (
    <Tab.Group>
      <div className="pl-4 pt-[24px]">
        <Tab.List className="flex">{renderTabs()}</Tab.List>
      </div>
      <div className="pl-4 pt-[24px] pb-4">
        <Tab.Panels>
          <Tab.Panel>
            <div className="mb-4">
              <IntrestCard />
            </div>

            <div className="mb-4">
              <IntrestCard />
            </div>
            <div className="mb-4">
              <IntrestCard />
            </div>
          </Tab.Panel>
          <Tab.Panel>Content 2</Tab.Panel>
          <Tab.Panel>Content 3</Tab.Panel>
        </Tab.Panels>
      </div>
    </Tab.Group>
  );
}
