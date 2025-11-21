"use client";

interface TabsProps {
  activeTab: string;
  setActiveTab: (tabId: string) => void;
}

export default function Tabs({ activeTab, setActiveTab }: TabsProps) {
  const tabs = [
    { id: "experience", label: "Experience" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
  ];

  return (
    <div
      role="tablist"
      aria-orientation="horizontal"
      className="h-10 items-center justify-center rounded-md tabs p-1 text-white grid grid-cols-3 w-full"
      tabIndex={0}
    >
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            type="button"
            role="tab"
            aria-selected={isActive}
            aria-controls={`tab-content-${tab.id}`}
            id={`tab-trigger-${tab.id}`}
            className={`tab text-white ${isActive ? "tab-active" : "tab-inactive text-gray-950"}`}
            tabIndex={isActive ? 0 : -1}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}
