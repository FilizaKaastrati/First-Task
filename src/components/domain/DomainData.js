import TitleIcon from "@mui/icons-material/Title";
import LanguageIcon from "@mui/icons-material/Language";
import CampaignOutlinedIcon from "@mui/icons-material/CampaignOutlined";
import EmojiObjectsOutlinedIcon from "@mui/icons-material/EmojiObjectsOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import StraightenOutlinedIcon from "@mui/icons-material/StraightenOutlined";
import ExtensionOutlinedIcon from "@mui/icons-material/ExtensionOutlined";
import PercentOutlinedIcon from "@mui/icons-material/PercentOutlined";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
const DomainData = [
  {
    id: "q1",
    title: "The TLD",
    icon: <ExtensionOutlinedIcon color="primary" fontSize="small" />,
    description:
      "Does the domain extension math the language of the domain name?",
  },
  {
    id: "q2",
    title: "Domain Length",
    icon: <StraightenOutlinedIcon color="primary" fontSize="small" />,
    description: "is the domain short enough to remember?",
  },
  {
    id: "q3",
    title: "Language",
    icon: <LanguageIcon color="primary" fontSize="small" />,
    description: "How complex is the actual domain name?",
  },
  {
    id: "q4",
    title: "International recognition",
    icon: <CircleOutlinedIcon color="primary" fontSize="small" />,
    description: "Can the domain name be used on an international scale?",
  },
  {
    id: "q5",
    title: "Search engine",
    icon: <SearchOutlinedIcon color="primary" fontSize="small" />,
    description: "Does the domain foolows search engine guidelines?",
  },
  {
    id: "q6",
    title: "Advertising Potential",
    icon: <CampaignOutlinedIcon color="primary" fontSize="small" />,
    description: "Could the domain be used for advertising campaings?",
  },
  {
    id: "q7",
    title: "Sales Opportunities",
    icon: <PercentOutlinedIcon color="primary" fontSize="small" />,
    description: "Can the domain name be used on an international scale?",
  },
  {
    id: "q8",
    title: "Typo susceptibility",
    icon: <TitleIcon color="primary" fontSize="small" />,
    description: "How high is the risk of mistyping the domain name?",
  },
  {
    id: "q9",
    title: "Bussines potential",
    icon: <EmojiObjectsOutlinedIcon color="primary" fontSize="small" />,
    description: "Can the domain be used as your company adress?",
  },
];

export default DomainData;
