import React from "react";
import { Paper, Tabs } from "@material-ui/core";
import Tab from "@material-ui/core/Tab";

export default ({ muscles, category, onSelect }) => {

  const index = category ? muscles.findIndex(grp => grp === category) + 1 : 0

  const onIndexSelect = (e,index) => onSelect(index === 0 ? undefined : muscles[index - 1])

  return (
    <Paper>
      <Tabs
        value={index}
        onChange={onIndexSelect}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="All" />

        {muscles.map(grp => (
          <Tab key={grp} label={grp} />
        ))}
      </Tabs>
    </Paper>
  );
};
