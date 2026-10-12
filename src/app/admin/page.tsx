"use client";

"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  LayoutDashboard, 
  Package, 
  FolderKanban, 
  MessageSquare, 
  Settings, 
  LogOut,
  Plus,
  Edit,
  Trash2,
  Eye,
  Save,
  Menu,
  Loader2,
  CheckCircle,
  XCircle
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { 
  collection, 
  doc, 
  getDocs, 
  getDoc, 
  setDoc, 
  addDoc, 
  deleteDoc,
  query,
  orderBy,
  serverTimestamp 
} from "firebase/firestore";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { db, auth } from "@/lib/firebase";

type TabType = "dashboard" | "projects" | "products" | "messages" | "settings";

export default function AdminPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<TabType>("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [authError, setAuthError] = useState("");
  const [company, setCompany] = useState<any>({});
  const [projects, setProjects] = useState<any[]>([]);
  const [products, setProducts] = useState<any[]>([]);
  const [messages, setMessages] = useState<any[]>([]);

  const loadData = async () => {
    try {
      setLoading(true);
      
      // Company
      const companyDoc = await getDoc(doc(db, "settings", "company"));
      if (companyDoc.exists()) {
        setCompany(companyDoc.data());
      } else {
        const defaults = { name: "Dinstaire C.A.", slogan: "Clima confiable siempre", phone: "+58 424-3222919", address: "Maracay, Estado Aragua", addressDetail: "Avenida Intercomunal", instagram: "@dinstaire", facebook: "dinstaire" };
        await setDoc(doc(db, "settings", "company"), defaults);
        setCompany(defaults);
      }

      // Projects
      const projectsSnap = await getDocs(query(collection(db, "projects"), orderBy("createdAt", "desc")));
      setProjects(projectsSnap.docs.map(d => ({ id: d.id, ...d.data() })));

      // Products  
      const productsSnap = await getDocs(query(collection(db, "products"), orderBy("createdAt", "desc")));
      setProducts(productsSnap.docs.map(d => ({ id: d.id, ...d.data() })));

      // Messages
      const messagesSnap = await getDocs(query(collection(db, "messages"), orderBy("createdAt", "desc")));
      setMessages(messagesSnap.docs.map(d => ({ id: d.id, ...d.data() })));

    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  // Lista de correos permitidos - solo estos pueden entrar al admin
const ALLOWED_EMAILS = [
  "isaias09sebastian@gmail.com",
  "caradashy@gmail.com",
  "isaronstudio@gmail.com"
];

const handleGoogleLogin = async () => {
  setAuthError("");
  try {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    const email = result.user.email?.toLowerCase() || "";
    
    // Verificar si el correo está autorizado
    if (ALLOWED_EMAILS.includes(email)) {
      setIsAuthenticated(true);
      loadData();
    } else {
      // Correo no autorizado - cerrar sesión y mostrar error
      await auth.signOut();
      setAuthError("❌ Correo no autorizado. Solo usuarios registrados pueden entrar.");
    }
  } catch (error: any) {
    console.error("Google login error:", error);
    if (error.code === "auth/popup-closed-by-user") {
      setAuthError("⚠️ Ventana cerrada. Intenta de nuevo.");
    } else {
      setAuthError("❌ Error al iniciar sesión con Google.");
    }
  }
};

  const saveCompany = async () => {
    try {
      setSaving(true);
      await setDoc(doc(db, "settings", "company"), company, { merge: true });
      alert("✅ Guardado en Firebase!");
    } catch (error) {
      alert("❌ Error");
    } finally {
      setSaving(false);
    }
  };

  const addNewProject = async () => {
    const newProject = {
      title: "Nuevo Proyecto",
      titleEN: "New Project",
      client: "Cliente",
      location: "Ubicación",
      year: new Date().getFullYear().toString(),
      category: "Corporativo",
      description: "Descripción del proyecto",
      descriptionEN: "Project description",
      featured: false,
      createdAt: serverTimestamp()
    };
    await addDoc(collection(db, "projects"), newProject);
    loadData();
  };

  const deleteProject = async (id: string) => {
    if (confirm("¿Eliminar proyecto?")) {
      await deleteDoc(doc(db, "projects", id));
      loadData();
    }
  };

  const markMessageRead = async (id: string) => {
    await setDoc(doc(db, "messages", id), { read: true }, { merge: true });
    loadData();
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mx-auto mb-4">
              <LogOut className="w-8 h-8 text-white" />
            </div>
            <h1 className="font-display text-2xl font-bold text-secondary">Dinstaire Admin</h1>
            <p className="text-muted">🔐 Firebase Connected</p>
          </div>
          {/* Botón de Google Sign-In */}
            <button 
              type="button" 
              onClick={handleGoogleLogin}
              className="w-full bg-white border-2 border-gray-200 text-secondary py-3 px-6 rounded-xl font-semibold flex items-center justify-center gap-3 hover:bg-gray-50 transition-all mb-4"
            >
              <img src="https://www.google.com/favicon.ico" alt="Google" className="w-5 h-5" />
              Continuar con Google
            </button>
            <p className="text-xs text-muted text-center mt-4">
              Solo correos autorizados pueden entrar:<br/>
              isaias09sebastian@gmail.com<br/>
              caradashy@gmail.com<br/>
              isaronstudio@gmail.com
            </p>
            {authError && <p className="text-red-500 text-sm text-center mt-4">{authError}</p>}
            <p className="text-xs text-muted text-center mt-4">
              Solo correos de Google autorizados pueden entrar:<br/>
              isaias09sebastian@gmail.com<br/>
              caradashy@gmail.com<br/>
              isaronstudio@gmail.com
            </p>
          <Link href="/" className="block text-center text-primary mt-4">← Volver al sitio</Link>
        </motion.div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-12 h-12 text-primary animate-spin mx-auto mb-4" />
          <p className="text-muted">Cargando desde Firebase...</p>
        </div>
      </div>
    );
  }

  const tabs = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "projects", label: "Proyectos", icon: FolderKanban },
    { id: "products", label: "Productos", icon: Package },
    { id: "messages", label: "Mensajes", icon: MessageSquare },
    { id: "settings", label: "Configuración", icon: Settings },
  ];

  const stats = [
    { value: projects.length, label: "Proyectos", color: "bg-blue-500" },
    { value: products.length, label: "Productos", color: "bg-green-500" },
    { value: messages.filter(m => !m.read).length, label: "Mensajes nuevos", color: "bg-amber-500" },
    { value: messages.length, label: "Total mensajes", color: "bg-purple-500" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <motion.aside initial={false} animate={{ width: sidebarOpen ? 260 : 80 }} className="bg-secondary text-white flex flex-col">
        <div className="p-4 border-b border-white/10">
          <div className="flex items-center justify-between">
            {sidebarOpen && <div><h1 className="font-display text-lg font-bold">Dinstaire</h1><p className="text-xs text-gray-400">🔥 Firebase Admin</p></div>}
            <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-2 hover:bg-white/10 rounded-lg"><Menu className="w-5 h-5" /></button>
          </div>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          {tabs.map((tab) => (
            <button key={tab.id} onClick={() => setActiveTab(tab.id as TabType)} className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${activeTab === tab.id ? "bg-primary text-white" : "hover:bg-white/10 text-gray-300"}`}>
              <tab.icon className="w-5 h-5" />
              {sidebarOpen && <span>{tab.label}</span>}
            </button>
          ))}
        </nav>
        <div className="p-4 border-t border-white/10">
          <button onClick={() => setIsAuthenticated(false)} className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-red-500/20 text-red-400">
            <LogOut className="w-5 h-5" />
            {sidebarOpen && <span>Salir</span>}
          </button>
        </div>
      </motion.aside>

      <main className="flex-1 p-8 overflow-y-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="font-display text-3xl font-bold text-secondary">{tabs.find(t => t.id === activeTab)?.label}</h1>
          <Link href="/" className="text-primary hover:underline">Ver sitio →</Link>
        </div>

        {/* Dashboard */}
        {activeTab === "dashboard" && (
          <div className="space-y-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 shadow-sm">
                  <div className={`w-12 h-12 ${stat.color} rounded-xl flex items-center justify-center mb-4`}><stat.icon className="w-6 h-6 text-white" /></div>
                  <p className="text-3xl font-bold text-secondary">{stat.value}</p>
                  <p className="text-muted">{stat.label}</p>
                </div>
              ))}
            </div>
            <div className="bg-green-50 border border-green-200 rounded-xl p-4">
              <p className="text-green-800 font-medium">✅ Firebase conectado - datos en la nube</p>
            </div>
          </div>
        )}

        {/* Projects */}
        {activeTab === "projects" && (
          <div className="space-y-6">
            <div className="flex justify-between">
              <p className="text-muted">{projects.length} proyectos en Firebase</p>
              <button onClick={addNewProject} className="inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-xl"><Plus className="w-4 h-4" />Nuevo Proyecto</button>
            </div>
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
              {projects.length === 0 ? (
                <div className="p-8 text-center text-muted">No hay proyectos. ¡Agrega uno!</div>
              ) : (
                <table className="w-full">
                  <thead className="bg-gray-50"><tr><th className="text-left p-4">Título</th><th className="text-left p-4">Cliente</th><th className="text-left p-4">Acciones</th></tr></thead>
                  <tbody>
                    {projects.map((p) => (
                      <tr key={p.id} className="border-t">
                        <td className="p-4">{p.title}</td>
                        <td className="p-4 text-muted">{p.client}</td>
                        <td className="p-4"><button onClick={() => deleteProject(p.id)} className="p-2 hover:bg-red-50 rounded"><Trash2 className="w-4 h-4 text-red-500" /></button></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        )}

        {/* Messages */}
        {activeTab === "messages" && (
          <div className="space-y-4">
            {messages.length === 0 ? (
              <div className="bg-white rounded-2xl p-8 text-center text-muted">No hay mensajes</div>
            ) : (
              messages.map((msg) => (
                <motion.div key={msg.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className={`bg-white rounded-2xl p-6 shadow-sm ${!msg.read ? "border-l-4 border-primary" : ""}`}>
                  <div className="flex justify-between mb-2">
                    <div><h3 className="font-semibold">{msg.name}</h3><p className="text-sm text-primary">{msg.service}</p></div>
                    <div className="flex gap-2">{!msg.read && <button onClick={() => markMessageRead(msg.id)} className="px-3 py-1 bg-green-100 text-green-700 rounded text-sm">Marcar leído</button>}</div>
                  </div>
                  <p className="text-muted">{msg.message}</p>
                  <p className="text-sm text-muted-light mt-2">{msg.phone}</p>
                </motion.div>
              ))
            )}
          </div>
        )}

        {/* Settings */}
        {activeTab === "settings" && (
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="font-semibold mb-6">🔥 Datos guardados en Firebase</h3>
              <div className="grid gap-4">
                <input type="text" value={company.name || ""} onChange={(e) => setCompany({...company, name: e.target.value})} className="px-4 py-3 rounded-xl border" placeholder="Nombre empresa" />
                <input type="text" value={company.phone || ""} onChange={(e) => setCompany({...company, phone: e.target.value})} className="px-4 py-3 rounded-xl border" placeholder="Teléfono" />
                <input type="text" value={company.instagram || ""} onChange={(e) => setCompany({...company, instagram: e.target.value})} className="px-4 py-3 rounded-xl border" placeholder="@instagram" />
                <input type="text" value={company.facebook || ""} onChange={(e) => setCompany({...company, facebook: e.target.value})} className="px-4 py-3 rounded-xl border" placeholder="Facebook" />
                <button onClick={saveCompany} disabled={saving} className="bg-primary text-white px-6 py-3 rounded-xl font-medium flex items-center gap-2">
                  {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
                  {saving ? "Guardando..." : "Guardar en Firebase"}
                </button>
              </div>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-xl p-4">
              <p className="text-green-800 font-medium">✅ Proyecto: dinstaire-ef9fd</p>
            </div>
          </div>
        )}

        {/* Products */}
        {activeTab === "products" && (
          <div className="bg-white rounded-2xl p-8 text-center text-muted">
            <Package className="w-16 h-16 mx-auto mb-4 opacity-50" />
            <h3 className="font-semibold text-secondary mb-2">Gestión de Productos</h3>
            <p>Próximamente - CRUD completo de productos</p>
          </div>
        )}
      </main>
    </div>
  );
}