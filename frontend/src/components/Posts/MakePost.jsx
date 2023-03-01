import { useState } from "react";
import { useDispatch } from "react-redux";
import Input from "../InputFields/Input";
import { createPost } from "../../redux/postSlice";
import "./post.css";
const MakePost = (props) => {
  const { setOpenPost } = props;
  const [title, setTitle] = useState("Add a title");
  const [desc, setDesc] = useState("Set some description");
  const dispatch = useDispatch();
  const [selectedIdx, setSelectedIdx] = useState(0);
  const tags = ["None", "NSFW", "Mood", "Quotes", "Shitpost"];
  const handlePost = () => {
    setOpenPost(false);
    const newPost = {
      title: title,
      description: desc,
      tag: selectedIdx,
    };
    dispatch(createPost(newPost));
  };
  return (
    <section className="makepost-container">
      <div className="makepost-navigation">
        <p className="makepost-save" onClick={handlePost}>
          Post
        </p>
      </div>
      <Input
        data={title}
        inputType="textarea"
        setData={setTitle}
        label="Title"
        classStyle="makepost-title"
      />
      <Input
        data={desc}
        inputType="textarea"
        setData={setDesc}
        label="Descriptons"
        classStyle="makepost-desc"
      />
      <label>
        Tags
        <div className="makepost-tags">
          {tags.map((tag, index) => {
            return (
              <button
                key={index}
                className={`${
                  selectedIdx === index
                    ? `makepost-tags-selected`
                    : `makepost-tags-${tag}`
                }`}
                onClick={() => setSelectedIdx(index)}
              >
                {tag}
              </button>
            );
          })}
        </div>
      </label>
    </section>
  );
};

export default MakePost;
