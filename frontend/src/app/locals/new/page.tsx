"use client";

import { Title02 } from "@/components/title";
import Form from "./form";

export default function AddLocal() {

  return (
    <div className="h-full w-form-card m-auto">
      <div className="mb-8 pt-9 m-auto"> breadcrumbs </div>
      <div className="mb-7 ">
        <div className="mb-6">
          <Title02>Adicionar novo local</Title02>
          <span>* Campos obrigatórios</span>
        </div>
        <div className="px-6 pt-9 pb-8 bg-surface rounded-2xl">
          <Form />
        </div>
      </div>
    </div>
  );
}
