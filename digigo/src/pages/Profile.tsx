import React, { useEffect, useState } from 'react';
import axiosInstance, { fetchUserId } from '../api/axiosInstance';

interface UserProfile {
  id: string;
  email: string;
}

const ProfilePage: React.FC = () => {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const userId = await fetchUserId();
        if (userId) {
          const response = await axiosInstance.get('/user/profile');
          setProfile(response.data.user);
        } else {
          setError('User not found or unauthorized');
        }
      } catch (error) {
        console.error('Error fetching profile:', error);
        setError('Failed to load profile information');
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  if (loading) return <p>Loading profile...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="w-full flex justify-center">
      <div className='w-full max-w-md p-6 bg-white shadow-md rounded-lg"'>
        <h2 className="text-2xl font-bold mb-4">Profile</h2>
        {profile ? (
          <div className="bg-white shadow-md rounded-lg p-6">
            <p className="text-lg">
              <strong>ID:</strong> {profile.id}
            </p>
            <p className="text-lg">
              <strong>Email:</strong> {profile.email}
            </p>
          </div>
        ) : (
          <p>No profile information available.</p>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
