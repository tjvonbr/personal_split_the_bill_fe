import React from "react";
import { Tab } from "semantic-ui-react";

import AddPerson from './AddPerson'


const panes = [
  {
    menuItem: { key: "home", icon: "users", size: 'large', content: "Add Person" },
    render: () => (
      <Tab.Pane>
        <AddPerson />
      </Tab.Pane>
    )
  },
  {
    menuItem: { key: "user", icon: "food", content: "Add Plate" },
    render: () => (
      <Tab.Pane>
        {/* <CharacterList /> */}
      </Tab.Pane>
    )
  },
  {
    menuItem: { key: "location", icon: "plus cart", content: "Total" },
    render: () => (
      <Tab.Pane>
        {/* <LocationsList /> */}
      </Tab.Pane>
    )
  }
];

export default function TableNav() {
  return <Tab panes={panes} />;
}
