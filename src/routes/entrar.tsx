import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { AktiaLogo } from "@/components/aktia/logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signIn } from "@/lib/aktia/auth";

export const Route = createFileRoute("/entrar")({
  head: () => ({
    meta: [
      { title: "Entrar na plataforma — AktIA" },
      {
        name: "description",
        content:
          "Acesse a plataforma AktIA para avaliar a qualidade técnica de radiografias odontológicas e gerar pré-laudos estruturados.",
      },
      { property: "og:title", content: "Entrar na plataforma — AktIA" },
      {
        property: "og:description",
        content: "Acesso de radiologistas e cirurgiões-dentistas à plataforma AktIA.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: EntrarPage,
});

function EntrarPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  return (
    <div className="container-tight flex min-h-[calc(100vh-4rem)] items-center justify-center py-16">
      <div className="w-full max-w-md rounded-2xl border border-border/60 bg-card p-8 shadow-sm">
        <AktiaLogo />
        <h1 className="mt-6 font-display text-2xl font-semibold tracking-tight text-foreground">
          Entrar na plataforma
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Acesso restrito a radiologistas e cirurgiões-dentistas.
        </p>

        <form
          className="mt-8 space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            if (!email) return;
            signIn(email);
            navigate({ to: "/analisar" });
          }}
        >
          <div className="space-y-2">
            <Label htmlFor="email">E-mail profissional</Label>
            <Input
              id="email"
              type="email"
              required
              autoComplete="email"
              placeholder="voce@clinica.com.br"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="senha">Senha</Label>
            <Input
              id="senha"
              type="password"
              required
              autoComplete="current-password"
              placeholder="••••••••"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
          </div>
          <Button type="submit" className="w-full bg-brand text-brand-foreground hover:bg-brand/90">
            Entrar
          </Button>
        </form>

        <p className="mt-6 text-sm text-muted-foreground">
          Ainda não tem conta?{" "}
          <Link to="/cadastro" className="font-medium text-brand hover:underline">
            Cadastre-se
          </Link>
        </p>
      </div>
    </div>
  );
}
