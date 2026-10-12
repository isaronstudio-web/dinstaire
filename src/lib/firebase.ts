import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);

// Configuración del sitio (valores por defecto)
export const siteConfig = {
  companyName: "Dinstaire C.A.",
  slogan: "Clima confiable siempre",
  phone: "+58 424-3222919",
  address: "Maracay, Estado Aragua",
  addressDetail: "Avenida Intercomunal",
  email: "",
  whatsapp: "584243222919",
  instagram: "dinstaire",
  facebook: "dinstaire",
  yearsExperience: 40,
};

// Tipos de datos
export interface Project {
  id: string;
  title: string;
  titleEN: string;
  client: string;
  location: string;
  year: string;
  category: "Corporativo" | "Industrial" | "Comercial";
  description: string;
  descriptionEN: string;
  services: string[];
  imageUrl?: string;
  featured: boolean;
  createdAt: Date;
}

export interface Product {
  id: string;
  name: string;
  nameEN: string;
  brand: string;
  type: "Split" | "Window" | "Central" | "Inverter" | "Industrial";
  capacity: string;
  price: string;
  description: string;
  descriptionEN: string;
  features: string[];
  imageUrl?: string;
  inStock: boolean;
  createdAt: Date;
}

export interface Testimonial {
  id: string;
  name: string;
  company: string;
  message: string;
  messageEN: string;
  imageUrl?: string;
  rating: number;
  featured: boolean;
}

export interface ContactMessage {
  id: string;
  name: string;
  phone: string;
  email?: string;
  service: string;
  message: string;
  createdAt: Date;
  read: boolean;
}