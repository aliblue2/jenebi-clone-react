import React from "react";
import MainLogo from "@/public/janebi-logo.svg";
import Image from "next/image";
import { Loader2 } from "lucide-react";
const loading = () => {
  return (
    <div className="w-full h-full bg-white/30 min-h-screen text-primary flex-col gap-5 flex items-center justify-center">
      <Image src={MainLogo} alt="logo-janebi" className="max-w-44" />
      <Loader2 size={64} className="animate-spin" />
    </div>
  );
};

export default loading;
