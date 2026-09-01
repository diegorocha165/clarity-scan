import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { AktiaLogo } from "@/components/aktia/logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signIn } from "@/lib/aktia/auth";

export const Route = createFileRoute("/cadastro")({
  head: () => ({
    meta: [
      { title: "Criar conta — AktIA" },
      {
        name: "description",
        content:
          "Cadastre sua clínica ou centro de radiologia na AktIA e comece a validar a qualidade técnica dos exames odontológicos.",
      },
      { property: "og:title", content: "Criar conta — AktIA" },
      {
        property: "og:description",
        content: "Cadastro de clínicas e profissionais na plataforma AktIA.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CadastroPage,
});

function CadastroPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ nome: "", email: "", clinica: "", senha: "" });

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  return (
    <div className="container-tight flex min-h-[calc(100vh-4rem)] items-center justify-center py-16">
      <div className="w-full max-w-md rounded-2xl border border-border/60 bg-card p-8 shadow-sm">
        <AktiaLogo />
        <h1 className="mt-6 font-display text-2xl font-semibold tracking-tight text-foreground">
          Criar conta
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Cadastre sua clínica e comece a padronizar o controle de qualidade radiográfica.
        </p>

        <form
          className="mt-8 space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            if (!form.email) return;
            signIn(form.email);
            navigate({ to: "/analisar" });
          }}
        >
          <div className="space-y-2">
            <Label htmlFor="nome">Nome completo</Label>
            <Input id="nome" required value={form.nome} onChange={set("nome")} placeholder="Dra. Ana Souza" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="clinica">Clínica ou centro de radiologia</Label>
            <Input id="clinica" value={form.clinica} onChange={set("clinica")} placeholder="Centro de Radiologia Odontológica" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">E-mail profissional</Label>
            <Input
              id="email"
              type="email"
              required
              autoComplete="email"
              value={form.email}
              onChange={set("email")}
              placeholder="voce@clinica.com.br"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="senha">Senha</Label>
            <Input
              id="senha"
              type="password"
              required
              autoComplete="new-password"
              value={form.senha}
              onChange={set("senha")}
              placeholder="••••••••"
            />
          </div>
          <Button type="submit" className="w-full bg-brand text-brand-foreground hover:bg-brand/90">
            Criar conta
          </Button>
        </form>

        <p className="mt-6 text-sm text-muted-foreground">
          Já tem conta?{" "}
          <Link to="/entrar" className="font-medium text-brand hover:underline">
            Entrar
          </Link>
        </p>
      </div>
    </div>
  );
}
