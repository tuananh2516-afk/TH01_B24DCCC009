import {useState} from "react";

function RegisterForm() {
  const [form, setForm] = useState({name: "", email: "", password: ""});
  const [submitted, setSubmitted] = useState(null);

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.password) {
      alert("Vui lòng nhập đầy đủ thông tin!");
      return;
    }
    setSubmitted(form);
  };

  return (
    <div style={{padding: 20}}>
      <h2>Form Đăng ký</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Tên"
          value={form.name}
          onChange={handleChange}
        />
        <br />
        <input
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
        />
        <br />
        <input
          name="password"
          type="password"
          placeholder="Mật khẩu"
          value={form.password}
          onChange={handleChange}
        />
        <br />
        <button type="submit">Đăng ký</button>
      </form>

      {submitted && (
        <div style={{marginTop: 20}}>
          <h3>Thông tin đã nhập:</h3>
          <p>Tên: {submitted.name}</p>
          <p>Email: {submitted.email}</p>
          <p>Mật khẩu: {submitted.password}</p>
        </div>
      )}
    </div>
  );
}

export default RegisterForm;
