// Imports useState so the page can remember values.
import { useState } from "react";


const Welcome = () => {
 
  const [showReportPopup, setShowReportPopup] = useState(false);

  
  const [reportDetails, setReportDetails] = useState("");

  const submitReport = (event) => {
   
    event.preventDefault();

    
    alert("Your report was submitted.");

    // Clears the text area after the report is submitted.
    setReportDetails("");

    
    setShowReportPopup(false);
  };

  return (
    
    <div className="page-transition min-h-[80vh] flex flex-col items-center justify-center gap-6">
     
      <h1 className="text-3xl font-bold">Welcome, Homeowner!</h1>

      {/* Opens the report popup when clicked */}
      <button
        onClick={() => setShowReportPopup(true)}
        className="bg-red-500 text-white px-6 py-3 rounded-md"
      >
        Make a Report
      </button>

      {/* The popup only shows when showReportPopup is true */}
      {showReportPopup && (
        
        <div className="fixed inset-0 flex items-center justify-center bg-black/50">
          
          <form
            onSubmit={submitReport}
            className="flex w-96 flex-col gap-4 rounded-xl bg-white p-8 shadow-lg"
          >
            {/* Popup title */}
            <h2 className="text-2xl font-bold">Make a Report</h2>

          
            <p>Please describe the issue you want to report.</p>

            {/* Text box pop up */}
            <textarea
              value={reportDetails}
              onChange={(e) => setReportDetails(e.target.value)}
              required
              rows="5"
              placeholder="Write your report details here..."
              className="resize-none rounded border border-gray-300 p-3"
            />

            {/* Buttons at the bottom of the popup */}
            <div className="flex justify-end gap-3">
              {/* Closes the popup without submitting */}
              <button
                type="button"
                onClick={() => setShowReportPopup(false)}
                className="rounded border border-gray-300 px-4 py-2"
              >
                Cancel
              </button>

              {/* Submits the report */}
              <button
                type="submit"
                className="rounded bg-blue-500 px-4 py-2 text-white"
              >
                Submit Report
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

// Makes this component available to App.jsx.
export default Welcome;