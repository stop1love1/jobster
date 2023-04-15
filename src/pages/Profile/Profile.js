function Profile() {
    return (
        <div className="container">
            <form className="form wrap">
                <h4>profile</h4>
                <div className="form-center">
                    <div className="form-row">
                        <label className="form-label">name</label>
                        <input id="name" type="text" name="name" className="form-input" defaultValue="test user" />
                    </div>
                    <div className="form-row">
                        <label className="form-label">last name</label>
                        <input
                            id="lastName"
                            type="text"
                            name="lastName"
                            className="form-input"
                            defaultValue="shake and bake"
                        />
                    </div>
                    <div className="form-row">
                        <label className="form-label">email</label>
                        <input
                            id="email"
                            type="email"
                            name="email"
                            className="form-input"
                            defaultValue="testUser@test.com"
                        />
                    </div>
                    <div className="form-row">
                        <label className="form-label">location</label>
                        <input
                            id="location"
                            type="text"
                            name="location"
                            className="form-input"
                            defaultValue="vegan food truck"
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
