import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  Bars4Icon,
  GlobeAmericasIcon,
  NewspaperIcon,
  PhoneIcon,
  RectangleGroupIcon,
  SquaresPlusIcon,
  SunIcon,
  TagIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";
import { Link, useNavigate } from "react-router-dom";
import LogoImage from "../assets/img/AWS-2.png";

const navListMenuItems = [
  {
    title: "SecurityBusiness",
    description: "Find the perfect solution for your needs.",
    icon: SquaresPlusIcon,
    link: "/SecurityBusiness",
  },
  {
    title: "Build Aws",
    description: "Meet and learn about our dedication",
    icon: UserGroupIcon,
    link: "/BuildAws",
  },
  {
    title: "Backup-Dısaster",
    description: "Find the perfect solution for your needs.",
    icon: Bars4Icon,
    link: "/BachupDisaster",
  },
  {
    title: "Cost Revıew",
    description: "Learn how we can help you achieve your goals.",
    icon: SunIcon,
    link: "ConstReview",
  },
  {
    title: "Storage Solutıons",
    description: "Reach out to us for assistance or inquiries",
    icon: GlobeAmericasIcon,
    link: "/StorageSolutions",
  },
  {
    title: "fullstack",
    description: "Find the perfect solution for your needs.",
    icon: PhoneIcon,
    link: "/fullstack",
  },
  {
    title: "Cloud Mıgratıon",
    description: "Read insightful articles, tips, and expert opinions.",
    icon: NewspaperIcon,
    link: "/CloudMig",
  },
  {
    title: "Performance Optımısatıon",
    description: "Find the perfect solution for your needs.",
    icon: RectangleGroupIcon,
    link: "/Performance",
  },
  {
    title: "Aws Well-Archıtected Revıew",
    description: "Explore limited-time deals and bundles",
    icon: TagIcon,
    link: "/AwsWellAr",
  },
];

function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const renderItems = navListMenuItems.map(
    ({ icon, title, description, link }, key) => (
      // eslint-disable-next-line no-undef
      <Link to={link} className="font-medium " key={key}>
        <MenuItem className=" flex items-center gap-3 ">
          <div className="flex items-center justify-center  !bg-blue-gray-50 p-2">
            {" "}
            {React.createElement(icon, {
              strokeWidth: 2,
              className: "h-6 text-white w-6",
            })}
          </div>
          <div>
            <Typography
              variant="h6"
              color="red"
              className="flex items-center text-sm font-bold"
            >
              {title}
            </Typography>
            <Typography
              variant="paragraph"
              className="text-xs !font-medium text-blue-gray-500"
            >
              {description}
            </Typography>
          </div>
        </MenuItem>
      </Link>
    )
  );

  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Typography as="div" variant="small" className="font-medium">
            <ListItem
              className="flex items-center gap-2 py-2 pr-6 font-medium text-slate-200 bg-gray-800"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              Services
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden max-w-screen-xl rounded-xl lg:block  ">
          <ul className="grid grid-cols-3 gap-y-2 outline-none outline-0">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden ">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </React.Fragment>
  );
}

function NavList() {
  const navigate = useNavigate();

  return (
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
      <Typography
        as={Link}
        to="/"
        variant="small"
        color="red"
        className="font-medium"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-6">Home</ListItem>
      </Typography>
      <NavListMenu />
      <Typography as="div" variant="small" color="red" className="font-medium">
        <ListItem
          className="flex items-center gap-2 py-2 pr-6"
          onClick={() => navigate("/contact")}
        >
          Contact Us
        </ListItem>
      </Typography>
    </List>
  );
}

export function NavbarWithMegaMenu() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <Navbar className=" bg-black mx-auto max-w-full border-hidden rounded-none">
      <div className="flex items-center justify-around text-red-200">
        <img
          src={LogoImage}
          alt="MK-AWS Logo"
          className="mr-4 cursor-pointer lg:ml-2"
          style={{ maxWidth: "100px" }} // İsteğe bağlı olarak genişliği ayarlayabilirsiniz
        />
        <Typography
          as="a"
          href="#"
          variant="h6"
          className="mr-4 cursor-pointer py-1.5 lg:ml-2 font-serif text-2xl text-yellow-400"
        >
          Cloudifiers TM
        </Typography>

        <div className="hidden lg:block">
          <NavList />
        </div>
        {/* <div className="hidden gap-3 lg:flex">
          <Button variant="text" size="sm" color="blue-gray">
            Log In
          </Button>
          <Button variant="gradient" size="sm">
            Sign In
          </Button>
        </div> */}
        <IconButton
          variant="text"
          color="blue-gray"
          className="lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
        <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden ">
          <Button variant="outlined" size="sm" color="blue-gray" fullWidth>
            Log In
          </Button>
          <Button variant="gradient" size="sm" fullWidth>
            Sign In
          </Button>
        </div>
      </Collapse>
    </Navbar>
  );
}
