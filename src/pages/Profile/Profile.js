import { useState, useContext } from 'react';
import { updateUser } from '@/services/auth';
import { UserContext } from '@/context/UserContext';
import { Input } from 'antd';

function Profile() {
    const { user, setUser } = useContext(UserContext);

    const [email, setEmail] = useState(user.email);
    const [name, setName] = useState(user.name);
    const [lastName, setLastName] = useState(user.lastName);
    const [location, setLocation] = useState(user.location);

    const onSubmit = async (e) => {
        e.preventDefault();
        const res = await updateUser({ email, name, lastName, location });
        setUser(res.user);
    };

    return (
        <div className="container">
            <form onSubmit={onSubmit} className="form wrap">
                <h4>profile</h4>
                <div className="form-center">
                    <div className="form-row">
                        <label className="form-label">name</label>
                        <Input
                            id="name"
                            type="text"
                            name="name"
                            className="form-input"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="form-row">
                        <label className="form-label">last name</label>
                        <Input
                            id="lastName"
                            type="text"
                            name="lastName"
                            className="form-input"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                    </div>
                    <div className="form-row">
                        <label className="form-label">email</label>
                        <Input
                            id="email"
                            type="email"
                            name="email"
                            className="form-input"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="form-row">
                        <label className="form-label">location</label>
                        <Input
                            id="location"
                            type="text"
                            name="location"
                            className="form-input"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="btn btn-block" style={{ marginTop: '15px' }}>
                        save changes
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Profile;
