"use client";

import { createContext, useContext, useState, ReactNode } from "react";

export type Language = "en" | "es";

const translations = {
  en: {
    appTitle: "React Component Generator",
    preview: "Preview",
    code: "Code",
    signIn: "Sign In",
    signUp: "Sign Up",
    signOut: "Sign out",
    newDesign: "New Design",
    selectProject: "Select Project",
    searchProjects: "Search projects...",
    noProjectsFound: "No projects found.",
    emptyStateHeading: "Start a conversation to generate React components",
    emptyStateSubheading: "I can help you create buttons, forms, cards, and more",
    generating: "Generating...",
    inputPlaceholder: "Describe the React component you want to create...",
    reasoning: "Reasoning",
    welcomeBack: "Welcome back",
    createAccount: "Create an account",
    signInDescription: "Sign in to your account to continue",
    signUpDescription: "Sign up to start creating AI-powered React components",
    noAccount: "Don't have an account?",
    signUpLink: "Sign up",
    alreadyAccount: "Already have an account?",
    signInLink: "Sign in",
    email: "Email",
    password: "Password",
    confirmPassword: "Confirm Password",
    passwordMinLength: "Must be at least 8 characters long",
    signingIn: "Signing in...",
    creatingAccount: "Creating account...",
    failedSignIn: "Failed to sign in",
    failedSignUp: "Failed to sign up",
    passwordMismatch: "Passwords do not match",
  },
  es: {
    appTitle: "Generador de Componentes React",
    preview: "Vista previa",
    code: "Código",
    signIn: "Iniciar sesión",
    signUp: "Registrarse",
    signOut: "Cerrar sesión",
    newDesign: "Nuevo diseño",
    selectProject: "Seleccionar proyecto",
    searchProjects: "Buscar proyectos...",
    noProjectsFound: "No se encontraron proyectos.",
    emptyStateHeading: "Inicia una conversación para generar componentes React",
    emptyStateSubheading: "Puedo ayudarte a crear botones, formularios, tarjetas y más",
    generating: "Generando...",
    inputPlaceholder: "Describe el componente React que deseas crear...",
    reasoning: "Razonamiento",
    welcomeBack: "Bienvenido de nuevo",
    createAccount: "Crear una cuenta",
    signInDescription: "Inicia sesión en tu cuenta para continuar",
    signUpDescription: "Regístrate para empezar a crear componentes React con IA",
    noAccount: "¿No tienes una cuenta?",
    signUpLink: "Regístrate",
    alreadyAccount: "¿Ya tienes una cuenta?",
    signInLink: "Iniciar sesión",
    email: "Correo electrónico",
    password: "Contraseña",
    confirmPassword: "Confirmar contraseña",
    passwordMinLength: "Debe tener al menos 8 caracteres",
    signingIn: "Iniciando sesión...",
    creatingAccount: "Creando cuenta...",
    failedSignIn: "Error al iniciar sesión",
    failedSignUp: "Error al registrarse",
    passwordMismatch: "Las contraseñas no coinciden",
  },
};

type Translations = typeof translations.en;

interface LanguageContextValue {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage, t: translations[language] }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
