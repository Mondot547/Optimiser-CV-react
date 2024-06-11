import { useEffect, useState } from 'react';
import axios from 'axios';

const GitHubProfile = () => {
    const [profile, setProfile] = useState(null);

    useEffect(() => {
        axios.get('https://api.github.com/users/github-john-doe')
            .then(response => setProfile(response.data))
            .catch(error => console.error('Error fetching the GitHub profile:', error));
    }, []);

    if (!profile) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container text-center mt-5">
            <h1>Github user</h1>
            <h2>{profile.name}</h2>
            <img src={profile.avatar_url} alt={`${profile.name}'s avatar`} className="img-fluid rounded-circle my-4" style={{ width: '150px', height: '150px' }} />
            <p>{profile.bio}</p>
            <p>Abonnés : {profile.followers}</p>
            <p>Abonnements : {profile.following}</p>
            <p>Créé le : {new Date(profile.created_at).toLocaleString()}</p>
            <p>Modifié le : {new Date(profile.updated_at).toLocaleString()}</p>
            <p>URL repositories : <a href={profile.repos_url} target="_blank" rel="noopener noreferrer nofollow">{profile.repos_url}</a></p>
        </div>
    );
};

export default GitHubProfile;