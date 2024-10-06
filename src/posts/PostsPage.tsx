import { useEffect, useMemo, useRef, useState } from "react";

import { Card, Space, Collapse } from "antd";
import { Post } from "../types";
import { useActiveUser } from "../context/ActiveUserContext";
import Input from "../components/input/Input";
import "./PostsPage.css";

export default function Posts() {
  const [posts, setPosts] = useState<Post[]>([]);
  const { activeUser } = useActiveUser();
  const [search, setSearch] = useState("");

  const filteredPosts = useMemo(() => {
    if (!search) return posts;
    return posts.filter((post) => {
      return post.title.toLowerCase().includes(search.toLowerCase());
    });
  }, [posts, search]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  const clearInput = () => {
    setSearch("");
    inputRef.current?.focus();
  };

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${activeUser}`)
      .then((response) => response.json())
      .then((json) => setPosts(json));
  }, [activeUser]);

  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <Space direction="vertical" size={30}>
      <Input
        ref={inputRef}
        value={search}
        onChange={handleChange}
        placeholder="Search posts"
        autoFocus
        startAdornment={
          <span className="input-icon search-icon">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_1_70)">
                <path
                  d="M10.9091 0C16.909 0 21.8181 4.90915 21.8181 10.9095C21.8181 13.5278 20.8909 15.9276 19.3636 17.7824L23.6728 22.0916C24.1091 22.5279 24.1091 23.1824 23.6728 23.6189C23.4545 23.8914 23.1819 24.0006 22.909 24.0006C22.6363 24.0006 22.3635 23.8916 22.1454 23.6733L17.8362 19.3641C15.9272 20.8915 13.5272 21.8187 10.9092 21.8187C4.90924 21.8187 8.39233e-05 16.9096 8.39233e-05 10.9096C-9.91821e-05 4.90925 4.90924 9.81826e-05 10.9092 9.81826e-05L10.9091 0ZM10.9091 19.6366C15.7093 19.6366 19.6366 15.7093 19.6366 10.9091C19.6364 6.10932 15.7091 2.182 10.9091 2.182C6.10885 2.182 2.18152 6.10932 2.18152 10.9095C2.18152 15.7093 6.10885 19.6366 10.9091 19.6366Z"
                  fill="currentColor"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_70">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </span>
        }
        endAdornment={
          <button
            className={`${!!search ? "has-text" : ""} input-icon close-icon`}
            onClick={clearInput}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="24" height="24" rx="12" fill="#939393" />
              <g clip-path="url(#clip0_3_233)">
                <path
                  d="M6.70708 8.12132C6.31655 7.7308 6.31655 7.09763 6.70708 6.70711C7.0976 6.31658 7.73077 6.31658 8.12129 6.70711L17.2968 15.8827C17.6874 16.2732 17.6874 16.9064 17.2968 17.2969C16.9063 17.6874 16.2732 17.6874 15.8826 17.2969L6.70708 8.12132Z"
                  fill="white"
                />
                <path
                  d="M15.8826 6.70711C16.2732 6.31659 16.9063 6.31659 17.2968 6.70711C17.6874 7.09763 17.6874 7.7308 17.2968 8.12132L8.12129 17.2969C7.73077 17.6874 7.0976 17.6874 6.70708 17.2969C6.31655 16.9064 6.31655 16.2732 6.70708 15.8827L15.8826 6.70711Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_3_233">
                  <rect
                    width="12"
                    height="12"
                    fill="white"
                    transform="translate(6 6)"
                  />
                </clipPath>
              </defs>
            </svg>
          </button>
        }
      />
      <Space direction="vertical" className="post-container">
        {filteredPosts.length === 0
          ? "No posts found."
          : filteredPosts.map((post, index) => (
              <PostCard key={index} post={post} />
            ))}
      </Space>
    </Space>
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
