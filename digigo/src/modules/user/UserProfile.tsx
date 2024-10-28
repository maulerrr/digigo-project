import React, { useEffect, useState } from 'react';
import apiClient from '../../api/axiosConfig';

interface UserProfileData {
  name: string;
  email: string;
}

const UserProfile: React.FC = () => {
  const [userData, setUserData] = useState<UserProfileData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await apiClient.get<UserProfileData>('/user/profile');
        setUserData(response.data);
      } catch (err) {
        setError('Failed to load user profile');
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  if (loading) return <p>Loading profile...</p>;
  if (error) return <p>{error}</p>;
  if (!userData) return null;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Profile</h2>
      <p><strong>Name:</strong> {userData.name}</p>
      <p><strong>Email:</strong> {userData.email}</p>
    </div>
  );
};

export default UserProfile;
