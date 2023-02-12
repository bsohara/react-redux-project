import React from "react";
import * as MdIcons from "react-icons/md";
import * as TbIcon from "react-icons/tb";
import * as FaIcons from "react-icons/fa";
import * as GiIcons from "react-icons/gi";

function Sidebar() {
  const mainLinks = [
    {
      icon: <MdIcons.MdHomeFilled className="text-xl" />,
      name: "Home",
    },
    {
      icon: <FaIcons.FaRegCompass className="text-xl" />,
      name: "Explore",
    },
    {
      icon: <MdIcons.MdOutlineSlowMotionVideo className="text-xl" />,
      name: "Shorts",
    },
    {
      icon: <MdIcons.MdSubscriptions className="text-xl" />,
      name: "Subscriptions",
    },
  ];

  const secondaryLinks = [
    {
      icon: <MdIcons.MdOutlineVideoLibrary className="text-xl" />,
      name: "Library",
    },
    {
      icon: <MdIcons.MdHistory className="text-xl" />,
      name: "History",
    },
    {
      icon: <MdIcons.MdOutlineSmartDisplay className="text-xl" />,
      name: "Your Videos",
    },
    {
      icon: <MdIcons.MdOutlineWatchLater className="text-xl" />,
      name: "Watch Later",
    },
    {
      icon: <MdIcons.MdThumbUpOffAlt className="text-xl" />,
      name: "Liked Videos",
    },
  ];

  const subscriptionLinks = [
    {
      icon: <TbIcon.TbMusic className="text-xl" />,
      name: "Music",
    },
    {
      icon: <MdIcons.MdOutlineSportsVolleyball className="text-xl" />,
      name: "Sport",
    },
    {
      icon: <TbIcon.TbDeviceGamepad2 className="text-xl" />,
      name: "Gaming",
    },
    {
      icon: <GiIcons.GiFilmStrip className="text-xl" />,
      name: "Films",
    },
  ];

  const helpLinks = [
    {
      icon: <MdIcons.MdSettings className="text-xl" />,
      name: "Settings",
    },
    {
      icon: <MdIcons.MdOutlinedFlag className="text-xl" />,
      name: "Report history",
    },
    {
      icon: <MdIcons.MdOutlineHelpOutline className="text-xl" />,
      name: "Help",
    },
    {
      icon: <MdIcons.MdOutlineFeedback className="text-xl" />,
      name: "Send feedback",
    },
  ];

  const textLinks = [
    [
      "About",
      "Press",
      "Copyright",
      "Contact us",
      "Creator",
      "Advertise",
      "Developers",
    ],
    [
      "Terms",
      "Privacy",
      "Policy & Safety",
      "How YouTube works",
      "Test new features",
    ],
  ];

  return (
    <div className="w-2/12 bg-[#212121] pr-5 overflow-auto pb-8 sidebar">
      <ul className="flex flex-col border-b-2 border-gray-700">
        {mainLinks.map(({ icon, name }) => {
          return (
            <li
              key={name}
              className={`pl-6 py-3 hover:bg-zinc-600 ${
                name === "Home" ? "bg-slate-600" : ""
              }`}
            >
              <a href="#" className="flex items-center gap-5">
                {icon}
                <span className="text-sm-tracking-wider">{name}</span>
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="flex flex-col border-b-2 border-gray-700">
        {secondaryLinks.map(({ icon, name }) => {
          return (
            <li key={name} className={`pl-6 py-3 hover:bg-zinc-600`}>
              <a href="#" className="flex items-center gap-5">
                {icon}
                <span className="text-sm-tracking-wider">{name}</span>
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="flex flex-col border-b-2 border-gray-700">
        {subscriptionLinks.map(({ icon, name }) => {
          return (
            <li key={name} className={`pl-6 py-3 hover:bg-zinc-600`}>
              <a href="#" className="flex items-center gap-5">
                {icon}
                <span className="text-sm-tracking-wider">{name}</span>
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="flex flex-col border-b-2 border-gray-700">
        {helpLinks.map(({ icon, name }) => {
          return (
            <li key={name} className={`pl-6 py-3 hover:bg-zinc-600`}>
              <a href="#" className="flex items-center gap-5">
                {icon}
                <span className="text-sm-tracking-wider">{name}</span>
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="flex gap-2 flex-wrap text-sm p-4 text-zinc-400">
        {textLinks[0].map((name) => {
          return <li key={name}>{name}</li>;
        })}
      </ul>
      <span className="px-4 text-sm text-zinc-400">&copy; 2022 Google</span>
      <p className="px-4 pt-3 text-sm text-zinc-400">
        This clone is intended for education purpose only.
      </p>
    </div>
  );
}

export default Sidebar;
