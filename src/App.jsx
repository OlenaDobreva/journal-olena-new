import { useState } from "react";
import "./App.css";
import { uid } from "uid";
import EntriesSection from "./EntriesSection";
import EntryForm from "./EntryForm";

const initialEntries = [
  {
    id: 1000,
    date: "Feb 5, 2025",
    motto: "We are in a state of chaos",
    notes:
      "Today I learned about React State. It was fun! I can't wait to learn more.",
      isFavorite: false,
  },
  {
    id: 999,
    date: "Feb 4, 2025",
    motto: "Props, Props, Props",
    notes:
      "Today I learned about React Props. Mad props to everyone who understands this!",
      isFavorite: false,
  },
  {
    id: 998,
    date: "Feb 3, 2025",
    motto: "How to nest components online fast",
    notes:
      "Today I learned about React Components and how to nest them like a pro. Application design is so much fun!",
      isFavorite: false,
  },
  {
    id: 997,
    date: "Feb 2, 2025",
    motto: "I'm a React Developer",
    notes: "My React-ion when I learned about React: Yay!",
    isFavorite: false,
  },
];

function App() {
  const [entries, setEntries] = useState(initialEntries);

  const handleAddEntry = (newEntry) => {
    const id = uid();
    const date = new Date().toLocaleDateString("en-us", {
      dateStyle: "medium",
    });
    setEntries([{ id, date, ...newEntry, isFavorite: false }, ...entries]);
  };

  function handleToggleFavourite(id) {
    const updatedEntries = entries.map((entry)=> {
      if (entry.id === id) {
        return {...entry, isFavorite: !entry.isFavorite }
        }
        return entry;
      }
    })
  }

  return (
    <>
      <div className="app">
        <Header />
        <main className="app__main">
          <EntryForm onAddEntry={handleAddEntry} />
          <EntriesSection entries={entries} />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
