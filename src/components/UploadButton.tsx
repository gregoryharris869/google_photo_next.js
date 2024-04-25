"use client";

import { Upload } from "lucide-react";

import { CldUploadButton } from "next-cloudinary";
export const UploadButton = () => {
  return (
    <CldUploadButton
      signatureEndpoint="/api/sign-cloudinary-params"
      options={{ autoMinimize: true }}
    >
      <span className="flex items-center gap-2">
        <Upload className="w-5 h-5" />
        Upload
      </span>
    </CldUploadButton>
  );
};
