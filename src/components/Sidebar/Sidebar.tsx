import { ArrowRight } from "../../assets/svg-images/ArrowRight";
import { CalendarIcon } from "../../assets/svg-images/CalendarIcon";
import { ClipboardIcon } from "../../assets/svg-images/ClipboardIcon";
import { GearIcon } from "../../assets/svg-images/GearIcon";
import { HumanIcon } from "../../assets/svg-images/HumanIcon";
import { ListIcon } from "../../assets/svg-images/ListIcon";
import { PlanetIcon } from "../../assets/svg-images/PlanetIcon";
import { QuestionMarkIcon } from "../../assets/svg-images/QuestionMarkIcon";
import { TreeStructureIcon } from "../../assets/svg-images/TreeStructureIcon";
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
  return (
    <aside className="navigation">
      <div className="content-tabs">
        {contentTabs.map(({ id, Icon }) => (
          <button
            key={id}
            className={`content-tab ${id === "treeStructure" ? "active-option" : ""}`}
            type="button"
          >
            <span>
              <Icon />
            </span>
          </button>
        ))}
      </div>

      <div className="service-tabs">
        {serviceTabs.map(({ id, Icon }) => (
          <button key={id} className={`service-tab`} type="button">
            <span>
              <Icon />
            </span>
          </button>
        ))}
      </div>
    </aside>
  );
};
