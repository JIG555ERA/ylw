import { useState } from "react";
import { motion } from "motion/react";
import { Camera, Save, X, User, Phone, Mail, MapPin } from "lucide-react";
import Button from "../../components/ui/Button";
import { Input } from "../../components/ui/Input";
import { Label } from "../../components/ui/Label";
// import { Textarea } from "../../components/ui";

export function ProfileSection() {
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    addressLine1: "123 Main Street",
    addressLine2: "Apt 4B",
    city: "New York",
    state: "NY",
    pincode: "10001"
  });
  const [editedData, setEditedData] = useState(userData);

  const handleSave = () => {
    setUserData(editedData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedData(userData);
    setIsEditing(false);
  };

  const handleInputChange = (field, value) => {
    setEditedData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="max-w-4xl">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-semibold text-gray-900 dark:text-white mb-2">Profile Settings</h1>
          <p className="text-gray-600 dark:text-gray-400">Manage your personal information and preferences</p>
        </div>
        {!isEditing && (
          <Button onClick={() => setIsEditing(true)} className="bg-gradient-to-r from-purple-500 to-pink-500">
            Edit Profile
          </Button>
        )}
      </div>

      {/* Profile Photo */}
      <div className="bg-white/60 dark:bg-gray-800/60 rounded-2xl p-6 mb-6 border border-gray-200/50 dark:border-gray-700/50">
        <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Profile Photo</h3>
        <div className="flex items-center gap-6">
          <div className="relative group">
            <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
              <User className="h-12 w-12 text-white" />
            </div>
            {isEditing && (
              <button className="absolute inset-0 bg-black/50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <Camera className="h-6 w-6 text-white" />
              </button>
            )}
          </div>
          <div>
            <h4 className="font-medium text-gray-900 dark:text-white">Profile Picture</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Upload a photo to personalize your account</p>
            {isEditing && (
              <Button variant="outline" size="sm">
                <Camera className="h-4 w-4 mr-2" />
                Change Photo
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Personal Information */}
      <div className="bg-white/60 dark:bg-gray-800/60 rounded-2xl p-6 mb-6 border border-gray-200/50 dark:border-gray-700/50">
        <div className="flex items-center gap-2 mb-6">
          {/* <User className="h-5 w-5 text-purple-500" /> */}
          <h3 className="text-lg font-medium text-gray-900 dark:text-white">Personal Information</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="name"
              value={isEditing ? editedData.name : userData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              disabled={!isEditing}
              className="mt-2"
            />
          </div>

          <div>
            <Label htmlFor="email">Email Address</Label>
            <div className="relative">
              {/* <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" /> */}
              <Input
                id="email"
                type="email"
                value={isEditing ? editedData.email : userData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                disabled={!isEditing}
                className="mt-2 pl-3"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="phone">Phone Number</Label>
            <div className="relative">
              {/* <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" /> */}
              <Input
                id="phone"
                value={isEditing ? editedData.phone : userData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                disabled={!isEditing}
                className="mt-2 pl-3"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Address Information */}
      <div className="bg-white/60 dark:bg-gray-800/60 rounded-2xl p-6 mb-6 border border-gray-200/50 dark:border-gray-700/50">
        <div className="flex items-center gap-2 mb-6">
          {/* <MapPin className="h-5 w-5 text-purple-500" /> */}
          <h3 className="text-lg font-medium text-gray-900 dark:text-white">Address Information</h3>
        </div>

        <div className="space-y-4">
          <div>
            <Label htmlFor="addressLine1">Address Line 1</Label>
            <Input
              id="addressLine1"
              value={isEditing ? editedData.addressLine1 : userData.addressLine1}
              onChange={(e) => handleInputChange("addressLine1", e.target.value)}
              disabled={!isEditing}
              className="mt-2"
            />
          </div>

          <div>
            <Label htmlFor="addressLine2">Address Line 2 (Optional)</Label>
            <Input
              id="addressLine2"
              value={isEditing ? editedData.addressLine2 : userData.addressLine2}
              onChange={(e) => handleInputChange("addressLine2", e.target.value)}
              disabled={!isEditing}
              className="mt-2"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <Label htmlFor="city">City</Label>
              <Input
                id="city"
                value={isEditing ? editedData.city : userData.city}
                onChange={(e) => handleInputChange("city", e.target.value)}
                disabled={!isEditing}
                className="mt-2"
              />
            </div>

            <div>
              <Label htmlFor="state">State</Label>
              <Input
                id="state"
                value={isEditing ? editedData.state : userData.state}
                onChange={(e) => handleInputChange("state", e.target.value)}
                disabled={!isEditing}
                className="mt-2"
              />
            </div>

            <div>
              <Label htmlFor="pincode">Pincode</Label>
              <Input
                id="pincode"
                value={isEditing ? editedData.pincode : userData.pincode}
                onChange={(e) => handleInputChange("pincode", e.target.value)}
                disabled={!isEditing}
                className="mt-2"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      {isEditing && (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex gap-4 justify-end">
          <Button variant="outline" onClick={handleCancel} className="px-6">
            <X className="h-4 w-4 mr-2" />
            Cancel
          </Button>
          <Button onClick={handleSave} className="px-6">
            <Save className="h-4 w-4 mr-2" />
            Save Changes
          </Button>
        </motion.div>
      )}
    </div>
  );
}
