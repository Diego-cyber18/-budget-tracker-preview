// FILE CORRETTO – LAYOUT DESKTOP FIXED

import { useState, useEffect } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend, Cell } from "recharts";

/* ===== LAYOUT WRAPPER FIX ===== */
const PageContainer = ({ children }) => {
  return (
    <div style={{
      width: "100%",
      display: "flex",
      justifyContent: "center"
    }}>
      <div style={{
        width: "100%",
        maxWidth: "1200px",
        paddingLeft: "24px",
        paddingRight: "24px"
      }}>
        {children}
      </div>
    </div>
  );
};

/* ====== APP START ====== */
export default function BudgetTracker() {

  const [activeMainTab, setActiveMainTab] = useState("casa");
  const [activeCasaTab, setActiveCasaTab] = useState("progetti");

  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>

      {/* SIDEBAR */}
      <div style={{
        width: "260px",
        background: "#0f0f14",
        color: "#fff",
        padding: "24px"
      }}>
        Sidebar
      </div>

      {/* MAIN CONTENT */}
      <div style={{
        flex: 1,
        background: "#14141c",
        color: "#fff",
        paddingTop: "32px"
      }}>

        {/* CASA SECTION */}
        {activeMainTab === "casa" && (
          <PageContainer>

            {/* SUB TABS */}
            <div style={{
              display: "flex",
              gap: "12px",
              marginBottom: "32px"
            }}>
              <button onClick={() => setActiveCasaTab("bollette")}>Bollette</button>
              <button onClick={() => setActiveCasaTab("progetti")}>Progetti</button>
              <button onClick={() => setActiveCasaTab("mutuo")}>Mutuo</button>
            </div>

            {/* CONTENUTO DINAMICO */}
            {activeCasaTab === "bollette" && (
              <div>
                <h2>Bollette</h2>
                Contenuto bollette
              </div>
            )}

            {activeCasaTab === "progetti" && (
              <div>
                <h2>Progetti</h2>
                Contenuto progetti
              </div>
            )}

            {activeCasaTab === "mutuo" && (
              <div>
                <h2>Mutuo</h2>
                Contenuto mutuo
              </div>
            )}

          </PageContainer>
        )}

      </div>
    </div>
  );
}
