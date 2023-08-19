import React, { useState } from "react";
import employees from "./employees.json";
import "./Hiring.css"

const creative_fields = [
  "Graphic Design",
  "Branding",
  "Art Direction",
  "Illustration",
  "Photography",
  "Motion Graphics",
  "UI/UX",
  "Web Design",
  "Packaging Design",
  "Editorial Design",
  "Game Design",
  "Animation",
  "Industrial Design",
  "Fashion",
  "Architecture",
  "Interior Design",
  "Product Design",
  "Fine Arts",
  "Calligraphy",
  "Typography",
  "Music Production",
  "Sound Design",
  "Film Making",
  "Advertising",
  "Copywriting",
  "Creative Writing",
  "Visual Effects",
  "Virtual Reality",
  "Augmented Reality",
  "Data Visualization",
  "Jewelry Design",
  "Textile Design",
  "Ceramic Design",
  "Sculpture",
  "Printmaking",
  "Painting",
  "Drawing",
  "Street Art",
  "Graffiti Art",
  "Concept Art",
  "3D Modeling",
  "3D Printing",
  "Robotics",
  "Industrial Automation",
  "Film Editing",
  "Visual Merchandising",
  "Exhibition Design",
  "Set Design",
  "Costume Design",
  "Makeup Artistry",
];

function Hiring() {
  const [selectedTag, setSelectedTag] = useState("");

  const handleTagChange = (event) => {
    setSelectedTag(event.target.value);
  };

  const getEmployeesWithTag = (tag) => {
    return employees.filter((employee) => employee.tags.includes(tag));
  };

  const employeesWithTag = selectedTag ? getEmployeesWithTag(selectedTag) : employees;

  return (
    <div className="hiring-container">
      <h1>Hiring</h1>
      <form>
        <label htmlFor="tags">Select a tag:</label>
        <select id="tags" name="tags" value={selectedTag} onChange={handleTagChange}>
          <option value="">All</option>
          {creative_fields.map((tag) => (
            <option value={tag} key={tag}>
              {tag}
            </option>
          ))}
        </select>
      </form>
      <ul>
        {employeesWithTag.map((employee) => (
          <li key={employee.id}>
            <h2>{employee.name}</h2>
            <p>{employee.tags.join(", ")}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Hiring;
