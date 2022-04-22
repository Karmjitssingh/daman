import React, { useState } from "react";

function Textfrom(props) {
  const [text, setText] = useState("");
  const handledclick = () => {
    console.log("change upeer case" + text);
    let newtext = text.toUpperCase();
    setText(newtext);
  };
  const handledclickon = () => {
    console.log("lower case");
    let newtext1 = text.toLowerCase();
    setText(newtext1);
  };
  const handledonChange = (event) => {
    console.log("onchange");
    setText(event.target.value);
  };

  const removetext = (event) => {
    setText("");
  };

  const removeSpace = (str) => {
    return str
      .replace(/(^\s*)|(\s*$)/gi, "")
      .replace(/[ ]{2,}/gi, " ")
      .replace(/\n /, "\n");
  };

  return (
    <>
      <div>
        <h1>{props.handing}</h1>
        <div className="mb-3"></div>
        <textarea
          className="form-control"
          placeholder="Enter your word"
          value={text}
          onChange={handledonChange}
          id="mybox"
          row="8"
        ></textarea>
        <div style={{ display: "flex", justifyContent: "end" }}>
          <button className="btn btn.primary mx-1 my-1" onClick={handledclick}>
            convert to upper case
          </button>
          <button className="btn btn.danger mx-1 my-1" onClick={handledclickon}>
            convert to lower case
          </button>
          <button
            className="btn btn.danger mx-1 my-1"
            style={{
              marginRight: "0px",
              backgroundColor: "red",
              color: "white",
            }}
            onClick={removetext}
          >
            Clear TextBox
          </button>
        </div>
      </div>
      <div className="container my-3">
        <h1>your text sumamry</h1>
        <p>
          {text ? removeSpace(text).split(" ").length : 0} word and{" "}
          {removeSpace(text).split("").length} Chracter
        </p>
        <p>
          {0.008 * removeSpace(text).length}
          Minutes Read
        </p>
        {text && (
          <div>
            <h1>Preview</h1>
            <p> {text}</p>
          </div>
        )}
      </div>
    </>
  );
}
export default Textfrom;
