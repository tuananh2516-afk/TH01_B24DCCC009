import {useState} from "react";

function TextCounter() {
  const [text, setText] = useState("");

  return (
    <div style={{padding: 20}}>
      <h2>Bộ đếm ký tự</h2>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Nhập văn bản..."
      />
      <p>Số ký tự: {text.length}</p>
      {text.length > 100 && (<p style={{color: "red"}}>Bạn đã nhập quá 100 ký tự!</p>)}
    </div>
  );
}

export default TextCounter;
