import React from "react";
import '../Styles/CreateSprint.css';

function CreateSprint() {
  return (
    <div className="create-sprint-container">
      <h2 className="create-sprint-title">Create Sprint</h2>
      <div className="sprint-form">
        <form>
          {/* Sprint Name */}
          <div className="form-group">
            <label htmlFor="sprint-name">Sprint Name</label>
            <input
              type="text"
              id="sprint-name"
              placeholder="Sprint (MM/DD - MM/DD)"
              className="input-field"
              readOnly
            />
          </div>

          {/* Sprint Duration */}
          <div className="form-group">
            <label>Sprint Duration</label>
            <div className="duration-options">
              <label>
                <input type="radio" name="duration" defaultChecked />
                Default duration (2 weeks)
              </label>
              <label>
                <input type="radio" name="duration" />
                Custom duration
              </label>
            </div>
            <div className="duration-dates">
              <label>
                Start Date
                <input type="date" className="input-date" />
              </label>
              <label>
                End Date
                <input type="date" className="input-date" />
              </label>
            </div>
          </div>

          {/* Sprint Goal */}
          <div className="form-group">
            <label htmlFor="sprint-goal">Sprint Goal</label>
            <textarea
              id="sprint-goal"
              placeholder="What does the team want to accomplish in this sprint?"
              className="textarea-field"
            ></textarea>
          </div>

          {/* Buttons */}
          <div className="form-buttons">
            <button type="button" className="btn cancel">
              Cancel
            </button>
            <button type="submit" className="btn create">
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateSprint;
