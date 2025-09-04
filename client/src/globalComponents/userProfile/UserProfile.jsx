import { useState } from "react";
import { motion } from "motion/react";
import { X, User, Package, Bookmark, Info, CreditCard } from "lucide-react";
import { ProfileSection } from "./ProfileSection";
import { OrdersSection } from "./OrderSection";
import { BookmarksSection } from "./BookmarkSection";
import  AboutSection  from "./AboutSection";
import  PaymentSection from "./PaymentSection";

const menuItems = [
  { id: "profile", label: "Profile", icon: User },
  { id: "orders", label: "Your Orders", icon: Package },
  { id: "bookmarks", label: "Bookmarks", icon: Bookmark },
  { id: "about", label: "About Us", icon: Info },
  { id: "payments", label: "Payments", icon: CreditCard },
];

export function UserProfile({ isOpen, onClose, bookmarks, onRemoveBookmark }) {
  const [activeSection, setActiveSection] = useState("profile");

  if (!isOpen) return null;

  const renderContent = () => {
    switch (activeSection) {
      case "profile":
        return <ProfileSection />;
      case "orders":
        return <OrdersSection />;
      case "bookmarks":
        return (
          <BookmarksSection
            bookmarks={bookmarks}
            onRemoveBookmark={onRemoveBookmark}
          />
        );
      case "about":
        return <AboutSection />;
      case "payments":
        return <PaymentSection />;
      default:
        return <ProfileSection />;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Main Profile Container */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        className="relative ml-auto w-full max-w-6xl bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg shadow-2xl flex"
      >
        {/* Sidebar Navigation */}
        <div className="w-80 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-r border-gray-200/50 dark:border-gray-700/50 p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                Account
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Manage your profile and preferences
              </p>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-gray-100/80 dark:bg-gray-700/80 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
            >
              <X className="h-5 w-5 text-gray-600 dark:text-gray-400" />
            </button>
          </div>

          {/* User Info */}
          <div className="mb-8 p-4 bg-gradient-to-br from-pastel-purple/50 to-pastel-pink/50 rounded-2xl border border-white/20">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gradient-to-br from-vibrant-purple to-vibrant-pink rounded-full flex items-center justify-center shadow-lg">
                <User className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  John Doe
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  john.doe@example.com
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Menu */}
          <nav className="space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all duration-200 ${
                    isActive
                      ? "bg-gradient-to-r from-vibrant-purple/10 to-vibrant-pink/10 text-vibrant-purple border border-vibrant-purple/20 shadow-md"
                      : "text-gray-600 dark:text-gray-400 hover:bg-gray-100/50 dark:hover:bg-gray-700/50 hover:text-gray-900 dark:hover:text-white"
                  }`}
                >
                  <Icon
                    className={`h-5 w-5 ${
                      isActive ? "text-vibrant-purple" : ""
                    }`}
                  />
                  <span className="font-medium">{item.label}</span>
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="ml-auto w-2 h-2 bg-vibrant-purple rounded-full"
                      transition={{ type: "spring", damping: 25, stiffness: 400 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col">
          <div className="flex-1 overflow-y-auto">
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="p-8"
            >
              {renderContent()}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
