import Link from "./Link";

const Sidebar = () => {
    const links = [
        {label: "Dropdown", path: '/'},
        {label: "Accordion", path: '/accordion'},
        {label: "Button", path: "/button"},
        {label: "Modal", path: "/modal"},
        {label: "Table", path: "/table"},
        {label: "Counter", path: "/counter"}
    ];

    const renderLinks = links.map(link => {
        return <Link key={link.label} to={link.path} className="m-6" activeClassName="font-bold border-l-4 border-blue-500 pl-2 items-start" >{link.label}</Link>
    })
    return (
        <div className="sticky top-0 overflow-y-scroll flex flex-col">{renderLinks}</div>
    );
}

export default Sidebar;