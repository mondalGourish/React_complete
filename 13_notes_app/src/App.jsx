import React, { useState } from "react";

const App = () => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");

  const [task, setTask] = useState([]); //initialized an empty task array

  const handelSubmit = (e) => {
    e.preventDefault();
    console.log(title, details);

    const copyTask = [...task]; //copied the task to perform changes
    copyTask.push({ title, details }); //new task added
    setTask(copyTask); //set to the task

    setTitle("");
    setDetails("");
  };

  const deleteNote = (idx) =>{
    const copyTask = [...task]
    copyTask.splice(idx,1)
    setTask(copyTask)
  }
  return (
    // the outer display of the screen
    <div className="bg-black text-white h-screen lg:flex overflow-auto">
      {/* the form part */}
      <form
        onSubmit={(e) => {
          handelSubmit(e);
        }}
        className="flex gap-4 lg:w-1/2 p-10 flex-col items-start"
      >
        {/* the heading part */}
        <h1 className="text-5xl font-bold mb-2 items-start">Add Notes</h1>

        {/* the notes heading part */}
        <input
          type="text"
          placeholder="Enter notes title"
          className="px-5 py-2  w-full font-medium border-2 outline-none rounded mb-2"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />

        {/* the notes description part */}
        <textarea
          type="text"
          placeholder="Write details"
          className="px-5 py-2 w-full font-medium border-2 outline-none rounded mb-2 h-32"
          value={details}
          onChange={(e) => {
            setDetails(e.target.value);
          }}
        />

        {/* the submit button */}
        <button className="bg-white text-black font-medium w-full outline-none px-5 py-2 rounded ">
          Add notes
        </button>
      </form>

      {/* to display the notes */}
       <div className='lg:w-1/2 lg:border-l-2  p-10' >

        <h1 className='text-4xl font-bold'>Recent Notes</h1>

        <div className='flex flex-wrap items-start justify-start gap-5 mt-6 h-[90%] overflow-auto' id="right">
          {task.map(function (elem, idx) {

            return <div key={idx} className=" flex justify-between flex-col items-start relative h-52 w-40 bg-cover rounded-xl text-black pt-9 pb-4 px-4 bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')]">
              <div>
                <h3 className='leading-tight text-lg font-bold'>{elem.title}</h3>
                <p className='mt-2 leading-tight text-xs font-semibold text-gray-600'>{elem.details}</p>
              </div>
              <button onClick={() => {
                deleteNote(idx)
              }} className='w-full cursor-pointer active:scale-95 bg-red-500 py-1 text-xs rounded font-bold text-white'>Delete</button>
            </div>
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
