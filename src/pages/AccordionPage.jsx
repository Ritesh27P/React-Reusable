import Accordion from "../components/Accordion";

const AccordionPage = () => {
    const items = [
        {
            id: "123",
            label: "Can I use React?",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        },
        {
            id: "3764",
            label: "Can I use JS?",
            content: "Neque viverra justo nec ultrices dui sapien eget mi proin. Eget est lorem ipsum dolor sit amet consectetur adipiscing elit. Purus in massa tempor nec feugiat nisl pretium. Nisl pretium fusce id velit. Mi in nulla posuere sollicitudin aliquam ultrices sagittis orci a. Diam in arcu cursus euismod. Tortor dignissim convallis aenean et tortor at risus viverra adipiscing. Cursus sit amet dictum sit amet justo donec enim diam. Nisi scelerisque eu ultrices vitae. Vitae turpis massa sed elementum tempus egestas. Pellentesque massa placerat duis ultricies lacus sed. Lacus vel facilisis volutpat est velit. Vitae turpis massa sed elementum. Purus in massa tempor nec.",
        },
        {
            id: "674663",
            label: "Can I use Express?",
            content: "Semper viverra nam libero justo laoreet sit amet cursus sit. Amet purus gravida quis blandit. Ultricies mi eget mauris pharetra et ultrices neque ornare. Gravida rutrum quisque non tellus orci ac auctor. Sed nisi lacus sed viverra tellus in hac. Iaculis at erat pellentesque adipiscing commodo elit at imperdiet dui. Nunc eget lorem dolor sed viverra ipsum nunc aliquet bibendum. Adipiscing diam donec adipiscing tristique. Porttitor lacus luctus accumsan tortor posuere. Sed augue lacus viverra vitae. Eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque. Eget duis at tellus at urna condimentum mattis. Ut tortor pretium viverra suspendisse potenti nullam. Nascetur ridiculus mus mauris vitae ultricies leo integer malesuada. Cursus sit amet dictum sit amet justo donec enim. Porta nibh venenatis cras sed felis.",
        },
    ]
    return (
        <div><Accordion items={items} /></div>
    );
}

export default AccordionPage;