import React, { useState } from "react";
import {
  HomeIcon,
  UserGroupIcon,
  PlayIcon,
  SparklesIcon,
} from "@heroicons/react/24/solid";
import Icon from "./Icon";

const NavIcon = () => {
  const [selected, setSelected] = useState("home");
  return (
    <div className="flex gap-5">
      <Icon
        Hero={HomeIcon}
        selected={selected}
        setSelected={setSelected}
        name={"home"}
      />

      <Icon
        Hero={UserGroupIcon}
        selected={selected}
        setSelected={setSelected}
        name={"group"}
      />

      <Icon
        Hero={PlayIcon}
        selected={selected}
        setSelected={setSelected}
        name={"videos"}
      />

      <Icon
        Hero={SparklesIcon}
        selected={selected}
        setSelected={setSelected}
        name={"explore"}
      />
    </div>
  );
};

export default NavIcon;
