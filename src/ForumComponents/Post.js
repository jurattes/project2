import up from '../asset/up.png'
import down from '../asset/down.png'
import trash from '../asset/trash.png'
const Post = (props) => {
    return <section className="post">
        <div className="row1">
            <div className="header">By {props.post.author} {props.post.date}</div>
            <div className="content">{props.post.text}</div>
            <div className="footer">Likes: {props.post.likes}</div>
        </div>
        {/* <hr /> */}
        <div className="row2">
            <div onClick={() => props.like(props.post.topic_id)}><img width="30" height="30" src={up} alt="up" /></div>
            <div onClick={() => props.dislike(props.post.topic_id)}><img width="30" height="30" src={down} alt="down" /></div>
            <div onClick={() => props.delete(props.post.topic_id)}><img width="30" height="30" src={trash} alt="trash" /></div>
        </div>
    </section>
}

export default Post;