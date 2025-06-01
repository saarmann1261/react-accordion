import React, { useState } from 'react';

function Accordion() {
  // Sample accordion data
  const data = [
    { id: 1, title: 'Section 1', content: 'Section 1 Content' },
    { id: 2, title: 'Section 2', content: 'Section 2 Content' },
    { id: 3, title: 'Section 3', content: 'Section 3 Content' },
  ];

  // Tracks which sections are open (by index)
  const [select, setSelect] = useState([]);

  // If true, allows multiple sections to be open
  const [multiple, setMultiple] = useState(false);

  // Handles opening/closing of sections
  function handleClick(id) {
    if (multiple) {
      // If already selected, remove it; otherwise, add it
      setSelect((prev) =>
        prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
      );
    } else {
      // Only one section open at a time
      setSelect((prev) => (prev.includes(id) ? [] : [id]));
    }
  }

  // Toggle between single and multiple section mode
  function toggleMulti() {
    setMultiple(!multiple);
  }

  return (
    <div className="max-w-xl mx-auto mt-10 p-4">
      {/* Toggle for multiple selection mode */}
      <div className="mb-4 flex items-center gap-2">
        <input
          type="checkbox"
          checked={multiple}
          onChange={toggleMulti}
          className="h-4 w-4 text-blue-600"
        />
        <label className="text-gray-700">Allow multiple sections open</label>
      </div>

      {/* Accordion items */}
      <ul className="space-y-2">
        {data.map((item, id) => (
          <li key={item.id} className="border border-gray-300 rounded-md">
            <div className="flex justify-between items-center bg-gray-100 hover:bg-gray-200 px-4 py-3 cursor-pointer">
              {/* Section Title Button */}
              <button onClick={() => handleClick(id)} className="text-left font-medium text-gray-800 w-full">
                {item.title}
              </button>

              {/* + or − icon */}
              <span className="text-xl text-gray-500">
                {select.includes(id) ? '−' : '+'}
              </span>
            </div>

            {/* Section Content */}
            {select.includes(id) && (
              <div className="px-4 py-3 bg-white text-gray-700 border-t">
                <p>{item.content}</p>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Accordion;
