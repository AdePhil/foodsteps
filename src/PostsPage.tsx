import { useEffect, useState } from "react";

import { Card, Collapse, Space } from "antd";
import "./PostsPage.css";
import Page from "./Page";

import { useActiveUser } from "./context/ActiveUserContext";

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default function Posts() {
  const [posts, setPosts] = useState<Post[]>([]);
  const { activeUser } = useActiveUser();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${activeUser}`)
      .then((response) => response.json())
      .then((json) => setPosts(json));
  }, [activeUser]);

  return (
    <Page title="Posts">
      <Space direction="vertical">
        {posts.length === 0
          ? "No posts found."
          : posts.map((post, index) => <PostCard key={index} post={post} />)}
      </Space>
    </Page>
  );
}

interface PostCardProps {
  post: Post;
}

function PostCard(props: PostCardProps) {
  const { post } = props;

  return (
    <Collapse
      bordered={false}
      className="post-card"
      items={[
        {
          key: "1",
          label: post.title,
          children: (
            <Card className="post-card-body">
              <p>{post.body}</p>
            </Card>
          ),
        },
      ]}
    />
  );
}
