import { useEffect, useState } from "react";
import Post from "./Post";

const LeftComponent = (props) => {
    const [load, setLoad] = useState(true)
    const [categories, setCategories] = useState([]);
    const [topics, setTopics] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState({ id: 1 });
    const [selectedTopic, setSelectedTopic] = useState({ id: 1 });
    const [posts, setPosts] = useState([])


    useEffect(() => {
        let list = []
        if (props.data.categories)
            list = [].concat.apply([], ([].concat.apply([], props.data.categories.map((c) => c.topicList))).map((t) => t.listPosts))
        list = list.filter(item => item.text.toLowerCase().includes(props.keyWord.toLowerCase()))
        console.log(props.keyWord)
        console.log(list)
        setPosts(list)
    }, [props.keyWord])

    useEffect(() => {
        if (props.data.categories && load) {
            setLoad(false)
            setCategories(props.data.categories)
            setSelectedCategory(props.data.categories[0])
            setTopics(props.data.categories[0].topicList)
            setPosts(props.data.categories[0].topicList[0].listPosts)
        }
    }, [props.data])


    const handleSelectCategory = (e) => {
        const { value } = e.target
        const cat = categories.filter((c) => c.id == value)[0]
        setSelectedCategory(cat)

        if (selectedCategory != '0') {
            setTopics(cat.topicList)
            setSelectedTopic(cat.topicList[0])
            setPosts(cat.topicList[0].listPosts)
        } else {
            setSelectedTopic(null)
        }

    }

    const handleSelecteTopic = (e) => {
        const { value } = e.target
        const topic = selectedCategory.topicList.filter((t) => t.id == value)[0]
        setSelectedTopic(topic)
        setPosts(topic.listPosts)
    }

    const findPost = (forum, cat_id, topic_id, post_id) => {
        const category = forum.categories.filter(c => c.id === Number(cat_id))[0]
        const topic = category.topicList.filter(c => c.id === Number(topic_id))[0]
        const post = topic.listPosts.filter(c => c.id === Number(post_id))[0]
        return post;
    }

    const handleDislike = (topic_id) => {
        const [cat, topic, post] = topic_id.split('_')
        const forum = { ...props.data }
        const target = findPost(forum, cat.slice(-1), topic.slice(-1), post.slice(-1))
        if (target.likes)
            target.likes--
        else {
            target.likes = 0
        }
        target.likes = Math.max(target.likes, 0)
        props.setForumData(forum)
    }

    const handleLike = (topic_id) => {
        const [cat, topic, post] = topic_id.split('_')
        const forum = { ...props.data }
        const target = findPost(forum, cat.slice(-1), topic.slice(-1), post.slice(-1))
        if (target.likes)
            target.likes++
        else {
            target.likes = 1
        }
        props.setForumData(forum)
    }

    const handleDelete = (topic_id) => {
        const [cat, topic, post] = topic_id.split('_')
        const forum = { ...props.data }
        const category = forum.categories.filter(c => c.id === Number(cat.slice(-1)))[0]
        const t = category.topicList.filter(c => c.id === Number(topic.slice(-1)))[0]
        t.listPosts = t.listPosts.filter(c => c.id !== Number(post.slice(-1)))
        props.setForumData(forum)
        const newPosts = posts.filter(c => c.topic_id !== topic_id)
        setPosts(newPosts)
    }


    return <section className="left-col">
        <section className="filter">
            <section>
                <label htmlFor="category">Category </label>
                <select id="category" value={selectedCategory.id} onChange={handleSelectCategory}>
                    {categories.map((c) => <option key={'cat' + c.id} value={c.id}>{c.name}</option>)}
                </select>
            </section>

            <section>
                <label htmlFor="topic">Topic </label>
                <select id="topic" value={selectedTopic.id} onChange={handleSelecteTopic}>
                    {topics.map((t) => <option key={'top' + t.id} value={t.id}>{t.topic_title}</option>)}
                </select>
            </section>
        </section>
        <section className="posts">
            {posts.map((p, i) => <div key={'post' + p.id + i}>
                <Post post={p} like={handleLike} dislike={handleDislike} delete={handleDelete} />
            </div>)}
        </section>
    </section>
}

export default LeftComponent;