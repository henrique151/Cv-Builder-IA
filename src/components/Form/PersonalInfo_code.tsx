import { useState } from "react";
import { validateEmail, validatePhone } from "../../utils/validation";

export default function PersonalInfo() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [summary, setSummary] = useState("");

  const MAX_SUMMARY_LENGTH = 300;

  return (
    <section className="space-y-4">
      <h2 className="text-xl font-semibold">Dados Pessoais</h2>

      <div>
        <input
          type="text"
          placeholder="Nome completo"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border rounded-lg p-2"
        />
      </div>

      <div>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={`border rounded-lg p-2 ${
            email && !validateEmail(email) ? "border-red-500" : ""
          }`}
        />
        {email && !validateEmail(email) && (
          <p className="text-red-500 text-sm mt-1">Email inválido</p>
        )}
      </div>

      <div>
        <input
          type="tel"
          placeholder="Telefone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className={`border rounded-lg p-2 ${
            phone && !validatePhone(phone) ? "border-red-500" : ""
          }`}
        />
        {phone && !validatePhone(phone) && (
          <p className="text-red-500 text-sm mt-1">Telefone inválido</p>
        )}
      </div>

      <div>
        <input
          type="url"
          placeholder="LinkedIn"
          value={linkedin}
          onChange={(e) => setLinkedin(e.target.value)}
          className="border rounded-lg p-2"
        />
      </div>

      <div>
        <textarea
          placeholder="Resumo profissional..."
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
          className="border rounded-lg p-2 resize-none"
          rows={4}
          maxLength={MAX_SUMMARY_LENGTH}
        />
        <p
          className={`text-sm text-right ${
            summary.length >= MAX_SUMMARY_LENGTH
              ? "text-red-500"
              : "text-gray-500"
          }`}
        >
          {summary.length}/{MAX_SUMMARY_LENGTH} caracteres
        </p>
      </div>
    </section>
  );
}
