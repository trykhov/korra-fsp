import React from 'react';

class CommentIndexItem extends React.Component {


    render() {
        const { comment } = this.props;
        return (
            <li>
                <div>
                    {comment.text}
                </div>
            </li>
        )
    }
}

export default CommentIndexItem;