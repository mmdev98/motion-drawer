"use client";

import { Tab as _Tab } from "./tab";
import { Group } from "./group";
import { List } from "./list";
import { Panels } from "./panels";
import { Panel } from "./panel";

const Tab = Object.assign(_Tab, {
  Group,
  List,
  Panels,
  Panel
});

export { Tab };
