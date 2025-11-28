"use client";

import { useState } from "react";

export default function Avatar() {
  const [preview, setPreview] = useState(null);

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (ev) => setPreview(ev.target.result);
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const senha = e.target.senha.value;
    const confirmar = e.target.confirmar.value;

    if (senha.length < 8) return alert("Sua senha deve possuir no mínimo 8 caracteres!");
    if (senha !== confirmar) return alert("As senhas não coincidem!");

    alert("Cadastro realizado com sucesso!");
  };

  return null;
}
