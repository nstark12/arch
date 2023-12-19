import NavLinks from "./NavLinks";

const MenuOverlay = () => {
  return (
    <ul className="flex flex-col py-4 items-center bg-primary text-white gap-4 text-lg">
      <NavLinks />
    </ul>
  );
};

export default MenuOverlay;
