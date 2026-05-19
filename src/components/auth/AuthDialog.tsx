"use client";

import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { SignInForm } from "./SignInForm";
import { SignUpForm } from "./SignUpForm";
import { useLanguage } from "@/lib/contexts/language-context";

interface AuthDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  defaultMode?: "signin" | "signup";
}

export function AuthDialog({
  open,
  onOpenChange,
  defaultMode = "signin",
}: AuthDialogProps) {
  const [mode, setMode] = useState<"signin" | "signup">(defaultMode);
  const { t } = useLanguage();

  useEffect(() => {
    setMode(defaultMode);
  }, [defaultMode]);

  const handleSuccess = () => {
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>
            {mode === "signin" ? t.welcomeBack : t.createAccount}
          </DialogTitle>
          <DialogDescription>
            {mode === "signin" ? t.signInDescription : t.signUpDescription}
          </DialogDescription>
        </DialogHeader>

        <div className="mt-4">
          {mode === "signin" ? (
            <SignInForm onSuccess={handleSuccess} />
          ) : (
            <SignUpForm onSuccess={handleSuccess} />
          )}
        </div>

        <div className="mt-4 text-center text-sm">
          {mode === "signin" ? (
            <>
              {t.noAccount}{" "}
              <Button
                variant="link"
                className="p-0 h-auto font-normal"
                onClick={() => setMode("signup")}
              >
                {t.signUpLink}
              </Button>
            </>
          ) : (
            <>
              {t.alreadyAccount}{" "}
              <Button
                variant="link"
                className="p-0 h-auto font-normal"
                onClick={() => setMode("signin")}
              >
                {t.signInLink}
              </Button>
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
