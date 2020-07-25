import ActionSheet from "../pages/action-sheet/ActionSheet";
import Alert from "../pages/alert/Alert";
import Avatar from "../pages/avatar/Avatar";
import Badge from "../pages/badge/Badge";
import Button from "../pages/button/Button";
import Card from "../pages/card/Card";
import Checkbox from "../pages/checkbox/Checkbox";
import Chip from "../pages/chip/Chip";
import Content from "../pages/content/Content";
import Datetime from "../pages/datetime/Datetime";
import Fab from "../pages/fab/Fab";
import Grid from "../pages/grid/Grid";
import Icons from "../pages/icons/Icons";
import InfiniteScroll from "../pages/infinite-scroll/InfiniteScroll";
import Input from "../pages/input/Input";
import Item from "../pages/item/Item";
import List from "../pages/list/List";
import ItemGroup from "../pages/item-group/ItemGroup";
import Loading from "../pages/loading/Loading";
import Menu from "../pages/menu/Menu";
import Modal from "../pages/modal/Modal";
import Nav from "../pages/nav/Nav";
import Note from "../pages/note/Note";
import Picker from "../pages/picker/Picker";
import Popover from "../pages/popover/Popover";
import Progress from "../pages/progress/Progress";
import Radio from "../pages/radio/Radio";
import Range from "../pages/range/Range";
import Refresher from "../pages/refresher/Refresher";
import Reorder from "../pages/reorder/Reorder";
import Searchbar from "../pages/searchbar/Searchbar";
import Segment from "../pages/segment/Segment";
import Select from "../pages/select/Select";
import SkeletonText from "../pages/skeleton-text/SkeletonText";
import Slides from "../pages/slides/Slides";
import Spinner from "../pages/spinner/Spinner";
import Tabs from "../pages/tabs/Tabs";
import Text from "../pages/text/Text";
import Thumbnail from "../pages/thumbnail/Thumbnail";
import Toast from "../pages/toast/Toast";
import Toggle from "../pages/toggle/Toggle";
import Toolbar from "../pages/toolbar/Toolbar";

const components = [
  {
    name: "Action Sheet",
    icon: "/assets/component-icon.svg",
    id: "action-sheet",
    component: ActionSheet,
  },
  {
    name: "Alert",
    icon: "/assets/component-icon.svg",
    id: "alert",
    component: Alert,
  },
  {
    name: "Avatar",
    icon: "/assets/component-icon.svg",
    id: "avatar",
    component: Avatar,
  },
  {
    name: "Badge",
    icon: "/assets/component-icon.svg",
    id: "badge",
    component: Badge,
  },
  {
    name: "Button",
    icon: "/assets/component-icon.svg",
    id: "button",
    component: Button,
  },
  {
    name: "Card",
    icon: "/assets/component-icon.svg",
    id: "card",
    component: Card,
  },
  {
    name: "Checkbox",
    icon: "/assets/component-icon.svg",
    id: "checkbox",
    component: Checkbox,
  },
  {
    name: "Chip",
    icon: "/assets/component-icon.svg",
    id: "chip",
    component: Chip,
  },
  {
    name: "Content",
    icon: "/assets/component-icon.svg",
    id: "content",
    component: Content,
  },
  {
    name: "Date & Time Picker",
    icon: "/assets/component-icon.svg",
    id: "datetime",
    component: Datetime,
  },
  {
    name: "Floating Action Button",
    icon: "/assets/component-icon.svg",
    id: "fab",
    component: Fab,
  },
  {
    name: "Grid",
    icon: "/assets/component-icon.svg",
    id: "grid",
    component: Grid,
  },
  {
    name: "Icons",
    icon: "/assets/component-icon.svg",
    id: "icons",
    component: Icons,
  },
  {
    name: "Infinite Scroll",
    icon: "/assets/component-icon.svg",
    id: "infinite-scroll",
    component: InfiniteScroll,
  },
  {
    name: "Input",
    icon: "/assets/component-icon.svg",
    id: "input",
    component: Input,
  },
  {
    name: "Item",
    icon: "/assets/component-icon.svg",
    id: "item",
    component: Item,
  },
  {
    name: "Item Group",
    icon: "/assets/component-icon.svg",
    id: "item-group",
    component: ItemGroup,
  },
  {
    name: "List",
    icon: "/assets/component-icon.svg",
    id: "list",
    component: List,
  },
  {
    name: "Loading",
    icon: "/assets/component-icon.svg",
    id: "loading",
    component: Loading,
  },
  {
    name: "Menu",
    icon: "/assets/component-icon.svg",
    id: "menu",
    component: Menu,
  },
  {
    name: "Modal",
    icon: "/assets/component-icon.svg",
    id: "modal",
    component: Modal,
  },
  {
    name: "Navigation",
    icon: "/assets/component-icon.svg",
    id: "nav",
    component: Nav,
  },
  {
    name: "Note",
    icon: "/assets/component-icon.svg",
    id: "note",
    component: Note,
  },
  {
    name: "Picker",
    icon: "/assets/component-icon.svg",
    id: "picker",
    component: Picker,
  },
  {
    name: "Popover",
    icon: "/assets/component-icon.svg",
    id: "popover",
    component: Popover,
  },
  {
    name: "Progress Bar",
    icon: "/assets/component-icon.svg",
    id: "progress",
    component: Progress,
  },
  {
    name: "Radio",
    icon: "/assets/component-icon.svg",
    id: "radio",
    component: Radio,
  },
  {
    name: "Range",
    icon: "/assets/component-icon.svg",
    id: "range",
    component: Range,
  },
  {
    name: "Refresher",
    icon: "/assets/component-icon.svg",
    id: "refresher",
    component: Refresher,
  },
  {
    name: "Reorder",
    icon: "/assets/component-icon.svg",
    id: "reorder",
    component: Reorder,
  },
  {
    name: "Searchbar",
    icon: "/assets/component-icon.svg",
    id: "searchbar",
    component: Searchbar,
  },
  {
    name: "Segment",
    icon: "/assets/component-icon.svg",
    id: "segment",
    component: Segment,
  },
  {
    name: "Select",
    icon: "/assets/component-icon.svg",
    id: "select",
    component: Select,
  },
  {
    name: "Skeleton Text",
    icon: "/assets/component-icon.svg",
    id: "skeleton-text",
    component: SkeletonText,
  },
  {
    name: "Spinner",
    icon: "/assets/component-icon.svg",
    id: "spinner",
    component: Spinner,
  },
  {
    name: "Slides",
    icon: "/assets/component-icon.svg",
    id: "slides",
    component: Slides,
  },
  {
    name: "Tabs",
    icon: "/assets/component-icon.svg",
    id: "tabs",
    component: Tabs,
  },
  {
    name: "Text",
    icon: "/assets/component-icon.svg",
    id: "text",
    component: Text,
  },
  {
    name: "Thumbnail",
    icon: "/assets/component-icon.svg",
    id: "thumbnail",
    component: Thumbnail,
  },
  {
    name: "Toast",
    icon: "/assets/component-icon.svg",
    id: "toast",
    component: Toast,
  },
  {
    name: "Toggle",
    icon: "/assets/component-icon.svg",
    id: "toggle",
    component: Toggle,
  },
  {
    name: "Toolbar",
    icon: "/assets/component-icon.svg",
    id: "toolbar",
    component: Toolbar,
  },
];

export const getComponents = () => {
  return components;
};
