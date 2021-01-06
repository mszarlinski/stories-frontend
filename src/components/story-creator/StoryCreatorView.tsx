import React, { useState } from "react";
import { publishStory } from "./api";
import ReactModal from "react-modal";
import { useHistory } from "react-router-dom";

export const StoryCreatorView = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [showModal, setShowModal] = useState(false);
  const history = useHistory();

  const submitStory = () => {
    publishStory({ title: title, content: content }).then(
      (r) => confirmPublishing(),
      (e) => console.log("Failed to publish a story", e)
    );
  };

  const confirmPublishing = () => {
    setShowModal(true);
    setTimeout(() => {
      history.push("/stories");
      setShowModal(false);
    }, 3000);
  };

  return (
    <div>
      <div className="mb-3 pt-0">
        <input
          type="text"
          placeholder="Title"
          className="px-3 py-4 placeholder-gray-400 text-gray-700 bg-white rounded text-base border border-gray-400 outline-none focus:outline-none focus:shadow-outline w-full"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="mb-3 pt-0">
        <textarea
          placeholder="Tell your story..."
          className="px-3 py-4 placeholder-gray-400 text-gray-700 bg-white rounded text-base border border-gray-400 outline-none focus:outline-none focus:shadow-outline w-full"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>
      <div>
        <button
          className="rounded border bg-green-600 text-white p-2 focus:outline-none"
          onClick={submitStory}
        >
          Publish
        </button>
      </div>
      <ReactModal isOpen={showModal}>
        <div>Publishing your story...</div>
      </ReactModal>
    </div>
  );
};
