import { 
  collection, 
  doc, 
  getDocs, 
  getDoc, 
  setDoc, 
  updateDoc, 
  deleteDoc,
  addDoc,
  query,
  orderBy,
  where
} from "firebase/firestore";
import { db } from "./firebase";

// Company Settings
export async function getCompanySettings() {
  const docRef = doc(db, "settings", "company");
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return docSnap.data();
  }
  // Default values
  return {
    name: "Dinstaire C.A.",
    slogan: "Clima confiable siempre",
    phone: "+58 424-3222919",
    address: "Maracay, Estado Aragua",
    addressDetail: "Avenida Intercomunal",
    email: "",
    whatsapp: "584243222919",
    instagram: "dinstaire",
    facebook: "dinstaire",
    yearsExperience: 40
  };
}

export async function updateCompanySettings(data: any) {
  const docRef = doc(db, "settings", "company");
  await setDoc(docRef, data, { merge: true });
}

// Projects
export async function getProjects() {
  const q = query(collection(db, "projects"), orderBy("createdAt", "desc"));
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
}

export async function addProject(project: any) {
  const docRef = await addDoc(collection(db, "projects"), {
    ...project,
    createdAt: new Date()
  });
  return docRef.id;
}

export async function updateProject(id: string, data: any) {
  const docRef = doc(db, "projects", id);
  await updateDoc(docRef, data);
}

export async function deleteProject(id: string) {
  await deleteDoc(doc(db, "projects", id));
}

// Products
export async function getProducts() {
  const q = query(collection(db, "products"), orderBy("createdAt", "desc"));
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
}

export async function addProduct(product: any) {
  const docRef = await addDoc(collection(db, "products"), {
    ...product,
    createdAt: new Date()
  });
  return docRef.id;
}

export async function updateProduct(id: string, data: any) {
  const docRef = doc(db, "products", id);
  await updateDoc(docRef, data);
}

export async function deleteProduct(id: string) {
  await deleteDoc(doc(db, "products", id));
}

// Messages
export async function getMessages() {
  const q = query(collection(db, "messages"), orderBy("createdAt", "desc"));
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
}

export async function addMessage(message: any) {
  const docRef = await addDoc(collection(db, "messages"), {
    ...message,
    createdAt: new Date(),
    read: false
  });
  return docRef.id;
}

export async function markMessageAsRead(id: string) {
  const docRef = doc(db, "messages", id);
  await updateDoc(docRef, { read: true });
}

export async function deleteMessage(id: string) {
  await deleteDoc(doc(db, "messages", id));
}

// Stats
export async function getStats() {
  const projects = await getProjects();
  const products = await getProducts();
  const messages = await getMessages();
  const unreadMessages = messages.filter((m: any) => !m.read).length;
  
  return {
    projects: projects.length,
    products: products.length,
    messages: messages.length,
    unreadMessages,
    views: 0 // You can add a view counter with Firebase Analytics later
  };
}