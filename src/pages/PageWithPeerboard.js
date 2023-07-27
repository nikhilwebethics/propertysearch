import React from 'react';
import { createForum } from '@peerboard/core';

// Settings -> Hosting -> Board ID
const boardID = 50447753;
// Settings -> Hosting -> Path Prefix
const pathPrefix = '/pageWithPeerboard';

// Somewhere in your routing configuration. Don't use exact attribute - you should allow all nested routes
// <Route path="<PATH PREFIX>" component={PageWithPeerboard} />

class PageWithPeerboard extends React.Component {

    containerRef = React.createRef();

    state = {
        forum: null,
        error: null,
        loading: true,
    };

    async createPeerBoard() {
        const options = {


            prefix: pathPrefix,

            // Recommended setting so that the forum container
            // will always occupy all available space
            minHeight: window.innerHeight,

            // Update your page title according to the forum state
            onTitleChanged: title =>
                window.document.title = 'Your title ' + title,

            // You can remove the loaded and forum will be showed to the user
            onReady: () => this.setState({
                loading: false,
            }),

            onFail: () => this.setState({
                error: "Failed to load forum...",
            }),
        };

        // Optional. Do this only if you want to implement seamless login https://community.peerboard.com/post/183197627?category=2097967386
        // Add auth token so the user will be authenticated when community is loaded

        // options.jwtToken = await http.post('https://api.myapp.com/create-token-for-peerboard')

        this.forum = createForum(boardID, this.containerRef.current, options);
    }

    componentDidMount() {
        this.createPeerBoard().catch(err => this.setState({
            error: err.message,
        }));
    }

    componentWillUnmount() {
        // this.forum.destroy()
    }

    render() {
        return (
            <div>
              
                {this.state.error && this.state.error}
                {this.state.loading && 'Loading...'}
                <div ref={this.containerRef}></div>
            </div>
        );
    }
}
export default PageWithPeerboard;