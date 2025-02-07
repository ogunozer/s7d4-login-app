import { useState } from "react";

function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
    terms: false,
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const validate = () => {
    let newErrors = {};
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(form.email)) {
      newErrors.email = "Geçerli bir email giriniz";
    }
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d).{6,}$/;
    if (!passwordRegex.test(form.password)) {
      newErrors.password = "Şifre en az 6 karakter ve sayı-harf içermeli";
    }
    if (!form.terms) {
      newErrors.terms = "Şartları kabul etmeniz gerekiyor";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      window.location.href = "/success";
    }
  };

  const isDisabled = !form.email || !form.password || !form.terms;

  return (
    <div>
      <h2>Login Formu</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email: </label>
          <input
            name="email"
            type="text"
            value={form.email}
            onChange={handleChange}
          />
          {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
        </div>
        <div>
          <label>Şifre: </label>
          <input
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
          />
          {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
        </div>
        <div>
          <label>
            <input
              name="terms"
              type="checkbox"
              checked={form.terms}
              onChange={handleChange}
            />
            Şartları kabul ediyorum
          </label>
          {errors.terms && <p style={{ color: "red" }}>{errors.terms}</p>}
        </div>
        <button type="submit" disabled={isDisabled}>
          Giriş Yap
        </button>
      </form>
    </div>
  );
}

export default Login;
