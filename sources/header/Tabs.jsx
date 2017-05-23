import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import Tab from "./Tab";

class Tabs extends React.Component {
  static propTypes = {
    items: PropTypes.array.isRequired,
  };

  state = {
    activeTabIndex: null,
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
          <Tab
            onClick={this.onTabClick}
            index={tab.index}
            title={tab.title}
            className={classNames("tabs__item", { "tabs__item--active": activeTabIndex === tab.index })}
            key={tab.index}
          />
        ))}
      </div>
    );
  }
}

export default Tabs;