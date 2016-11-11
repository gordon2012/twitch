import React from 'react';

export default React.createClass({
    render: function() {
        const {display_name, bio, logo, stream} = this.props.user;
        const streaming = stream == null ? '' : 'streaming';

        return <div className={'entry ' + streaming}>
            <img src={logo} alt={name}/>
            <h3>{display_name}</h3>

                {streaming ?
                    <div>
                        <h4>{stream.game}</h4>
                        <p>{stream.channel.status}</p>
                    </div>
                :
                    <div>
                        <p>{bio}</p>
                    </div>
                }
        </div>;
    }
});
