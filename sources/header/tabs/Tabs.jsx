import React from "react";
import PropTypes from "prop-types";
import Tab from "../tab/Tab";

import "./tabs.scss";

class Tabs extends React.Component {
  static propTypes = {
    items: PropTypes.array.isRequired,
    active: PropTypes.number,
  };

  state = {
    activeTabIndex: this.props.active || null,
  };

  onTabClick = (tabIndex) => {
    if (this.state.activeTabIndex !== tabIndex) {
      this.setState({ activeTabIndex: tabIndex });
      console.log(`Active tab: ${tabIndex}`);
    }
  };

  render() {
    const { items } = this.props;
    const { activeTabIndex } = this.state;

    return (
      <div className="tabs">
        {items.map(tab => (
          <span className="tabs__item" key={tab.index}>
            <Tab
              onClick={this.onTabClick}
              index={tab.index}
              title={tab.title}
              active={activeTabIndex === tab.index}
            />
          </span>
        ))}
      </div>
    );
  }
}

export default Tabs;