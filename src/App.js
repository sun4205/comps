import Accordion from "./components/Accordion";

function App() {
  const items = [
    {
      id: "1",
      label: "Can I use react on a project?",
      content: "You can use react on any project you want",
    },
    {
      id: "2",
      label: "Can I use javascript on a project?",
      content: "You can use react on any project you want",
    },
    {
      id: "3",
      label: "Can I use css on a project?",
      content: "You can use react on any project you want",
    },
  ];
  return <Accordion items={items} />;
}
export default App;
