import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { ArrowRight } from "../../assets/svg-images/ArrowRight";
import { CalendarIcon } from "../../assets/svg-images/CalendarIcon";
import { ClipboardIcon } from "../../assets/svg-images/ClipboardIcon";
import { GearIcon } from "../../assets/svg-images/GearIcon";
import { HumanIcon } from "../../assets/svg-images/HumanIcon";
import { ListIcon } from "../../assets/svg-images/ListIcon";
import { PlanetIcon } from "../../assets/svg-images/PlanetIcon";
import { QuestionMarkIcon } from "../../assets/svg-images/QuestionMarkIcon";
import { TreeStructureIcon } from "../../assets/svg-images/TreeStructureIcon";
import {
  setActiveSidebarItem,
  toggleSidebar,
} from "../../features/nav/navSlice";
import "./Sidebar.scss";

const contentTabs = [
  { id: "human", Icon: HumanIcon },
  { id: "treeStructure", Icon: TreeStructureIcon },
  { id: "list", Icon: ListIcon },
  { id: "clipboard", Icon: ClipboardIcon },
  { id: "calendar", Icon: CalendarIcon },
  { id: "gear", Icon: GearIcon },
];

const serviceTabs = [
  { id: "questionMark", Icon: QuestionMarkIcon },
  { id: "planet", Icon: PlanetIcon },
];

export const Sidebar = () => {
  const dispatch = useAppDispatch();
  const activeSidebarItem = useAppSelector(
    (state) => state.nav.activeSidebarItem,
  );
  const isSidebarCollapsed = useAppSelector(
    (state) => state.nav.isSideBarCollapsed,
  );

  return (
    <aside className={`navigation ${isSidebarCollapsed ? "collapsed" : ""}`}>
      <div className="content-tabs">
        <button
          className="show-hide-button"
          type="button"
          onClick={() => dispatch(toggleSidebar())}
        >
          <ArrowRight />
        </button>

        {contentTabs.map(({ id, Icon }) => (
          <button
            key={id}
            className={`content-tab ${id === activeSidebarItem ? "active-option" : ""}`}
            type="button"
            onClick={() => dispatch(setActiveSidebarItem(id))}
          >
            <span>
              <Icon />
            </span>
          </button>
        ))}
      </div>

      <div className="service-tabs">
        {serviceTabs.map(({ id, Icon }) => (
          <button
            key={id}
            className={`service-tab ${id === activeSidebarItem ? "active-option" : ""}`}
            type="button"
            onClick={() => dispatch(setActiveSidebarItem(id))}
          >
            <span>
              <Icon />
            </span>
          </button>
        ))}
      </div>
    </aside>
  );
};
