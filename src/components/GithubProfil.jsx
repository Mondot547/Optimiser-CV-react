import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import axios from 'axios';

const GitHubProfil = () => {
    const [profile, setProfile] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('https://api.github.com/users/github-john-doe')
            .then(response => {
                setProfile(response.data);
            })
            .catch(error => {
                console.error('Error fetching the GitHub profile:', error);
                setError(error.message);
            });
    }, []);

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!profile) {
        return <div className='m-auto'>Loading...</div>;
    }

    return (
        <Container className="text-center mt-5">
            <h1>Github user</h1>
            <h2>{profile.name}</h2>
            <img src={profile.avatar_url} alt={`${profile.name}'s avatar`} className="img-fluid rounded-circle my-4" />
            <p>{profile.bio}</p>
            <p>Abonnés : {profile.followers}</p>
            <p>Abonnements : {profile.following}</p>
            <p>Créé le : {new Date(profile.created_at).toLocaleString()}</p>
            <p>Modifié le : {new Date(profile.updated_at).toLocaleString()}</p>
            <p>URL repositories : <a href={profile.repos_url} target="_blank" rel="noopener noreferrer nofollow">{profile.repos_url}</a></p>
        </Container>
    );
};

export default GitHubProfil;
