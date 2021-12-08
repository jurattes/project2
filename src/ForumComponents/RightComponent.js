import { useEffect, useState } from "react";
import useFetchData from "../useFetchdata";

const RankedTopicsTable = (props) => {
    const [topics, setTopics] = useState([])

    useEffect(() => {
        if (props.data.categories) {
            const list = [].concat.apply([], props.data.categories.map((c) => c.topicList))
            console.log(list)
            list.sort((a, b) => b.nberPost - a.nberPost)
            setTopics(list)
        }

    }, [props.data])

    return <table>
        <thead>
            <tr>
                <th>title</th>
                <th>post_nb</th>
                <th>stat</th>
            </tr>
        </thead>
        <tbody>
            {topics.map(item => <tr>
                <td>
                    {item.topic_title}
                </td>
                <td>
                    {item.nberPost}
                </td>
                <td>
                    {item.status}
                </td>
            </tr>)}
        </tbody>
    </table>
}

const RecentPostsTable = (props) => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        if (props.data.categories) {
            let list = [].concat.apply([], ([].concat.apply([], props.data.categories.map((c) => c.topicList))).map((t) => t.listPosts))
            list = list.map((p) => {
                // To calculate the no. of days between two dates
                const difference = (new Date().getTime() - new Date(p.date).getTime()) / (1000 * 3600 * 24);
                return {
                    author: p.author,
                    rate: p.rate,
                    date: Math.ceil(difference)
                }
            })
            console.log(list)
            setPosts(list)
            setPosts(list.sort((a, b) => a.date > b.date ? 1 : -1))
        }

    }, [props.data])

    return <table>
        <thead>
            <tr>
                <th>author</th>
                <th>rank</th>
                <th>when</th>
            </tr>
        </thead>
        <tbody>
            {posts.map(item => <tr>
                <td>
                    {item.author}
                </td>
                <td>
                    {item.rate}
                </td>
                <td>
                    {item.date} days ago
                </td>
            </tr>)}
        </tbody>
    </table>
}

const StatsPostsTable = (props) => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        if (props.data.users)
            setUsers(props.data.users)
    }, [props.data])
    return <table>
        <tbody>
            {users.map(item => <tr>
                <td>
                    {item.user_id}
                </td>
                <td>
                    {item.nberPosts}
                </td>
            </tr>)}
        </tbody>
    </table>
}

const TableWarpper = (props) => {
    return <div style={{
        background: props.color,
        // color:'white',
        margin: '10px 0px',
        padding: '5px',
    }}>
        <h3 className="title" >{props.title}</h3>
        <div className="table-warpper">
            {props.children}
        </div>
    </div>
}

const RightComponent = (props) => {
    const [data] = useFetchData('forum.json')
    const [users] = useFetchData('users.json')


    return <section className="right-col">
        <TableWarpper title={'Ranked Topics'} color="#403131">
            <RankedTopicsTable data={data} />
        </TableWarpper>
        <TableWarpper title={'Recent Posts'} color="#241f30">
            <RecentPostsTable data={data} />
        </TableWarpper>
        <TableWarpper title={'Stats Posts'} color="#283630">
            <StatsPostsTable data={users} />
        </TableWarpper>
    </section>
}

export default RightComponent;