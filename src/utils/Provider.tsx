"use client";

import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { RecoilRoot } from "recoil";
import AuthProvider from "./AuthProvider";
const queryClient = new QueryClient();

const Provider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>{children}</RecoilRoot>
      {/* <AuthProvider>
        
      </AuthProvider> */}
    </QueryClientProvider>
  );
};

export default Provider;
