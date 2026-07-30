import { Navigate } from "react-router-dom";
import { obterAdmin } from "../../services/admin.service.js";

import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}


export default function RotaProtegida({
  children,
}: Props) {

  const admin = obterAdmin();

  if (!admin) {
    return <Navigate to="/admin/login" replace />;
  }

  return <>{children}</>;

}