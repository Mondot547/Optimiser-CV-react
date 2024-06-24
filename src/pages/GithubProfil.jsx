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
        <Container className='text-center'>
            <h1>Github user</h1>
            <p className='fs-3 fw-bold'>{profile.name}</p>
            <img className='w-25 background-size-cover rounded-circle mb-3' src={profile.avatar_url} alt="Image de profile de l'utililisateur" />
            <p>{profile.bio}</p>
            <p>Abonnés : {profile.followers}</p>
            <p>Abonnements : {profile.following}</p>
            <p>Créé le : {new Date(profile.created_at).toLocaleString()}</p>
            <p>Modifié le : {new Date(profile.updated_at).toLocaleString()}</p>
            <p>URL repositories : <a href={profile.repos_url} target="_blank" rel="noopener noreferrer">{profile.repos_url}</a> </p>
        </Container>
    );
};

export default GitHubProfil;