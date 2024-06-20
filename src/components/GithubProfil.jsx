import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';

const GitHubProfil = () => {
    const [profile, setProfile] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://api.github.com/users/github-john-doe')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                setProfile(data);
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
        return <div>Loading...</div>;
    }

    return (
        <Container>
            <h1>Github user {profile.name}</h1>
            <p>{profile.name}</p>
            <p>{profile.bio}</p>
            <p>Abonnés : {profile.followers}</p>
            <p>Abonnements : {profile.following}</p>
            <p>Créé le : {new Date(profile.created_at).toLocaleString()}</p>
            <p>Modifié le : {new Date(profile.updated_at).toLocaleString()}</p>
            <p>URL repositories : {profile.repos_url}</p>
        </Container>
    );
};

export default GitHubProfil;