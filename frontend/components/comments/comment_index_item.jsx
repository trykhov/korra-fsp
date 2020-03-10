import React from 'react';

class CommentIndexItem extends React.Component {


    render() {
        
        const { comment } = this.props;
        return (
            <div>{comment.text}</div>
        )
    }
}

export default CommentIndexItem;